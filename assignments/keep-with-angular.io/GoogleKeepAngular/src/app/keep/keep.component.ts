import { Component, OnInit } from '@angular/core';
import { KeepClass } from '../keepClass';
import { KEEPS } from '../mock-keeps';

@Component({
  selector: 'app-keep',
  templateUrl: './keep.component.html',
  styleUrls: ['./keep.component.css']
})
export class KeepComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  keep = KEEPS;

  selectedKeep : KeepClass;

  onSelect(keep: KeepClass): void{
    this.selectedKeep = keep;
  }

}
