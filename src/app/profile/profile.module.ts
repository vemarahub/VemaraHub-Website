import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { ProfileComponent } from './profile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IntroComponent } from './intro/intro.component';



import { NgxSpinnerModule } from '../../../node_modules/ngx-spinner';

import { MongoComponent } from './mongo/mongo.component';
import { LinuxComponent } from './linux/linux.component';
import { AngularComponent } from './angular/angular.component';
import { JavaComponent } from './java/java.component';
import { NetworkingComponent } from './networking/networking.component';
import { AndroidComponent } from './android/android.component';
import { AwsComponent } from './aws/aws.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SnotifyModule,
    NgxSpinnerModule
  ],
  declarations: [
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
  

 
  
    MongoComponent,
    LinuxComponent,
    AngularComponent,
    JavaComponent,
    NetworkingComponent,
    AndroidComponent,
    AwsComponent
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService,
  ]
})
export class ProfileModule { }
