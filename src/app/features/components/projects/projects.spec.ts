import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projects } from './projects';

describe('Projects', () => {
  let component: Projects;
  let fixture: ComponentFixture<Projects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projects]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Projects);
    fixture.componentRef.setInput('animate', true);
    fixture.detectChanges();
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should disable the preview action when a project has no live site', () => {
    const firstProjectPreview = fixture.nativeElement.querySelector('.projects__preview') as HTMLButtonElement;

    expect(firstProjectPreview.disabled).toBe(true);
    expect(firstProjectPreview.querySelector('a')).toBeFalsy();
  });

  it('should expose clickable preview and repository links for projects with urls', () => {
    const cards = fixture.nativeElement.querySelectorAll('.projects__card') as NodeListOf<HTMLElement>;
    const projectWithPreview = cards[1];
    const previewLink = projectWithPreview.querySelector('.projects__preview a') as HTMLAnchorElement;
    const repoLink = projectWithPreview.querySelector('.projects__repo a') as HTMLAnchorElement;
    const clickedLinks: string[] = [];

    [ previewLink, repoLink ].forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        clickedLinks.push(link.href);
      });
    });

    previewLink.click();
    repoLink.click();

    expect(clickedLinks).toEqual([
      'https://fiamma-pizza.vercel.app/',
      'https://github.com/RyanSoar3s/fiamma_pizza'
    ]);
  });
});
