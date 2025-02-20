import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  standalone: false,
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18n Select
  public name: string = 'Fernando';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  //i18nPlural
  public clients: string[] = ['Fernando', 'Melissa', 'Juan', 'Carlos', 'Laura'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deleteClient(): void {
    this.clients.shift();
  }

  //keyvalue pipe
  public person = {
    name: 'Fernando',
    age: 35,
    address: 'Sevilla, España'
  }

  //Async pipe
  public myObservableTimer:Observable<number> = interval(2000).pipe(
    tap(value => console.log('Timer works', value))
  );

public promiseValue: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved');
    console.log('Promise resolved');
  }, 3500);
});

}
