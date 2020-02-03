import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAddCandidateTogroupComponent } from './view-add-candidate-togroup.component';

describe('ViewAddCandidateTogroupComponent', () => {
  let component: ViewAddCandidateTogroupComponent;
  let fixture: ComponentFixture<ViewAddCandidateTogroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAddCandidateTogroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAddCandidateTogroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
