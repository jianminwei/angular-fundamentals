import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-mycomp',
  templateUrl: './mycomp.component.html',
  styleUrls: ['./mycomp.component.css']
})
export class MycompComponent implements OnInit {
  @Input() name:string = "";
  @Input() age!:number;
  @Input() isWorking!:boolean;
  @Output() agePlusOne = new EventEmitter<number> ();

  constructor() { }

  ngOnInit(): void {
  }

}
