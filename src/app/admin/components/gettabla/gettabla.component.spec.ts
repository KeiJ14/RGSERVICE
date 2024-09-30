import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GettablaComponent } from './gettabla.component';

describe('GettablaComponent', () => {
  let component: GettablaComponent;
  let fixture: ComponentFixture<GettablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GettablaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GettablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
