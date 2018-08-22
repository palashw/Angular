import { Component, OnInit, Input } from '@angular/core';
import { KeepClass } from '../keepClass';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { KeepService }  from '../keep.service';

@Component({
  selector: 'app-keep-detail',
  templateUrl: './keep-detail.component.html',
  styleUrls: ['./keep-detail.component.css']
})
export class KeepDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private keepService: KeepService,
    private location: Location) { }

  ngOnInit(): void {
    this.getKeep();
  }

  getKeep(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.keepService.getKeep(id).subscribe(keep => this.keep = keep);
  }

  @Input() keep: KeepClass;
  // this is the link betn keepcomponent and keepdetail.
  // the selectedkeep from keepcomponent is assigned here to keep

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.keepService.updateKeep(this.keep).subscribe(() => this.goBack());
  }

}
