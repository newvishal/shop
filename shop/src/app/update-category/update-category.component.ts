import { Component , OnInit } from '@angular/core';
import { FormBuilder , FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CategoryService } from '../service/category.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from "@angular/router";
import {ActivatedRoute} from "@angular/router";
// import { ActivatedRoute } from '@angular/router/src/router_state';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
  categoryForm: FormGroup;
  categoryID: any; //Getting Product id from URL
  constructor(private fb: FormBuilder,
    private service: CategoryService,
    public toastr: ToastrManager,
    private router: Router,
    private actRoute: ActivatedRoute
  ) { 
    
    this.categoryForm = this.fb.group({
      category_name: ['', [Validators.required, Validators.minLength(4)]],
      status: ['',Validators.required],
      hid: ['',Validators.required],
    });
  }
   // convenience getter for easy access to form fields
   get f() { return this.categoryForm.controls; }

  ngOnInit() {
     this.categoryID = this.actRoute.snapshot.params['id'];
     this.service.getCategorysById(this.categoryID).subscribe(data => {
          // console.log(data[0].category_name);
          this.categoryForm.patchValue({
            category_name: data[0].category_name,
              status: data[0].status,
              hid: data[0].id
          });
     })
  }

  onUpdate(values){
    if (this.categoryForm.invalid) {
      return;
    }else{
      const categoryData = new FormData();
      categoryData.append('category_name', values.category_name);
        categoryData.append('status', values.status);
        categoryData.append('hid', values.hid);
        // console.log(categoryData);
        this.service.updateProduct(categoryData).subscribe(result => {
            this.toastr.successToastr('Category Updated successfull', 'Success!');
            this.router.navigate(['category']);
        },
        err => { this.toastr.errorToastr('Somthing Went Wrong', 'Error!'); }
      );
    }
  }

}
