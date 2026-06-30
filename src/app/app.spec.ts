import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { translocoTestingProvider } from '@mocks/transloco.mock';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [ translocoTestingProvider ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
