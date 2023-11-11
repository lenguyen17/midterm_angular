import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/common/models/user.model';
import { UserService } from 'src/app/common/services/user.service';
declare const Swal: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user: User = new User();
  showPassword: boolean = false;

  constructor(private userService: UserService, private router: Router) {
    this.user.username = 'johnd';
    this.user.password = 'm38rmF$';
  }

  ngOnInit() {}

  onLogin() {
    this.userService.login(this.user.username, this.user.password)
      .then((data: any) => 
        {
          if(data){
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Đăng nhập thành công",
              showConfirmButton: false,
              timer: 1500
            });
            this.router.navigate(['/']);
          }
        }
      );
  }
}
