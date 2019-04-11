import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SplashImageComponent } from './components/splash-image/splash-image.component';
import { HighlightsComponent } from './components/highlights/highlights.component';
import { LoginComponent } from './components/login/login.component';
import { RequestPageComponent } from './components/request-page/request-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SplashImageComponent,
    HighlightsComponent,
    LoginComponent,
    RequestPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
