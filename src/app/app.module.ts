import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { KontoComponent } from './components/konto/konto.component';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatPaginator } from '@angular/material';
import { KontoTableComponent } from './konto-table/konto-table.component';
import { SampleTableComponent } from './sample-table/sample-table.component';
import { KontoDetailComponent } from './konto-detail/konto-detail.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule,  MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    KontoComponent,
    KontoTableComponent,
    SampleTableComponent,
    KontoDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [MatPaginator],
  bootstrap: [AppComponent]
})
export class AppModule { }
