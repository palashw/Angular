import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2 *ngIf = "displayname; else elseBlock">
      Palash's-World
    </h2>

    <ng-template #elseBlock>
      <h2>
        Name hidden
      </h2>
    </ng-template>

    <div [ngSwitch] = "color">
      <div *ngSwitchCase = "'red'"> You picked red</div>
      <div *ngSwitchCase = "'blue'"> You picked blue</div>
      <div *ngSwitchCase = "'green'"> You picked green</div>
      <div *ngSwitchDefault> Wrong</div>
    </div>

    <div *ngFor="let col of colors; odd as i">
      <h2>{{i}} {{col}}</h2>
    </div>

    <h2>{{"Hello " + parentData}}</h2>
    <button (click)= "fireEvent()">send to parent</button>
  `,
  styles: []
})
export class TestComponent implements OnInit {
  @Input() public parentData;
  @Output() public childEvent = new EventEmitter();

  public fireEvent(){
    this.childEvent.emit('hey parent');
  }

  displayname = false;
  public color = "red";
  public colors = ["red", "blue", "green", "yellow"];
  constructor() { }

  ngOnInit() {
  }

}
