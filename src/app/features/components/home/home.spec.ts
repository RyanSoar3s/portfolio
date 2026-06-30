import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home } from './home';
import { translocoTestingProvider } from '@mocks/transloco.mock';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [ translocoTestingProvider ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home);
    fixture.componentRef.setInput('animate', true);
    fixture.detectChanges();
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
