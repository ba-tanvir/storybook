import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  
  form!: FormGroup;
  constructor(private readonly fb: FormBuilder
    ) { }
    
    ngOnInit():void{
      this.initializaForm();
    }

    initializaForm(): void {
      this.form = this.fb.group({
        branchName: ['',Validators.required],
        branchNameBn: ['',Validators.required],
        branchLocation:['',Validators.required],
      })
    }

    save(){
      console.log("save it man");
    }

     //Getters for form fields
  // get branchName() {
  //   return this.form.get('branchName');
  // }

  // get branchNameBn() {
  //   return this.form.get('branchNameBn');
  // }

}
