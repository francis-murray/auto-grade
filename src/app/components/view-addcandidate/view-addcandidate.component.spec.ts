import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAddcandidateComponent } from './view-addcandidate.component';

describe('ViewAddcandidateComponent', () => {
  let component: ViewAddcandidateComponent;
  let fixture: ComponentFixture<ViewAddcandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAddcandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAddcandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
