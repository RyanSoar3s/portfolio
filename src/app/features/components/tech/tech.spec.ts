import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StateComponents } from '@services/state-components';

import { Tech } from './tech';

describe('Tech', () => {
  let component: Tech;
  let fixture: ComponentFixture<Tech>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tech]
    })
    .compileComponents();

    const stateComponents = TestBed.inject(StateComponents);
    stateComponents.updateState("tech", "isTarget");

    fixture = TestBed.createComponent(Tech);
    fixture.detectChanges();
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select and reset a tech card', async () => {
    const firstCard = fixture.nativeElement.querySelector('.tech__card') as HTMLElement;

    firstCard.click();
    fixture.detectChanges();
    await fixture.whenStable();

    expect(fixture.nativeElement.querySelector('.tech-panel')).toBeTruthy();

    const closeButton = fixture.nativeElement.querySelector('.tech-panel__close') as HTMLElement;

    closeButton.click();
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.tech-panel')).toBeFalsy();
  });
});
