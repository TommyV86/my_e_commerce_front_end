import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from 'src/app/model/person/person';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';
import { ConnectionEventUtility } from 'src/app/utility/connexion-event/connexion-event';
import { ConstantUtility } from 'src/app/utility/constant/constant.utility';
import { JwtUtility } from 'src/app/utility/jwt/jwt.utility';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  protected form!: FormGroup;
  private decodedToken!: any;

  public constructor(
    private fb: FormBuilder,
    private authServ: AuthenticationService,
    private constantUtil: ConstantUtility,
    private jwtUtil: JwtUtility,
    private person: Person,
    private connectEventUtil: ConnectionEventUtility,
    private router: Router
  ){}

  public ngOnInit() : void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  protected onSubmit(): void {

    this.authServ.login(this.form.value.email, this.form.value.password)
    .subscribe({
      next: (res: any) => {
        this.constantUtil.setToken(res.token);
        console.log(this.constantUtil.getToken());
        this.decodedToken = this.jwtUtil.decodeToken(res.token);
        console.log(this.decodedToken);
        
        this.decodedToken.roles.forEach((r: string) => {
          if(r == 'ROLE_USER'){
            this.authServ.setAuthenticatedBool(true);
            this.authServ.setUserRole(r);

            this.person.setEmail(this.decodedToken.username)
                       .setToken(this.decodedToken);
            console.log(this.person);
          }
        });

        console.log(this.authServ.getAuthBool());
        console.log(this.authServ.getUserRole());

        this.connectEventUtil.notifyConnectionEvent();
      },
      error: (e: any) => {
        // this.message = 'une erreur est survenue, veuillez recommencer'; 
        console.log(e)
      },
      complete: () => {
        console.log('login user process ended');
        this.router.navigate(["/"]);
      }
    })
  }
}
