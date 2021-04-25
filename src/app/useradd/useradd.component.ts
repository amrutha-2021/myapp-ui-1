import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { catchError, retry, tap } from 'rxjs/operators';
@Component({
  selector: 'app-useradd',
  templateUrl: './useradd.component.html',
  styleUrls: ['./useradd.component.css']
})
export class UseraddComponent {
 
  addressForm = this.fb.group({
    company: null,
    tradeName: [null, Validators.required],
    staus: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    
    ],  
    pancardno: [null, Validators.required],
    aadharcardno: [null, Validators.required],
    servicetaxcode: [null, Validators.required],
    bankdetails: [null, Validators.required],
    bankdetails2: null,

    
  });

  hasUnitNumber = false;

  states = [
    {name: 'Andhra Pradesh', abbreviation: 'AP'},
    {name: 'Arunachal Pradesh', abbreviation: 'AP'},
    {name: 'Assam', abbreviation: 'AS'},
    {name: 'Bihar', abbreviation: 'BH'},
    {name: 'Chhattisgarh', abbreviation: 'CH'},
    {name: 'Goa', abbreviation: 'GA'},
    {name: 'Gujarat', abbreviation: 'GT'},
    {name: 'Haryana', abbreviation: 'HA'},
    {name: 'Himachal Pradesh', abbreviation: 'HP'},
    {name: 'Jharkhand', abbreviation: 'JD'},
    {name: 'Karnataka', abbreviation: 'KT'},
    {name: 'Kerala', abbreviation: 'KA'},
    {name: 'Madhya Pradesh', abbreviation: 'MP'},
    {name: 'Maharashtra', abbreviation: 'MT'},
    {name: 'Manipur', abbreviation: 'MR'},
    {name: 'Meghalaya', abbreviation: 'MA'},
    {name: 'Mizoram', abbreviation: 'MM'},
    {name: 'Nagaland', abbreviation: 'ND'},
    {name: 'Odisha', abbreviation: 'OA'},
    {name: 'Punjab', abbreviation: 'PB'},
    {name: 'Rajasthan', abbreviation: 'RN'},
    {name: 'Sikkim', abbreviation: 'SM'},
    {name: 'Tamil Nadu', abbreviation: 'TN'},
    {name: 'Telangana', abbreviation: 'TA'},
    {name: 'Tripura', abbreviation: 'TR'},
    {name: 'Uttar Pradesh', abbreviation: 'UP'},
    {name: 'Uttarakhand', abbreviation: 'UD'},
    {name: 'West Bengal', abbreviation: 'WB'}
      ];



  constructor(private fb: FormBuilder, private http:HttpClient) {
   var result=  this.getDetails();
    
    console.log(result);
  }

  onSubmit(): void {
    if(this.addressForm.valid){
      console.log('data --> ',this.addressForm.value);
    }
    else{
      alert('Validation Failed!');
    }
    
  }


  public getDetails(){
   
    return this.http.get<any>('http://localhost:3000/client_details')
    .pipe(
      retry(3), //retry n/w calls for 3 times
    );
  }
  
}
