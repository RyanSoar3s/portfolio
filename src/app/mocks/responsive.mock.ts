import { computed, signal } from '@angular/core';

export default class ResponsiveMock {
  private xs = signal(false);
  private sm = signal(false);
  private md = signal(false);
  private lg = signal(false);
  private xl = signal(false);

  isXs = computed(() => this.xs());
  isSm = computed(() => this.sm());
  isMd = computed(() => this.md());
  isLg = computed(() => this.lg());
  isXl = computed(() => this.xl());

  setXs(value: boolean) { this.xs.set(value); }
  setSm(value: boolean) { this.sm.set(value); }
  setMd(value: boolean) { this.md.set(value); }
  setLg(value: boolean) { this.lg.set(value); }
  setXl(value: boolean) { this.xl.set(value); }

}
