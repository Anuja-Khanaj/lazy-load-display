import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() bagade:string
 constructor(private authservice: AuthService){}
  logout(){
    this.authservice.logout();
  }
}
