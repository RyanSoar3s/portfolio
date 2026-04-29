import { ComponentFixture, TestBed } from '@angular/core/testing';
import { translocoTestingProviders } from '../../testing/transloco-testing';

import { Technologies } from './technologies';

describe('Technologies', () => {
  let component: Technologies;
  let fixture: ComponentFixture<Technologies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Technologies],
      providers: [translocoTestingProviders]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Technologies);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
