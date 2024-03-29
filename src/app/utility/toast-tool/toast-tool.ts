import { ElementRef, Injectable } from "@angular/core";
import * as bootstrap from 'bootstrap'; 

@Injectable({
    providedIn: 'root'
})
export class ToastToolUtility {

    private toastElement!: any;
    private bsToast: any;

    public showToast(toast: ElementRef) : void {
      this.toastElement = toast.nativeElement;
      this.bsToast = new bootstrap.Toast(this.toastElement);
      this.bsToast.show();
  }
}