import { Component, Input, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-form-output',
  templateUrl: './form-output.component.html',
  styleUrls: ['./form-output.component.css']
})
export class FormOutputComponent implements OnInit{

    @Input()
  quotes!: Quotes;

          quotes = [
            new Quotes (1,"I have a dream","Martin Luther","Andy"),
          ]

          addNewQuote (quotes){
            let quoteLength = this.quotes.length;
          }

   constructor() { }

   ngOnInit(): void {
   }

}
