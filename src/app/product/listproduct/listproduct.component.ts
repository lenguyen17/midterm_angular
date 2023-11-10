import { Component } from '@angular/core';
import Product from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
declare const Swal:any;
@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.scss']
})

export class ListproductComponent {
  listProduct:any;
  constructor(
    private productService:ProductService
  ){}

  ngOnInit() {
    this.loadProductList();
  }

  loadProductList() {
    this.productService.getListProduct()
    .then((products) => {
      console.log('lấy thành cong :>> ');
      this.listProduct = products
    })
  }
  removeProduct(id:any) {
    Swal.fire({
      title: "Bạn muốn xóa sản phẩm này?",
      text: "Bạn sẽ không thể khôi phục lại!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Đồng ý"
    }).then((result:any) => {
      if (result.isConfirmed) {
        // gửi yêu cầu xóa
        this.productService.deleteProduct(id)
        .then(res => {
          console.log('Xóa thành công :>> ', res);
          Swal.fire({
            title: "Đã xóa!",
            text: "Sản phẩm đã xóa thành công.",
            icon: "success"
          });
          this.listProduct.forEach((product:any, index:number) => {
            if(product.id == id) {
              this.listProduct.splice(index,1)
            }
          });
        })
        
      }
    });
    
  }

}
