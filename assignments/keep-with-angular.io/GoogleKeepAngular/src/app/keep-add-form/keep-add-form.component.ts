import { Component, OnInit } from '@angular/core';
import {KeepClass, Checklist } from '../keepClass';
import { KeepService } from '../keep.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-keep-add-form',
  templateUrl: './keep-add-form.component.html',
  styleUrls: ['./keep-add-form.component.css']
})
export class KeepAddFormComponent implements OnInit {

  constructor(private keepService: KeepService,
              private location: Location) { }

  ngOnInit() {
  }

  public keepToAdd ={
    "keepID": null,
    "title": "",
    "plainText": "",
    "checklist": [
        {
            "checklistID": 1,
            "item": ""
        },
        {
            "checklistID": 2,
            "item": ""
        },
        {
            "checklistID": 3,
            "item": ""
        }
    ],
    "label": "",
    "isPinned": false
}

  goBack(): void {
    this.location.back();
  }

  add(keepToAdd: KeepClass): void {
    // keepToAdd.checklist = new Checklist[];
    if (!keepToAdd) { return; }
    this.keepService.addKeep( keepToAdd as KeepClass)
      .subscribe(() => this.goBack());
  }
}
