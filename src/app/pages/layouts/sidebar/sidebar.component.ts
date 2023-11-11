import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/common/services/user.service';
declare const Swal: any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor( private userService: UserService, private router: Router){
  }
  logout():void {
    this.userService.logout();
    this.router.navigate(['/login']);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Bạn đã đăng xuất",
      showConfirmButton: false,
      timer: 1500
    });
  }
  login(): void {
    this.router.navigate(['/login']);
  }
  isLoggedIn(): boolean {
    return this.userService.isLoggedIn();
  }
}
