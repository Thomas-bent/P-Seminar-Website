import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  errorText: string;

  constructor() { 
    this.errorText = 'Diese Seite konnten wir leider nicht finden :('
  }

  ngOnInit(): void {
  }

}
