import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-forms',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {
  
  newQuote = new Quote(0, "", "",0, 0, "");

  @Output() addQuote=new EventEmitter<Quote>();

  saveQuote(){
        this.addQuote.emit(this.newQuote);
        this.newQuote = new Quote(0, "", "",0, 0, "");
  }  

  constructor() { }

  ngOnInit() {
  }
    
}