import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellGraphComponent } from './sell-graph.component';

describe('SellGraphComponent', () => {
  let component: SellGraphComponent;
  let fixture: ComponentFixture<SellGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
