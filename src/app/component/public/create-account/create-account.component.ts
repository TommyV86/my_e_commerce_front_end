import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from 'src/app/model/person/person';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';
import { CreateInstanceUtility } from 'src/app/utility/create-instance/create-instance.utility';
import { ToastToolUtility } from 'src/app/utility/toast-tool/toast-tool';
import { ValidationUtility } from 'src/app/utility/validation/validation.utility';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent {

  protected form!: FormGroup;
  private user!: Person;
  @ViewChild('toast') toast!: ElementRef;
  protected message!: string;


  public constructor(
    private fb: FormBuilder, 
    private createUtil: CreateInstanceUtility,
    private authServ: AuthenticationService,
    private router: Router,
    private toastTool: ToastToolUtility,
    private validUtil: ValidationUtility
  ){}

  public ngOnInit() : void {

    this.form = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  protected onSubmit() : void {

    //appeller la methode de creation d'instance user et de creation de compte
    this.user = this.createUtil.newUser(this.form);
    this.authServ.createAccount(this.user).subscribe({
      next: (res: any) => {
        //redirection au login
        console.log('back end resp :', res);
        this.validUtil.resetForm(this.form);
        this.message = 'inscription réussie ! Redirection au login en cours ...'; 

        setTimeout(() => {
          this.router.navigate(['login']);
        }, 3000);
      },
      error: (e: any) => {
        this.message = 'une erreur est survenue, veuillez recommencer'; 
        console.log(e)
      },
      complete: () => console.log('Save user process ended')
    })

    this.toastTool.showToast(this.toast);
  }
}
