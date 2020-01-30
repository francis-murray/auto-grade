import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProgramComponent } from './view-program.component';
import { FormControl } from '@angular/forms';

export class SelectProgram{
  panelProgram = new FormControl('')

  triggerQuerryProgram(){
    
  }
}
describe('ViewProgramComponent', () => {
  let component: ViewProgramComponent;
  let fixture: ComponentFixture<ViewProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});