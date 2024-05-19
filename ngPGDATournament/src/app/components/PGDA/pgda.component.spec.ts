import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PGDAComponent } from './pgda.component';

describe('PGDAComponent', () => {
  let component: PGDAComponent;
  let fixture: ComponentFixture<PGDAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PGDAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PGDAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
