import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contacts } from './contacts';
import { translocoTestingProvider } from '@mocks/transloco.mock';

describe('Contacts', () => {
  let component: Contacts;
  let fixture: ComponentFixture<Contacts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contacts],
      providers: [ translocoTestingProvider ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contacts);
    fixture.componentRef.setInput('animate', true);
    fixture.detectChanges();
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
