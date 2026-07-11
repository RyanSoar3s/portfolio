import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StateComponents } from '@services/state-components';

import { AboutMe } from './about-me';

describe('AboutMe', () => {
  let component: AboutMe;
  let fixture: ComponentFixture<AboutMe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMe]
    })
    .compileComponents();

    const stateComponents = TestBed.inject(StateComponents);
    stateComponents.updateState("about-me", "isTarget");

    fixture = TestBed.createComponent(AboutMe);
    fixture.detectChanges();
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
