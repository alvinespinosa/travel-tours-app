import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { PackagesModule } from './pages/packages/packages.module';
import { HotelsModule } from './pages/hotels/hotels.module';
import { FlightsModule } from './pages/flights/flights.module';
import { PromosModule } from './pages/promos/promos.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './pages/common/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, FooterComponent, NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    PackagesModule,
    HotelsModule,
    FlightsModule,
    PromosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
