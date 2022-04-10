import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { InputformComponent } from './inputform/inputform.component';
import { FormOutputComponent } from './form-output/form-output.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    InputformComponent,
    FormOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
