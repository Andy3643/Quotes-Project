import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quotes';
@Component({
  selector: 'app-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote!:Quote  ;
  
  @Output() deleteQuote = new EventEmitter<boolean>();
  @Output() addVote = new EventEmitter<boolean>();
  @Output() reduceVote = new EventEmitter<boolean>();
  
  quoteDelete(remove:boolean) {
    this.deleteQuote.emit(remove);
  }
  votePlus(plus:boolean) {
    this.addVote.emit(plus);
  }
  voteMinus(minus:boolean) {
    this.reduceVote.emit(minus);
  }
  constructor() { }

  ngOnInit() {
  }

}