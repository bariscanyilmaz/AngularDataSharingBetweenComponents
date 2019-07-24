import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() message:string='';
  @Output() increment=new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  increaseNumber(){
    this.increment.emit(1);
  }

}
