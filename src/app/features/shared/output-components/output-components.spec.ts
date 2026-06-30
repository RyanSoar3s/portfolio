import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Type } from '@angular/core';

import { OutputAngular } from '../output-angular/output-angular';
import { OutputBun } from '../output-bun/output-bun';
import { OutputCss } from '../output-css/output-css';
import { OutputDocker } from '../output-docker/output-docker';
import { OutputHtml } from '../output-html/output-html';
import { OutputJest } from '../output-jest/output-jest';
import { OutputMongodb } from '../output-mongodb/output-mongodb';
import { OutputNodejs } from '../output-nodejs/output-nodejs';
import { OutputPostgresql } from '../output-postgresql/output-postgresql';
import { OutputRedis } from '../output-redis/output-redis';
import { OutputSass } from '../output-sass/output-sass';
import { OutputTailwindcss } from '../output-tailwindcss/output-tailwindcss';
import { OutputVite } from '../output-vite/output-vite';
import { OutputVitest } from '../output-vitest/output-vitest';

type OutputCase = {
  component: Type<unknown>;
  expectedText: string;
};

const cases: OutputCase[] = [
  { component: OutputBun, expectedText: 'This page was sent via Bun.' },
  { component: OutputCss, expectedText: 'Alex Morgan' },
  { component: OutputDocker, expectedText: 'Docker container executed successfully' },
  { component: OutputHtml, expectedText: 'My Content Portal' },
  { component: OutputJest, expectedText: 'Intentional Error' },
  { component: OutputMongodb, expectedText: 'The Hobbit' },
  { component: OutputNodejs, expectedText: 'This page was sent via Express.' },
  { component: OutputPostgresql, expectedText: '3 rows returned.' },
  { component: OutputRedis, expectedText: '"username": "Ryan"' },
  { component: OutputSass, expectedText: 'Frontend Dev' },
  { component: OutputTailwindcss, expectedText: "echo 'hello, world'" },
  { component: OutputVitest, expectedText: 'VITEST' }
];

const renderedText = (fixture: ComponentFixture<unknown>): string => {
  const host = fixture.nativeElement as HTMLElement;

  return (host.shadowRoot ?? host).textContent ?? '';
};

describe('Output components', () => {
  cases.forEach(({ component, expectedText }) => {
    it(`should render ${component.name}`, async () => {
      await TestBed.configureTestingModule({
        imports: [ component ]
      }).compileComponents();

      const fixture = TestBed.createComponent(component);

      fixture.detectChanges();
      await fixture.whenStable();

      expect(renderedText(fixture)).toContain(expectedText);
    });
  });

  it('should bind the Angular output form field', async () => {
    await TestBed.configureTestingModule({
      imports: [ OutputAngular ]
    }).compileComponents();

    const fixture = TestBed.createComponent(OutputAngular);

    fixture.detectChanges();
    await fixture.whenStable();

    const input = fixture.nativeElement.shadowRoot.querySelector('input') as HTMLInputElement;

    input.value = 'pizza';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(renderedText(fixture)).toContain('I like pizza');
  });

  it('should increment the Vite counter on click', async () => {
    await TestBed.configureTestingModule({
      imports: [ OutputVite ]
    }).compileComponents();

    const fixture = TestBed.createComponent(OutputVite);

    fixture.detectChanges();

    const button = fixture.nativeElement.shadowRoot.querySelector('button') as HTMLButtonElement;

    button.click();
    fixture.detectChanges();

    expect(button.textContent).toContain('Count: 1');
  });
});
