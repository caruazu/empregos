import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VagasListComponent } from './vagas-list.component';

describe('VagasListComponent', () => {
  let component: VagasListComponent;
  let fixture: ComponentFixture<VagasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VagasListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VagasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
