import { Component } from '@angular/core';
import { Cart } from 'src/app/model/cart/cart';
import { BadgeEventUtility } from 'src/app/utility/badge-event/badge-event';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public badge: number = 0;

  public constructor(
    private badgeEvent: BadgeEventUtility,
    private cartUser: Cart
  ){}

  public ngOnInit() : void {

    this.badgeEvent.badgeNumber$.subscribe(()=>{
      this.badge += 1;
    });

    this.badgeEvent.decreaseBadge$.subscribe(()=>{
      if(this.badge > 0) this.badge -= 1;
    })

    this.badgeEvent.clearBadge$.subscribe(()=>{
      this.badge -= this.cartUser.getQtyToDelete();
      if(this.badge <= 0) this.badge = 0;
    })

    this.badgeEvent.submitBadge$.subscribe(()=>{
      this.badge = 0;
    })
  }
}
