import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplecardComponent } from './examplecard.component';

describe('ExamplecardComponent', () => {
  let component: ExamplecardComponent;
  let fixture: ComponentFixture<ExamplecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamplecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
