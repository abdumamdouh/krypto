import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { LogosComponent } from './components/logos/logos.component';
import { SectionComponent } from './components/section/section.component';
import { TestomnialsComponent } from './components/testomnials/testomnials.component';
import { CardComponent } from './components/card/card.component';
import { GradSectionComponent } from './components/grad-section/grad-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroSectionComponent,
    LogosComponent,
    SectionComponent,
    TestomnialsComponent,
    CardComponent,
    GradSectionComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
