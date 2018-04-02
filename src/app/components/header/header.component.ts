import { Component, HostListener, Inject, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/platform-browser';
// import { WINDOW_PROVIDERS, WINDOW } from './../../services/window.service';
import { WINDOW } from './../../services/window.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  private ANIMATE_HEADER_SCROLL_POS = 100;
  isNavbarCollapsed = true;
  bIsTopPosition = false;
  constructor(
      @Inject(DOCUMENT) private document: Document,
      @Inject(WINDOW) private window: Window) {
    }

  ngOnInit() {
    this.isTopPosition(this.getScrollTopOffset());
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isTopPosition(this.getScrollTopOffset());
  }

  getScrollTopOffset() {
    const nOffsetTop = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    return nOffsetTop;
  }
  // check if window scrolled to animate header
  isTopPosition(nOffsetTop) {
    if (nOffsetTop > this.ANIMATE_HEADER_SCROLL_POS) {
      this.bIsTopPosition = true;
    } else {
      this.bIsTopPosition = false;
    }
  }

}
