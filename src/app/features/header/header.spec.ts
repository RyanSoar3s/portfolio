import { ComponentFixture, TestBed } from '@angular/core/testing';
import { screen } from '@testing-library/angular';
import userEvent, { UserEvent } from '@testing-library/user-event';

import { Header } from './header';
import { Responsive } from '@services/responsive';
import ResponsiveMock from '@mocks/responsive.mock'

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;
  let responsive: ResponsiveMock;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Header ],
      providers: [
        {
          provide: Responsive,
          useClass: ResponsiveMock

        }

      ]
    })
    .compileComponents();

    responsive = TestBed.inject(Responsive) as unknown as ResponsiveMock;
    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    await fixture.whenStable();

  });

  it("should click on the menu button", async () => {
    expect(component.isOpenMenu()).toBeFalsy();

    responsive.setXs(true);
    fixture.detectChanges();

    const user = userEvent.setup();

    await user.click(
      screen.getByTestId("menuButton")

    );

    expect(component.isOpenMenu()).toBeTruthy();

  });

});
