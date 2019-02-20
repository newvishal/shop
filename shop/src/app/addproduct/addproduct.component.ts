import { Component, OnInit ,ViewChild } from '@angular/core';
import { FormBuilder , FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CategoryService } from '../service/category.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from "@angular/router";
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  addProductForm: FormGroup;
  allCategoryName : any;
  public products: any = [];
  @ViewChild('productTable') Table;
  public dataTable: any;
  constructor(private fb: FormBuilder,
    private service: CategoryService,
    public toastr: ToastrManager,
    private router: Router) {
    this.addProductForm = this.fb.group({
      category_id: ['',[Validators.required]],
      product_name: ['',[Validators.required, Validators.minLength(4)]],
      price: ['',[Validators.required]],
      quantity: ['',[Validators.required]],
      product_img: ['',[Validators.required]]
    });
  }
   // convenience getter for easy access to form fields
   get f() { return this.addProductForm.controls; }
 
  ngOnInit() {
     this.loadCategory();
     this.loadAllProducts();
  }

  loadAllProducts(){
      this.service.getproductData().subscribe(
        productData => {
          this.products = productData;
          // console.log(this.products);
          this.dataTable = $(this.Table.nativeElement);
          setTimeout(()=>{this.dataTable.DataTable();}, 2000);
        }
      );
  }

  loadCategory(){
      this.service.getCategorys().subscribe(data => {
          this.allCategoryName = data;
      });
  }

  imageURL : string = "";
  images : any = [];
  allfiles: any = [];
  fileToUpload :File = null;
  onFileChange(event){
      const files = event.target.files;
      // console.log(files);
      if(files){
        for(let i = 0; i < files.length; i++){
            const image = {
              name : '',
              type : '',
              size : '',
              url : ''
            };
            this.allfiles.push(files[i]);
            image.name = files[i].name;
            image.type = files[i].type;
            image.size = files[i].size;
            const reader = new FileReader();
            reader.onload = (filedata) => {
              image.url = reader.result + '';
              this.images.push(image);
            };
            reader.readAsDataURL(files[i]);
        }
      }
      event.srcElement.value = null;
    // this.fileToUpload = file.item(0);
    // let reader = new FileReader();
    //   reader.onload = (event : any) => {
    //      this.imageURL = event.target.result;
    //   }
    //   reader.readAsDataURL(this.fileToUpload);
  }

  deleteImg(image :any){
      const index = this.images.indexOf(image);
      this.images.splice(index, 1);
      this.allfiles.splice(index, 1);
  }
  public totalFileName = [];  
  onSubmit(values){
    if (this.addProductForm.invalid) {
      return;
    }else{
      // console.log(this.allfiles);
      const addProductData = new FormData();
      addProductData.append('category_id', values.category_id);
      addProductData.append('product_name',values.product_name.toUpperCase());
      addProductData.append('price',values.price);
      addProductData.append('quantity',values.quantity);
      for(let j=0;j<this.allfiles.length; j++){
        addProductData.append('product_img[]',<File>this.allfiles[j]);
      } 
      // console.log(values);
      // let AllFilesObj= [];
      // values.forEach((element, index) => { 

      //   console.log("index is ",index);
      //   console.log("element is ", element);
  
      //   let eachObj=
      //   {
      //     'doc_name' : element.doc_name,
      //     'doc_description' : element.doc_description,
      //     'file_name' : this.totalFileName[index]
      //   }
      //   AllFilesObj.push(eachObj); 
      // });
  
      //console.log("the Array data is ",AllFilesObj);
      // addProductData.append("product_img",JSON.stringify(AllFilesObj))
        this.service.addProduct(addProductData).subscribe(result => {
          this.toastr.successToastr(result['message']);
          this.loadAllProducts();
          this.addProductForm.reset();
          
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

   deleteProduct(id){
    confirm('Are you sure you want to delete this item?');
      this.service.deleteProductData(id).subscribe(result => {
          this.toastr.successToastr('Product deleted successfull', 'Success!');
          this.loadAllProducts();
      },
      err => { this.toastr.errorToastr('Somthing Went Wrong', 'Error!'); }
    );
  }

}
