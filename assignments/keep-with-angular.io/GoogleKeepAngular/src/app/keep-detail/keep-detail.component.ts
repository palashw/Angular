import { Component, OnInit, Input } from '@angular/core';
import { KeepClass } from '../keepClass';

@Component({
  selector: 'app-keep-detail',
  templateUrl: './keep-detail.component.html',
  styleUrls: ['./keep-detail.component.css']
})
export class KeepDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() keep: KeepClass;

}
