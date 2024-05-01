import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { ResumeComponent } from './component/resume/resume.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';


@NgModule({
  declarations: [AppComponent, HomePageComponent, ResumeComponent],
  imports: [BrowserModule, AppRoutingModule,NgxExtendedPdfViewerModule],
  
providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
