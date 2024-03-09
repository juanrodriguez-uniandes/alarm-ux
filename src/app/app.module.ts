import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './navbar/navbar.component';  // Asegúrate de ajustar la ruta según la ubicación de tu componente
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    NavbarComponent,
    BrowserModule,
    AppComponent,
  ],
  bootstrap: [],
})
export class AppModule {}
