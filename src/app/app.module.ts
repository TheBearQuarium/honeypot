import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Login } from '../pages/login/login';
import { MyPets } from '../pages/mypets/mypets';
import { AccountPage } from '../pages/account/account';
import { LogoutPage } from '../pages/logout/logout';
import { SignupPage} from '../pages/signup/signup';
import { BankAuthPage } from '../pages/bank-auth/bank-auth';
import { ShelterPage } from '../pages/shelter/shelter';
import { PetPage } from '../pages/pet/pet';
import { StorePage } from '../pages/store/store';
import { EditAccountPage } from '../pages/edit-account/edit-account';
import { AdoptPetPage } from '../pages/adopt-pet/adopt-pet';
import { StorePage as ModalBasicPage, ModalContentPage } from '/Users/gonewayword/Hack_Reactor/Applications/honeypot/src/pages/store/store';

@NgModule({
  declarations: [
    MyApp,
    Login,
    MyPets,
    AccountPage,
    LogoutPage,
    SignupPage,
    BankAuthPage,
    ShelterPage,
    PetPage,
    StorePage,
    EditAccountPage,
    AdoptPetPage,
    ModalBasicPage,
    ModalContentPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Login,
    MyPets,
    AccountPage,
    LogoutPage,
    SignupPage,
    BankAuthPage,
    ShelterPage,
    PetPage,
    StorePage,
    EditAccountPage,
    AdoptPetPage,
    ModalBasicPage,
    ModalContentPage,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
