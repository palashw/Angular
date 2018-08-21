import { Component, OnInit } from '@angular/core';
import { KeepClass } from '../keepClass';
import { KeepService } from '../keep.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  keeps: KeepClass[] = [];

  constructor(private keepService: KeepService) { }

  ngOnInit() {
    this.getKeeps();
  }

  getKeeps(): void {
    this.keepService.getKeeps()
      .subscribe(keep => this.keeps = keep.slice(1, 5));
  }
}
