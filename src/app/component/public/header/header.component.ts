import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/model/cart/cart';
import { Person } from 'src/app/model/person/person';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';
import { BadgeEventUtility } from 'src/app/utility/badge-event/badge-event';
import { ConnectionEventUtility } from 'src/app/utility/connexion-event/connexion-event';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  protected badge: number = 0;
  protected isConnected : boolean = false;
  protected email!: string | null | undefined;
  public isAdded : boolean = false;
  public isDropdownVisible: boolean = false;

  public constructor(
    private badgeEvent: BadgeEventUtility,
    private connectEvent: ConnectionEventUtility,
    private user: Person,
    private cartUser: Cart,
    private authServ: AuthenticationService
  ){}

  public ngOnInit() : void {

    this.badgeEvent.badgeNumber$.subscribe(()=>{
      this.badge += 1;
      this.isAdded = true;
    });

    this.badgeEvent.decreaseBadge$.subscribe(()=>{
      if(this.badge > 0) this.badge -= 1;
      if(this.badge <= 0) this.isAdded = false;
    })

    this.badgeEvent.clearBadge$.subscribe(()=>{
      this.badge -= this.cartUser.getQtyToDelete();
      if(this.badge <= 0) {
        this.badge = 0;
        this.isAdded = false;
      }
    })

    this.badgeEvent.submitBadge$.subscribe(()=>{
      this.badge = 0;
      this.isAdded = false;
    })
    
    this.connectEvent.connection$.subscribe(()=>{
      console.log(this.user);
      this.email = this.user.getEmail();
    })
  }

  protected logout() : void {
    this.authServ.logout();
    window.location.reload();
  }

  protected toggleDropdown(): void {
    this.isDropdownVisible = !this.isDropdownVisible;
  }
}
