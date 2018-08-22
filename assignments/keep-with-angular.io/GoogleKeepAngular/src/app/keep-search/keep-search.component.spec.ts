import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeepSearchComponent } from './keep-search.component';

describe('KeepSearchComponent', () => {
  let component: KeepSearchComponent;
  let fixture: ComponentFixture<KeepSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeepSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeepSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
