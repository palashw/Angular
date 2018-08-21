import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeepDetailComponent } from './keep-detail.component';

describe('KeepDetailComponent', () => {
  let component: KeepDetailComponent;
  let fixture: ComponentFixture<KeepDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeepDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeepDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
