import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { WINDOW_PROVIDERS, WINDOW } from './services/window.service';
import { HomeSellComponent } from './components/home-sell/home-sell.component';
import { HomeDoComponent } from './components/home-do/home-do.component';
import { HomeContactComponent } from './components/home-contact/home-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    HomeSellComponent,
    HomeDoComponent,
    HomeContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ScrollToModule.forRoot()
  ],
  providers: [WINDOW_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
