import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EditAccountPage } from '../edit-account/edit-account';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  goToEdit() {
    this.navCtrl.push(EditAccountPage);
  }

}
