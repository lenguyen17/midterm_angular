import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/common/models/product.model';
import { ProductService } from 'src/app/common/services/product.service';
import { Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

declare const Swal: any;

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})

export class AddproductComponent {
  idEdit: any = -1;
  pdForm:Product = new Product();
  categories:any;
  isValid:boolean = false;
  isSuccess:boolean = false;
  idTimeout:any = 0;
  constructor(
    private productService:ProductService, 
    private renderer: Renderer2,
    private route:ActivatedRoute,
    private router: Router
  ){}
  
  
  ngOnInit() {
    this.loadCategory();
    this.route.paramMap.subscribe(params => {
      this.idEdit = params.get('id');
      if(this.idEdit) {
        this.productService.getProductbyId(this.idEdit)
        .then((res:any) => {
          this.pdForm = res;
          this.loadImgDemo(res.image)
        })
      }
    })
  }
  ngOnDestroy() {
    clearTimeout(this.idTimeout);
    this.idTimeout = 0;
    this.idEdit = -1;
  }

  loadCategory() {
    this.productService.getCategory()
    .then((res) => {
      this.categories = res;
    });
  }
  loadImgDemo(url:string = 'off' ) {
    let pattern = /^((http|https):\/\/)/;
    let elementImage = document.querySelector('.product-add__img-demo')
    if(pattern.test(url)) {
        if (elementImage) {
          this.renderer.setProperty(elementImage, 'src', url);
        }
    } else if(url == 'off') {
      this.renderer.setProperty(elementImage, 'src', '');
    }
  }
  addProduct(form:NgForm) {
    this.isValid = true
    console.log('this.idEdit :>> ', this.idEdit);
    if(!this.idEdit) {
      if(form.valid) {
        this.productService.createProduct(this.pdForm)
        .then((result) => {
          console.log('thêm thành công product :>> ', result);
          this.clearForm(form);
        form.reset();

          this.isSuccess = true;
          this.idTimeout = setTimeout(() => {
            this.isSuccess = false
          }, 5000)
        }).catch((err) => {
          console.log('Lỗi create Product :>> ', err);
        });
      }
    } else {
      this.updateProduct(form)
    }
  }
  updateProduct(form:NgForm) {
    console.log('form :>> ', form); 
    if(form.valid) {
      this.productService.updateProduct(this.pdForm, this.idEdit)
      .then((result) => {
        console.log('Cập nhật thành công : id :>> ', result);
        this.clearForm(form);
        this.idEdit = -1;
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Cập nhật thành công",
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/']);
      }).catch((err) => {
        console.log('Lỗi update Product :>> ', err);
      });
    }
  }
  clearForm(form:NgForm) {
    this.pdForm = new Product()
    this.isValid = false;
    this.loadImgDemo()
  }
  
}
