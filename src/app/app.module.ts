import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { ResumeComponent } from './component/resume/resume.component';
import { CssLoaderComponent } from './component/css-loader/css-loader.component';


@NgModule({
  declarations: [AppComponent, HomePageComponent, ResumeComponent, CssLoaderComponent],
  imports: [BrowserModule, AppRoutingModule],
  
providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
