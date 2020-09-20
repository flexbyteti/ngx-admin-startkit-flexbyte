import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lubrificante',
  templateUrl: './lubrificante.component.html',
  styleUrls: ['./lubrificante.component.scss']
})
export class LubrificanteComponent implements OnInit {

  loading = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleLoadingAnimation(): void {
    this.loading = true;
    setTimeout(() => this.loading = false, 3000);
  }

}
