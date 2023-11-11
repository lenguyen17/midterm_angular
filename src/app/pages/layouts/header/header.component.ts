import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  searchTxt: string = '';
  constructor(public router: Router){}
  search(){
    if (this.searchTxt && this.searchTxt.trim() !== '') {
      this.router.navigate(['/store'], { queryParams: { name: this.searchTxt } });
    } else {
      this.router.navigate(['/store']);
  }}
}
