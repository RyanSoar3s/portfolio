import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputReactiveInput } from './output-reactive-input';

describe('OutputReactiveInput', () => {
  let component: OutputReactiveInput;
  let fixture: ComponentFixture<OutputReactiveInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutputReactiveInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputReactiveInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
