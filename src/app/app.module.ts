import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {SortPipe} from './sort.pipe';
import {NavbarComponent} from './core/navbar/navbar.component';
import {FooterComponent} from './core/footer/footer.component';
import {JumbotronComponent} from './core/jumbotron/jumbotron.component';
import {AlertModule, BsDropdownModule} from 'ngx-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import {UserService} from './shared/user.service';
import {LoggedInGuard} from './shared/logged-in.guard';


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
    AppRoutingModule,
    AlertModule.forRoot(),
  ],
  providers: [UserService, LoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
