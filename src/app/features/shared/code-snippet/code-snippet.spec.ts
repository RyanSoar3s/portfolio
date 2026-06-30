import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeSnippet } from './code-snippet';
import type { CodeSnippetModel } from '@models/code.model';

const codeSnippet: CodeSnippetModel = {
  tabs: [ 'index.html', 'styles.scss' ],
  codes: [
    {
      'index.html': {
        type: 'html',
        code: '<h1>Hello</h1>'
      }
    },
    {
      'styles.scss': {
        type: 'scss',
        code: 'h1 { color: red; }'
      }
    }
  ]
};

describe('CodeSnippet', () => {
  let component: CodeSnippet;
  let fixture: ComponentFixture<CodeSnippet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeSnippet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeSnippet);
    fixture.componentRef.setInput('height', '200px');
    fixture.componentRef.setInput('width', '300px');
    fixture.componentRef.setInput('codes', codeSnippet);
    fixture.detectChanges();
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change the displayed code when a tab is selected', () => {
    const tabs = fixture.nativeElement.querySelectorAll('.code-snippet__tab') as NodeListOf<HTMLElement>;

    tabs[1].click();
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('h1 { color: red; }');
  });
});
