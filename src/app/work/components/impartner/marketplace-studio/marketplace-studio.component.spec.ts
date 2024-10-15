import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketplaceStudioComponent } from './marketplace-studio.component';

describe('MarketplaceStudioComponent', () => {
  let component: MarketplaceStudioComponent;
  let fixture: ComponentFixture<MarketplaceStudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketplaceStudioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarketplaceStudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
