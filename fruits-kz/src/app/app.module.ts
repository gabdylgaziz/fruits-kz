import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartpageComponent } from './pages/startpage/startpage.component';
import { NavbarComponent } from './pages/startpage/navbar/navbar.component';
import { ProductListComponent } from './pages/startpage/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StartpageComponent,
    NavbarComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
