import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Person } from 'src/app/model/person/person';

@Injectable({
  providedIn: 'root'
})
export class CreateInstanceUtility {

  public constructor() { }

  public newUser(form: FormGroup) : Person {

    const {nom, prenom, email, password} = form.value;
    return new Person(nom, prenom, email, password);
  }
}
