import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroesDetalleComponent } from './heroes-detalle/heroes-detalle.component';
import { AppComponent } from './app.component';
import { HeroesListaComponent } from './heroes-lista/heroes-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesListaComponent,
    HeroesDetalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
