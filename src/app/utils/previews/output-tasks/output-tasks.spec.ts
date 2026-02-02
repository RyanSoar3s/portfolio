import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputTasks } from './output-tasks';

describe('Outputtasks', () => {
  let component: OutputTasks;
  let fixture: ComponentFixture<OutputTasks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutputTasks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputTasks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
