import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullSizeImgComponent } from './full-size-img.component';

describe('FullSizeImgComponent', () => {
  let component: FullSizeImgComponent;
  let fixture: ComponentFixture<FullSizeImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullSizeImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullSizeImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
