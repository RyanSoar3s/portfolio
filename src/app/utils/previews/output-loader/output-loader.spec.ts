import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputLoader } from './output-loader';

describe('OutputLoader', () => {
  let component: OutputLoader;
  let fixture: ComponentFixture<OutputLoader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ OutputLoader ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputLoader);
    fixture.componentRef.setInput("html", "<p>Olá, mundo!</p>");
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
