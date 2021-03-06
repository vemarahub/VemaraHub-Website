import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LayoutComponent } from './layout.component';
import { LoginComponent } from './login.component';
import { ResetPasswordComponent } from './resetpassword.component';
import { RegisterComponent } from './register.component';
import { DashComponent } from './dash/dash.component';
import { CoursesComponent } from './courses/courses.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatVideoModule } from 'mat-video';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AccountRoutingModule,
        NgbModule,
        MatVideoModule,
        FormsModule
    ],
    declarations: [
        LayoutComponent,
        LoginComponent,
        RegisterComponent,
        DashComponent,
        CoursesComponent,
        HeaderComponent,
        FooterComponent,
        ResetPasswordComponent
    ]
})
export class AccountModule { }