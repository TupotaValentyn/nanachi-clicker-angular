import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelPointComponent } from './panel-point.component';

describe('PanelPointComponent', () => {
  let component: PanelPointComponent;
  let fixture: ComponentFixture<PanelPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
