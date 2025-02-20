import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  standalone: false,
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower = 'fernando';
  public nameUpper = 'FERNANDO';
  public nameComplete = 'FeRnAnDo HeRrErA';

  public customDate: Date = new Date(); // current date
}
