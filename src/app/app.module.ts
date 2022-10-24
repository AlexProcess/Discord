import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { CtaButtonWhiteComponent } from './cta-button-white/cta-button-white.component';
import { CtaButtonBlackComponent } from './cta-button-black/cta-button-black.component';
import { CtaButtonBlueComponent } from './cta-button-blue/cta-button-blue.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CtaButtonWhiteComponent,
    CtaButtonBlackComponent,
    CtaButtonBlueComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
