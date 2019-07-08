import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavOverviewComponent } from './sidenav-overview.component';

describe('SidenavOverviewComponent', () => {
  let component: SidenavOverviewComponent;
  let fixture: ComponentFixture<SidenavOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
