import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserpPage } from './userp.page';

describe('UserpPage', () => {
  let component: UserpPage;
  let fixture: ComponentFixture<UserpPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UserpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
