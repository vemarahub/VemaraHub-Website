import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LayoutComponent } from './layout.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { DashComponent } from './dash/dash.component';
import { CoursesComponent } from './courses/courses.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AccountRoutingModule,
        NgbModule
    ],
    declarations: [
        LayoutComponent,
        LoginComponent,
        RegisterComponent,
        DashComponent,
        CoursesComponent
    ]
})
export class AccountModule { }