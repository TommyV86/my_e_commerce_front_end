import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class ConnectionEventUtility {

    private connectionSubject: Subject<void> = new Subject<void>();

    public connection$: Observable<void> = this.connectionSubject.asObservable();


    public notifyConnectionEvent() : void {
        this.connectionSubject.next();
    }
}