import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent {
  productName = 'Product Name';
  productPrice = 'Product Price';
  numberOfItems = 2;
  addressForm: FormGroup;
  readonly panelOpenState = signal(true);
  constructor(private fb: FormBuilder,private router:Router) {
    this.addressForm = this.fb.group({
      name:['',Validators.required],
      defaultAddress: [false],
      state: ['', Validators.required],
      townCity: ['', Validators.required],
      landmark: [''],
      street: [''],
      sector: [''],
      village: [''],
      flat: [''],
      houseNo: [''],
      building: [''],
      company: [''],
      apartment: [''],
      pincode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      countryRegion: ['', Validators.required]
    });
  }

  placeOrder() {
    this.router.navigate(["../../dashborad/done"])
  }

  onSubmit() {
    if (this.addressForm.valid) {
      console.log('Form Submitted', this.addressForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
