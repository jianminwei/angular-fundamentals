import {  OnInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'angular-fundamentals';
  isSpecial = true;
  isUnchanged = true;
  canSave = true;
  name="";
  isActive = true;

  people = [
    {"name":"foo", "age":20, isWorking:false},
    {"name":"bar", "age":25, isWorking:true},
    {"name":"joe", "age":20, isWorking:true}
  ]

  constructor() {}

  ngOnInit(): void {
    this.setCurrentStyles();
  }
  
  currentStyles: Record<string, string> = {};

  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    // Angular ngStyle is better because it uses normal CSS syntax, not the camel case syntax.
    this.currentStyles = {
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold' : 'normal',
      'font-size': this.isSpecial ? '24px' : '12px'
    };
  }

  changeStyle() {
    this.canSave = !this.canSave;
    this.isSpecial = ! this.isSpecial;
    this.isUnchanged = !this.isUnchanged;
    this.setCurrentStyles();
  }

  toggleActive() {
    this.isActive = ! this.isActive;
  }

}
