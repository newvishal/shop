import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  createForm = this.fb.group({
    email: ['', Validators.required],
    password: ['',[Validators.required, Validators.minLength(6)]],
    address: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zipcode: ['', Validators.required]
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.createForm.value);
  }
  ngOnInit() {
  }

}
