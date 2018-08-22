import { Component, OnInit } from '@angular/core';

import { Observable, Subject} from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { KeepClass } from '../keepClass'
import { KeepService  } from '../keep.service';

@Component({
  selector: 'app-keep-search',
  templateUrl: './keep-search.component.html',
  styleUrls: ['./keep-search.component.css']
})
export class KeepSearchComponent implements OnInit {

  keeps$: Observable<KeepClass[]>;
  private searchTerms = new Subject<string>();

  constructor(private keepService: KeepService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.keeps$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.keepService.searchKeeps(term)),
    );
  }

}
