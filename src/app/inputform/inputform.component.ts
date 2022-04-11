import { Quote } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-inputform',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.css']
})
export class InputformComponent implements OnInit {

    
    newQuote = [1,"","",""]
    addQuote: any[]=[];
    

    onclick(){
      
    }
     submitQuote(){

    //console.log("Button is working!")
      this.addQuote.push(this.newQuote);
      this.newQuote = new Quotes (1,"","","")
     }



  constructor() { }

  ngOnInit(): void {
  }

}
