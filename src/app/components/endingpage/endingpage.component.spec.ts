import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndingpageComponent } from './endingpage.component';

describe('EndingpageComponent', () => {
  let component: EndingpageComponent;
  let fixture: ComponentFixture<EndingpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndingpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
