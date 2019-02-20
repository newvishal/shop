import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { CategoryService } from '../service/category.service';
import { Router } from "@angular/router";
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  public loginform : FormGroup;
  constructor(private fb: FormBuilder,
    private service: CategoryService,
    public toastr: ToastrManager,
    private router: Router,
    private auth: AuthService
  ) { 
    this.loginform = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    });
    this.auth.logout();
  }
  
   // convenience getter for easy access to form fields
   get f() { return this.loginform.controls; }
   onSubmit(values){
      if(this.loginform.invalid){
        return;
      }else{
        //  console.log(values);
        const logindata = new FormData();
        logindata.append('username',values.username);
        logindata.append('password',values.password);
        this.service.login(logindata).subscribe(result => {
            if(result['status'] == '200'){
              // window.localStorage.setItem("token",result['token']);
              this.auth.sendToken(result['token']);
              this.toastr.successToastr(result['message']);
              this.router.navigate(['category']);
            }else{
               this.toastr.errorToastr(result['message']);
            }
        },
        err => { this.toastr.errorToastr('Somthing Went Wrong', 'Error!'); }
      ); 
      }
   }

  ngOnInit() {
  }

}
