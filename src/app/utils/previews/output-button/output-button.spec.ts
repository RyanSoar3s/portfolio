import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputButton } from './output-button';

describe('OutputButton', () => {
  let component: OutputButton;
  let fixture: ComponentFixture<OutputButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ OutputButton ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputButton);
    fixture.componentRef.setInput("html", "<p>Olá, mundo!</p>");
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
