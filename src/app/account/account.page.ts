import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['../userp/userp.page.scss'],
})
export class AccountPage implements OnInit {
  public alertButtons = ['OK'];

  constructor() { }

  ngOnInit() {
  }

}
