import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpnyaComponent } from './httpnya.component';

describe('HttpnyaComponent', () => {
  let component: HttpnyaComponent;
  let fixture: ComponentFixture<HttpnyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpnyaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpnyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
