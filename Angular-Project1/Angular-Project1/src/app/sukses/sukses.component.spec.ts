import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuksesComponent } from './sukses.component';

describe('SuksesComponent', () => {
  let component: SuksesComponent;
  let fixture: ComponentFixture<SuksesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuksesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuksesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
