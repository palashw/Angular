import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeepAddFormComponent } from './keep-add-form.component';

describe('KeepAddFormComponent', () => {
  let component: KeepAddFormComponent;
  let fixture: ComponentFixture<KeepAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeepAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeepAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
