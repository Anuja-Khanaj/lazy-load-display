import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddTocartService } from 'src/app/service/add-tocart.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  implements OnInit{
  @Input() bagade:string
  isdisplay:boolean = false
  cartData=[];
  count:number;
  like:number = 0 ;
 constructor(private authservice: AuthService,private cart:AddTocartService,private router:Router){}
  logout(){
    this.authservice.logout();
  }
  display(){
    this.isdisplay = !this.isdisplay
  }

  ngOnInit(): void {
    this.cartData = this.cart.getCart();
    this.count = this.cartData.length
  }
  
 
}
