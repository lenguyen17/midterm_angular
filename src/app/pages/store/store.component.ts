import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/models/product.model';
import { CartService } from 'src/app/common/services/cart.service';
import { ProductService } from 'src/app/common/services/product.service';
declare const Swal: any;

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent {
  listProducts: Product[] = [];
  cart: Array<any> = [];
  hoadon: Array<any> = [];
  tongTienhang: number = 0;
  constructor(private produceService: ProductService, private cartService: CartService, private route: ActivatedRoute) {
    this.cart = [...this.cartService.getCart()];
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const name = params['name'];
      if (name && name.trim() !== '') {
        this.produceService.getListProduct()
          .then((data: any) => this.listProducts = data.filter((product: any) => product.title.toLowerCase().indexOf(name.toLowerCase()) > -1))
      } else {
        this.produceService.getListProduct()
          .then((data: any) => this.listProducts = data);
      }
    });


  }

  getTotal(): number {
    return this.cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
  }

  addToCart(product: Product) {
    let addedProduct = this.cart.find(p => p.id === product.id);
    if (addedProduct) {
      let newQuantity = addedProduct.quantity + 1;
      addedProduct.quantity = newQuantity;
      this.cartService.updateQuantity(product.id, newQuantity);
    } else {
      this.cart.push({ ...product, quantity: 1 });
      this.cartService.addProduct(product, 1);
    }
    console.log(this.cart);
  }
  handleIconClick(event: any, index: number) {
    var buttonElement = event.target.closest(`#item-btn-${index}`);
    const ariaExpanded = buttonElement.getAttribute('aria-expanded');
    let id = 'cart-item-' + index;
    let box: any = document.getElementById(id);
    if (ariaExpanded == "true") {
      event.currentTarget.classList.add('open-cart-product');
      box.classList.add('active');
    } else {
      event.currentTarget.classList.remove('open-cart-product')
      box.classList.remove('active');
    }
  }

  openCartProduct(event: any, index: number) {
    const ariaExpanded = event.currentTarget.getAttribute('aria-expanded');
    const id = 'cart-item-' + index;
    let box: any = document.getElementById(id);
    if (ariaExpanded == "true") {
      event.currentTarget.classList.add('open-cart-product');
      box.classList.add('active');
    } else {
      event.currentTarget.classList.remove('open-cart-product')
      box.classList.remove('active');
    }
  }

  increaseQuantity(item: any) {
    let newQuantity = ++item.quantity;
    this.cart.find(i => i.id == item.id).quantity = newQuantity;
    this.cartService.updateQuantity(item.id, newQuantity);
  }
  decreaseQuantity(item: any) {
    let newQuantity = --item.quantity;
    if (item.quantity <= 0) {
      this.removeItem(item);
    } else {
      this.cart.find(i => i.id == item.id).quantity = newQuantity;
      this.cartService.updateQuantity(item.id, newQuantity);
    }
  }

  removeItem(item: any): void {
    if (window.confirm('Bạn muốn xóa sản phẩm khỏi giỏ hàng ?')) {
      this.cart = this.cart.filter((i: any) => i.id != item.id);
      this.cartService.removeProduct(item.id);
    }
  }

  thanhToan(): void {
    if (this.cart.length > 0) {
      this.hoadon = [...this.cart];
      this.tongTienhang = this.getTotal();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Thanh toán thành công",
        showConfirmButton: false,
        timer: 1500
      });
      let showCheckout: any = document.getElementById('checkout-btn');
      setTimeout(() => { showCheckout.click(); }, 1500);
      console.log(this.hoadon)
      this.cart = this.cart.filter(i => false);
      this.cartService.removeAll();
    } else {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Vui lòng chọn sản phẩm",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }
}
