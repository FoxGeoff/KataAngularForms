import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroFormReactiveComponent } from './hero-form-reactive/hero-form-reactive.component';
import { HeroFormTemplateComponent } from './hero-form-template/hero-form-template.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroFormReactiveComponent,
    HeroFormTemplateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
