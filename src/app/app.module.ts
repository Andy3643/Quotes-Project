import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormInputComponent } from './form-input/form-input.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { QuoteComponent } from './quote/quote.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HighlightsDirective } from './highlights.directive';


@NgModule({
  declarations: [
    AppComponent,
    FormInputComponent,
    QuoteDetailsComponent,
    QuoteComponent,
    NavigationBarComponent,
    HighlightsDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
