import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { KontoComponent } from './components/konto/konto.component';
import { KontoService} from './services/konto.service';

@NgModule({
  declarations: [
    AppComponent,
    KontoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [KontoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
