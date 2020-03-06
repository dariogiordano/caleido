import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriangleImageComponent } from './triangle-image.component';

describe('TriangleImageComponent', () => {
  let component: TriangleImageComponent;
  let fixture: ComponentFixture<TriangleImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriangleImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriangleImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
