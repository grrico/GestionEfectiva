
//  angular module

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

//  pipes
import { TruncatePipe } from './pipes/truncate.pipe'

//  material
import { MaterialModule } from './material'

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