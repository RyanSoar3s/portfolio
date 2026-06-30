import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMe } from './about-me';
import { translocoTestingProvider } from '@mocks/transloco.mock';

describe('AboutMe', () => {
  let component: AboutMe;
  let fixture: ComponentFixture<AboutMe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMe],
      providers: [ translocoTestingProvider ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMe);
    fixture.componentRef.setInput('animate', true);
    fixture.detectChanges();
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
