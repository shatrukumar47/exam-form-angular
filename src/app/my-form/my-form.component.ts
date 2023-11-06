import { Component } from '@angular/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css'],
})
export class MyFormComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  age: string = '';
  country: string = 'india';
  TandC: boolean = false;
  viewResult:any = "";

  handleSubmit(event: any) {
    event.preventDefault();
    let user = {
      name: this.name,
      email: this.email,
      password: this.password,
      age: this.age,
      country: this.country,
      TandC: this.TandC,
    };
    if (
      this.name &&
      this.email &&
      this.password &&
      this.age &&
      this.country &&
      this.TandC
    ) {
      if (this.password.length < 5) {
        alert('Password should contain minimum 5 characters !!');
      } else if (this.email.includes('@') && this.email.includes('.com')) {
        alert('Successfully registered ✔');
        this.viewResult = user
      } else {
        alert('Invalid email address!!');
      }
    } else {
      alert('All fields are required !!');
    }
  }
}
