import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenFormComponent } from './kitchen-form.component';

describe('KitchenFormComponent', () => {
  let component: KitchenFormComponent;
  let fixture: ComponentFixture<KitchenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitchenFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitchenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
