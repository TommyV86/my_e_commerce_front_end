import { Injectable } from "@angular/core";
import { AbstractControl, FormGroup, ValidationErrors } from "@angular/forms";

@Injectable({
    providedIn: 'root'
})
export class ValidationUtility {

    public resetForm(form: FormGroup) : void {
        form.reset();
        form.markAsPristine();
        form.markAsUntouched();
    }
}