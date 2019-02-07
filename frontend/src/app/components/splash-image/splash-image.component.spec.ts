import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashImageComponent } from './splash-image.component';

describe('SplashImageComponent', () => {
  let component: SplashImageComponent;
  let fixture: ComponentFixture<SplashImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplashImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
