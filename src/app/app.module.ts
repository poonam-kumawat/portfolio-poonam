import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { CssLoaderComponent } from './component/css-loader/css-loader.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { AnimatedBgComponent } from './component/animated-bg/animated-bg.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CssLoaderComponent,
    AnimatedBgComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxExtendedPdfViewerModule,
    NgxTypedJsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
