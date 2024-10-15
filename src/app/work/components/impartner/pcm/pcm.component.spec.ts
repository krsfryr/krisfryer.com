import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcmComponent } from './pcm.component';

describe('PcmComponent', () => {
  let component: PcmComponent;
  let fixture: ComponentFixture<PcmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PcmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PcmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
