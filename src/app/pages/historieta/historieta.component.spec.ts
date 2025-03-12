import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorietaComponent } from './historieta.component';

describe('HistorietaComponent', () => {
  let component: HistorietaComponent;
  let fixture: ComponentFixture<HistorietaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistorietaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorietaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
