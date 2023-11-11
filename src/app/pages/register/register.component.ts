import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/common/models/user.model';
import { UserService } from 'src/app/common/services/user.service';
declare const Swal :any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user: User = new User();

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  onRegister() {
    if (!this.user.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/)) {
      alert('Email không hợp lệ');
      return;
    }
  
    if (this.user.password.length < 8) {
      alert('Mật khẩu phải trên 8 ký tứ');
      return;
    }
    this.userService.register(this.user).then((user) => {
      if (user) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Đăng ký thành công, ID user: " + user.id,
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['/login']);
      } else {
        alert('Đăng ký thất bại');
      }
    });
  }
}
