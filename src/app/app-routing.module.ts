import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ExamplecardComponent} from './examplecard/examplecard.component';
import {ListcssselectorsComponent} from './examples/listcssselectors/listcssselectors.component';
import {ButtonsactionsComponent} from './examples/buttonsactions/buttonsactions.component';
import {ListdemoComponent} from './examples/listdemo/listdemo.component';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';


const routes: Routes = [
{path: 'home', component: HomeComponent},
  {
    path: 'examples',
    children: [
      {path: 'listdemo', component: ListdemoComponent},
      {path: 'buttons', component: ButtonsactionsComponent},
      {path: 'listcss', component: ListcssselectorsComponent},
    ]
},
  {path: '', component: PageNotFoundComponent },
  {path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  static routableComponents = [
    HomeComponent,
    ExamplecardComponent,
    ListcssselectorsComponent,
    ButtonsactionsComponent,
    ListdemoComponent,
    PageNotFoundComponent,
  ];


}
