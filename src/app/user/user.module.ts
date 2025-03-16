import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserProfileComponent } from './componnents/user-profile/user-profile.component';
import { GetUserComponent } from './componnents/get-user/get-user.component';
import { PopUpComponent } from './componnents/pop-up/pop-up.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [UserProfileComponent,GetUserComponent,PopUpComponent],
  imports: [
    CommonModule,
    RouterModule, 
    NgbModule,
     BrowserModule,
  ]
})
export class UserModule {}
