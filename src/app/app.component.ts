import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { Router, Event, Scroll } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(
    private themeService: ThemeService,
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit() {
    this.themeService.initTheme();

    this.router.events
      .pipe(
        filter((e: Event): e is Scroll => e instanceof Scroll) // ✅ this narrows the type
      )
      .subscribe((e: Scroll) => {
        setTimeout(() => {
          if (e.position) {
            this.viewportScroller.scrollToPosition(e.position);
          } else {
            this.viewportScroller.scrollToPosition([0, 0]);
          }
        }, 50); // tweak if needed for render delay
      });
  }
}
