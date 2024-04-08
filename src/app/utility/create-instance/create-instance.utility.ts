import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Person } from 'src/app/model/person/person';

@Injectable({
  providedIn: 'root'
})
export class CreateInstanceUtility {

  private person!: Person;

  public newUser(form: FormGroup) : Person {

    const {nom, prenom, email, password} = form.value;

    this.person = new Person();
    this.person.setFirstname(nom)
               .setLastname(prenom)
               .setEmail(email)
               .setPassword(password);

    return this.person;
  }
}
