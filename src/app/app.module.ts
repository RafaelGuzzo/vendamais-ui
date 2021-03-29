import { BrowserModule } from '@angular/platform-browser';
import { JwPaginationModule } from 'jw-angular-pagination';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PedidoNovoComponent } from './pedido-novo/pedido-novo.component';
import { PedidoListarComponent } from './pedido-listar/pedido-listar.component';
import { NgxMaskModule } from 'ngx-mask'

const appRoutes: Routes = [
  {
    path: 'dashboard', component: HeaderComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'pedido-novo', component: PedidoNovoComponent},
      {path: 'pedido-listar', component: PedidoListarComponent}
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    PedidoNovoComponent,
    PedidoListarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    JwPaginationModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: true
    }),
    AppRoutingModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
