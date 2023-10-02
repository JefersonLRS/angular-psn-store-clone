import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  gameImg:string = ''
  @Input()
  consoleType:string = ''
  @Input()
  gamePrice:string = ''
  @Input()
  gameLabel:string = ''
  @Input()
  gameLink:string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
