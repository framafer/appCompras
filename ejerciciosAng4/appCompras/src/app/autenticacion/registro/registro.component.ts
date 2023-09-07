import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from
  '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  registroForm!: FormGroup;
  userdata: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registroForm = this.formBuilder.group({
      'email': ['', [
        Validators.required,
        Validators.email
      ]
      ],
      'password': ['', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6)
      ]
      ]
    });
    this.registroForm.valueChanges.subscribe(data =>
      console.log(data));
  }
  onSubmit() {
    this.userdata = this.saveUserdata();
  }

  saveUserdata() {
    const saveUserdata = {
      email: this.registroForm.get('email')?.value,
      password: this.registroForm.get('password')?.value,
    };
    return saveUserdata;
  }


  
}

