import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGraphComponent } from './product-graph.component';

describe('ProductGraphComponent', () => {
  let component: ProductGraphComponent;
  let fixture: ComponentFixture<ProductGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
