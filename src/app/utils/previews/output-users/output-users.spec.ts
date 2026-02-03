import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputUsers } from './output-users';

describe('OutputUsers', () => {
  let component: OutputUsers;
  let fixture: ComponentFixture<OutputUsers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutputUsers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputUsers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
