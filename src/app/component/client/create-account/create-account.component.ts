import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from 'src/app/model/person/person';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';
import { ConstantUtility } from 'src/app/utility/constant/constant.utility';
import { CreateInstanceUtility } from 'src/app/utility/create-instance/create-instance.utility';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent {

  protected form!: FormGroup;
  private user!: Person;

  public constructor(
    private fb: FormBuilder, 
    private createUtil: CreateInstanceUtility,
    private authServ: AuthenticationService,
    private router: Router,
    private constantUtil: ConstantUtility
  ){}

  public ngOnInit() : void {

    this.form = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  protected onSubmit() {

    //appeller la methode de creation d'instance user et de creation de compte
    this.user = this.createUtil.newUser(this.form);
    this.authServ.createAccount(this.user).subscribe({
      next: (res: any) => {
        //this.validUtil.resetForm(this.form);
        //this.message = 'nouveau stagiaire ajouté !';
        console.log('back end resp :', res);
      },
      error: (e) => {
        //this.message = 'une erreur est survenue, veuillez recommencer'; 
        console.log(e)
      },
      complete: () => console.log('Save user process ended')
    })
  }
}
