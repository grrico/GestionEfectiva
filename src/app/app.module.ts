
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { TruncatePipe } from './pipes/truncate.pipe'

import { MaterialModule } from './material'

//import { BrowserModule } from '@angular/platform-browser';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatCardModule } from '@angular/material/card';
// import { MatListModule } from '@angular/material/list';


@NgModule({
declarations: [
AppComponent,
HomeComponent, 
TruncatePipe
],
imports: [

MaterialModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { } 