import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ListdemoComponent } from './listdemo/listdemo.component';
import { SortPipe } from './sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListdemoComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
