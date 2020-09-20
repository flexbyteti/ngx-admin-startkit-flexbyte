import { Component, OnInit } from '@angular/core';
import { NbAuthService, NbResetPasswordComponent } from '@nebular/auth';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent extends NbResetPasswordComponent implements OnInit {

  // constructor(private authService: NbAuthService) {
  //   super(this.authService, {}, {}, {});
  // }

  ngOnInit(): void {
  }

}
