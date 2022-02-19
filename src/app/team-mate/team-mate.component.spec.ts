import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMateComponent } from './team-mate.component';

describe('TeamMateComponent', () => {
  let component: TeamMateComponent;
  let fixture: ComponentFixture<TeamMateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamMateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
