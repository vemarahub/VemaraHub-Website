import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService, AlertService } from '@app/_services';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  
  templateUrl: './resetpassword.component.html'
})
export class ResetPasswordComponent implements OnInit {
    form: FormGroup;
    loading = false;
    submitted = false;

  constructor  (private route: ActivatedRoute,
  private router: Router,
  private accountService: AccountService,
  private alertService: AlertService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.alertService.info('Working on sending email');
    this.submitted = true;

 
    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }
    const resetPasswordObserver = {
        next: x => {
      //    this.progressBar.setSuccess();
          this.alertService.success('Check email to change password');
          console.log('Check email to change password');
         // this.progressBar.completeLoading();
        },
        error: err => {
         // this.progressBar.setError();
          console.log(err);
          this.alertService.warn('Unable to send email');
       //   this.progressBar.completeLoading();
        }
      };
    this.loading = true;
    this.accountService.resetpass(f.value).subscribe(resetPasswordObserver);
       
  }

}
