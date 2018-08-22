import { Component, OnInit } from '@angular/core';
import { KeepClass } from '../keepClass';
import { KEEPS } from '../mock-keeps';
import { KeepService } from '../keep.service';

@Component({
  selector: 'app-keep',
  templateUrl: './keep.component.html',
  styleUrls: ['./keep.component.css']
})
export class KeepComponent implements OnInit {

  constructor(private keepService: KeepService) { }

  ngOnInit() {
    this.getKeeps();
  }

  keep: KeepClass[];

  selectedKeep: KeepClass;

  onSelect(keep: KeepClass): void {
    this.selectedKeep = keep;
  }

  getKeeps(): void {
    this.keepService.getKeeps().subscribe(keep => this.keep = keep);
  }

  delete(keep: KeepClass): void {
    this.keep = this.keep.filter(h => h !== keep);
    this.keepService.deleteKeep(keep).subscribe();
  }


}
