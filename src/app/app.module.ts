import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { ResumeComponent } from './component/resume/resume.component';


@NgModule({
  declarations: [AppComponent, HomePageComponent, ResumeComponent],
  imports: [BrowserModule, AppRoutingModule],
  
providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
