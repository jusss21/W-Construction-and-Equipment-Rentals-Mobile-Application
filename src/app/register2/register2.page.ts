import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.page.html',
  styleUrls: ['../register/register.page.scss'],
})
export class Register2Page implements OnInit {
  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }
  constructor() { }

  ngOnInit() {
  }

}
