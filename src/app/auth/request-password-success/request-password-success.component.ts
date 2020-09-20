import { NbRequestPasswordComponent } from '@nebular/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-password-success',
  templateUrl: './request-password-success.component.html',
  styleUrls: ['./request-password-success.component.scss']
})
export class RequestPasswordSuccessComponent extends NbRequestPasswordComponent implements OnInit {

  // constructor() { }

  ngOnInit(): void {
  }

}
