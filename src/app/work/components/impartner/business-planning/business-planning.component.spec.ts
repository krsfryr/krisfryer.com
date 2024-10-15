import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPlanningComponent } from './business-planning.component';

describe('BusinessPlanningComponent', () => {
  let component: BusinessPlanningComponent;
  let fixture: ComponentFixture<BusinessPlanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessPlanningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusinessPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
