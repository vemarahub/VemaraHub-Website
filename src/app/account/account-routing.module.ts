import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { DashComponent } from './dash/dash.component';
import { CoursesComponent } from './courses/courses.component';
import { ResetPasswordComponent } from './resetpassword.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'reset-password', component: ResetPasswordComponent }
        ],
        
    },
    { path: 'dash', component: DashComponent },
    { path: 'courses', component: CoursesComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }