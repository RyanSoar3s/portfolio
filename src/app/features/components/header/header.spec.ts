import { DOCUMENT } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header } from './header';
import { translocoTestingProvider } from '@mocks/transloco.mock';
import ResponsiveMock from '@mocks/responsive.mock';
import { Responsive } from '@services/responsive';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;
  let responsive: ResponsiveMock;

  beforeEach(async () => {
    responsive = new ResponsiveMock();

    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [
        translocoTestingProvider,
        {
          provide: Responsive,
          useValue: responsive
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header);
    fixture.detectChanges();
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the selected section when a desktop navigation option is clicked', () => {
    let navigatedIndex: number | undefined;
    const options = fixture.nativeElement.querySelectorAll('.header__option') as NodeListOf<HTMLElement>;

    component.navigate.subscribe((index) => navigatedIndex = index);

    options[2].click();
    fixture.detectChanges();

    expect(navigatedIndex).toBe(2);
  });

  it('should open and close the mobile menu state', () => {
    const doc = TestBed.inject(DOCUMENT);

    responsive.setXs(true);
    fixture.detectChanges();

    const menuButton = fixture.nativeElement.querySelector('.header__menu') as HTMLElement;

    menuButton.click();
    fixture.detectChanges();

    expect(component.isOpenMenu()).toBe(true);
    expect(doc.body.style.overflow).toBe('hidden');

    component.onResize();
    fixture.detectChanges();

    expect(component.isOpenMenu()).toBe(false);
    expect(doc.body.style.overflow).toBe('');
  });

  it('should emit the selected section from the mobile menu', () => {
    let navigatedIndex: number | undefined;

    responsive.setXs(true);
    fixture.detectChanges();

    component.navigate.subscribe((index) => navigatedIndex = index);

    const menuButton = fixture.nativeElement.querySelector('.header__menu') as HTMLElement;

    menuButton.click();
    fixture.detectChanges();

    const mobileOptions = fixture.nativeElement.querySelectorAll('.header__option-menu') as NodeListOf<HTMLElement>;

    mobileOptions[4].click();
    fixture.detectChanges();

    expect(navigatedIndex).toBe(4);
  });
});
