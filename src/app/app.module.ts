import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {CollapseModule} from 'ngx-bootstrap/collapse';

import {SortPipe} from './sort.pipe';

import {NavbarComponent} from './core/navbar/navbar.component';
import {FooterComponent} from './core/footer/footer.component';
import {JumbotronComponent} from './core/jumbotron/jumbotron.component';

import {BsDropdownModule} from 'ngx-bootstrap';

import {AppRoutingModule} from './app-routing.module';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    SortPipe,
    NavbarComponent,
    FooterComponent,
    JumbotronComponent,
    ...AppRoutingModule.routableComponents,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
