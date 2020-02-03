import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ViewAddassignmentComponent } from "./view-addassignment.component";

describe("ViewAddassignmentComponent", () => {
  let component: ViewAddassignmentComponent;
  let fixture: ComponentFixture<ViewAddassignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAddassignmentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAddassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
