import { Component } from '@angular/core';
import { AuthenticationService } from './service/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project_e_commerce';

  public constructor(
    private authServ: AuthenticationService
  ){}

  public ngOnInit() : void {
    console.log(this.authServ.getAuthBool());
    console.log(this.authServ.getUserRole());
  }
}
