import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustloginComponent } from './justlogin.component';

describe('JustloginComponent', () => {
  let component: JustloginComponent;
  let fixture: ComponentFixture<JustloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JustloginComponent]
    });
    fixture = TestBed.createComponent(JustloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
