// theme.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private storageKey = 'theme-preference';

  setTheme(preference: 'light' | 'dark' | 'system') {
    localStorage.setItem(this.storageKey, preference);
    this.applyTheme(preference);
  }

  getTheme(): 'light' | 'dark' | 'system' {
    return (localStorage.getItem(this.storageKey) as 'light' | 'dark' | 'system') || 'system';
  }

  applyTheme(preference: 'light' | 'dark' | 'system') {
    const theme = preference === 'system'
      ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      : preference;

    document.documentElement.setAttribute('data-theme', theme);
  }

  initTheme() {
    this.applyTheme(this.getTheme());

    // Optional: Listen for system changes if user chooses "system"
    if (this.getTheme() === 'system') {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        this.applyTheme('system');
      });
    }
  }
}
