import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router, Routes } from '@angular/router';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SplashImageComponent } from './components/splash-image/splash-image.component';
import { HighlightsComponent } from './components/highlights/highlights.component';
import { LoginComponent } from './components/login/login.component';
import { RequestPageComponent } from './components/request-page/request-page.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
]
@NgModule({
  
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    //AppRoutingModule
  ],
  
  declarations: [
    AppComponent,
    NavbarComponent,
    SplashImageComponent,
    HighlightsComponent,
    LoginComponent,
    RequestPageComponent,
  ],

  bootstrap: [AppComponent]
})

export class AppModule {

 }
