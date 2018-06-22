import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmployersComponent } from './list-employers.component';

describe('ListEmployersComponent', () => {
  let component: ListEmployersComponent;
  let fixture: ComponentFixture<ListEmployersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEmployersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmployersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
