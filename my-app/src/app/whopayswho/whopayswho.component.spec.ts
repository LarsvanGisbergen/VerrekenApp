import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhopayswhoComponent } from './whopayswho.component';

describe('WhopayswhoComponent', () => {
  let component: WhopayswhoComponent;
  let fixture: ComponentFixture<WhopayswhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhopayswhoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhopayswhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
