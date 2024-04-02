import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class BadgeEventUtility {

    private badgeNumberSubject: Subject<void> = new Subject<void>();
    private decreaseBadgeNumberSubject: Subject<void> = new Subject<void>();
    private clearBadgeNumberSubject: Subject<void> = new Subject<void>();
    private submitBadgeSubject: Subject<void> =  new Subject<void>();
    
    public badgeNumber$: Observable<void> = this.badgeNumberSubject.asObservable();
    public decreaseBadge$: Observable<void> = this.decreaseBadgeNumberSubject.asObservable();
    public clearBadge$: Observable<void> = this.clearBadgeNumberSubject.asObservable();
    public submitBadge$: Observable<void> = this.submitBadgeSubject.asObservable();

    public notifyBadgeEvent() : void {
        this.badgeNumberSubject.next();
    }

    public notifyDeleteEvent() : void {
        this.decreaseBadgeNumberSubject.next();
    }

    public notifyClearEvent() : void {
        this.clearBadgeNumberSubject.next();
    }

    public notifySubmitEvent() : void {
        this.submitBadgeSubject.next();
    }
}
