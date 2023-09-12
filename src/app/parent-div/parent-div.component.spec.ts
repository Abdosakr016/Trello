import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentDivComponent } from './parent-div.component';

describe('ParentDivComponent', () => {
  let component: ParentDivComponent;
  let fixture: ComponentFixture<ParentDivComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentDivComponent]
    });
    fixture = TestBed.createComponent(ParentDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
