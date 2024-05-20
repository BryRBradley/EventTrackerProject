import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PgdaService } from '../../services/pgda.service';
import { PGDAComponent } from './pgda.component';


describe('PGDAComponent', () => {
  let component: PGDAComponent;
  let fixture: ComponentFixture<PGDAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PGDAComponent],
      imports: [
        FormsModule,
        HttpClientTestingModule
      ],
      providers: [PgdaService]
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
