import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDoComponent } from './home-do.component';

describe('HomeDoComponent', () => {
  let component: HomeDoComponent;
  let fixture: ComponentFixture<HomeDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
