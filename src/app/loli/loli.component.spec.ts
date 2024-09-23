import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoliComponent } from './loli.component';

describe('LoliComponent', () => {
  let component: LoliComponent;
  let fixture: ComponentFixture<LoliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoliComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
