import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder ,FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CategoryService } from '../service/category.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from "@angular/router";
@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
  categoryForm: FormGroup;
  public categorys: any = [];
  @ViewChild('categoryTable') Table;
  public dataTable: any;
  constructor(private fb: FormBuilder,
    private service: CategoryService,
    public toastr: ToastrManager,
    private router: Router
  ) { 

    this.categoryForm = this.fb.group({
      category_name: ['', [Validators.required, Validators.minLength(4)]],
      status: ['',Validators.required]
    });
  }
  
  // convenience getter for easy access to form fields
  get f() { return this.categoryForm.controls; }
  ngOnInit() {
    this.loadProducts();
  }

  loadProducts(){
    this.service.getCategorys().subscribe(
        categoryData => {
          this.categorys = categoryData;
          this.dataTable = $(this.Table.nativeElement);
          setTimeout(()=>{this.dataTable.DataTable();}, 2000);
        }
    );
  }
  onSubmit(values) {
    if (this.categoryForm.invalid) {
        return;
    }else{
        const categoryData = new FormData();
        categoryData.append('category_name', values.category_name.toUpperCase());
        categoryData.append('status', values.status);
        this.service.createCategory(categoryData).subscribe(result => {
          this.toastr.successToastr(result['message']);
          this.loadProducts();
          this.categoryForm.reset();
        },
        err => { this.toastr.errorToastr('Somthing Went Wrong', 'Error!'); }
      ); 
        
    }
  }

  getNavigation(link, id){
      if(id === ''){
            this.router.navigate([link]);
      }else{
            this.router.navigate([link + '/' + id]);
      }
  }
   
 // delete product category

  deleteCategory(id){
      this.service.deleteCategory(id).subscribe(result => {
          this.toastr.successToastr('Category deleted successfull', 'Success!');
          this.loadProducts();
      },
      err => { this.toastr.errorToastr('Somthing Went Wrong', 'Error!'); }
    );

  }

  // change category status

  changeStatus(id){
    this.service.updateStatusById(id).subscribe(result => {
      this.toastr.successToastr('Status Update successfull', 'Success!');
      this.loadProducts();
  },
  err => { console.log(err);this.toastr.errorToastr('Somthing Went Wrong', 'Error!'); }
);

  }



 
  

}
