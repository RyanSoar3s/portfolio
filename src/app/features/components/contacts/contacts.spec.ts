import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StateComponents } from '@services/state-components';

import { Contacts } from './contacts';

describe('Contacts', () => {
  let component: Contacts;
  let fixture: ComponentFixture<Contacts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contacts]
    })
    .compileComponents();

    const stateComponents = TestBed.inject(StateComponents);
    stateComponents.updateState("contacts", "isTarget");

    fixture = TestBed.createComponent(Contacts);
    fixture.detectChanges();
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
