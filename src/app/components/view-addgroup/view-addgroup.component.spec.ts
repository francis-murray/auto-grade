import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAddgroupComponent } from './view-addgroup.component';

describe('ViewAddgroupComponent', () => {
  let component: ViewAddgroupComponent;
  let fixture: ComponentFixture<ViewAddgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAddgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAddgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
