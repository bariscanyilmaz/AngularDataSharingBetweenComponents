import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  count:number=0;

  constructor() { }

  ngOnInit() {
  }

  onIncrement(incr:number){
    this.count+=incr;
    
  }


}
