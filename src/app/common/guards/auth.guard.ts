import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';
declare const Swal: any;
export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userService = inject(UserService);
  if(!userService.isLoggedIn()) { 
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "Bạn cần phải đăng nhập",
      showConfirmButton: false,
      timer: 1500
    });
    router.navigate(['/login']);
    return false;
  }
  return true;
};
