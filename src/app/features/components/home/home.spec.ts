import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StateComponents } from '@services/state-components';

import { Home } from './home';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home]
    })
    .compileComponents();

    const stateComponents = TestBed.inject(StateComponents);
    stateComponents.updateState("home", "isTarget");

    fixture = TestBed.createComponent(Home);
    fixture.detectChanges();
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
