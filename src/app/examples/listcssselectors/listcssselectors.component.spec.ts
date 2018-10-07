import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcssselectorsComponent } from './listcssselectors.component';

describe('ListcssselectorsComponent', () => {
  let component: ListcssselectorsComponent;
  let fixture: ComponentFixture<ListcssselectorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcssselectorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcssselectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
