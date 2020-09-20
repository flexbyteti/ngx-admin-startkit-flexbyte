import { Component, OnInit } from '@angular/core';
import { NbRegisterComponent } from '@nebular/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent extends NbRegisterComponent implements OnInit {

  // constructor() {
  //   super();
  // }

  ngOnInit(): void {
  }

}
