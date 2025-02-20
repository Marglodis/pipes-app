
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

//Configuracion del locale de la app
import  localeEsHN  from '@angular/common/locales/es-HN';
import  localeEsCL  from '@angular/common/locales/es-CL';
import  localeFrCA  from '@angular/common/locales/fr-CA';

import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEsHN); //Honduras
registerLocaleData(localeEsCL); //Chile
registerLocaleData(localeFrCA); //Canada


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-HN'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
