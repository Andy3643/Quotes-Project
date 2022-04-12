import { Component, OnInit } from '@angular/core';
import { Quote } from '../quotes';
@Component({
  selector: 'app-quotes',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  downVote = 0;
  upVote = 0;
  ShowMore:boolean = true;
  maxVote !:number;

  quotes = [
    new Quote(1, "Men like us, Mr Shelby, will always be alone. And what love we get, we will have to pay for..", "Chester Campbell",0, 0, "Peaky Blinders"),
    // new Quote(2, "Keep Pushing .", "Random Guy", 0, 0,"Charlo")
  ]
  toggleDetails(index:number) {
    this.ShowMore = !this.ShowMore,
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  deleteQuote(deleteQuote: any, index: number) {

    if (deleteQuote) {
      let toDelete = confirm("You are about.");
      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }
  addNewQuote(quote: Quote){
    if (quote.enterQuote == "" || quote.author == "" || quote.yourName == "") {
    alert("Empty field");
  }
  else {
    let quoteLength = this.quotes.length;
        quote.id=quoteLength+1;
        quote.submitDate = new Date();
        this.quotes.push(quote);
}
}
   plusVote(addVote: any, index: number) {
    if (addVote) {
      this.quotes[index].upVote += 1;
      let voteNumbers = this.quotes.map(quotefn =>quotefn.upVote)
      this.maxVote = Math.max(...voteNumbers)
      //this.quotes[index].downVote -= 1;
    }
  }

  minusVote(reduceVote: any, index: number) {
    if (reduceVote) {
      this.quotes[index].downVote += 1;
      //this.quotes[index].upVote -= 1;
    }
  }

  constructor() { }


  ngOnInit() {
  }
}