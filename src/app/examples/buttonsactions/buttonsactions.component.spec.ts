import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsactionsComponent } from './buttonsactions.component';

describe('ButtonsactionsComponent', () => {
  let component: ButtonsactionsComponent;
  let fixture: ComponentFixture<ButtonsactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
