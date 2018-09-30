import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,MatListModule,MatCardModule, MatToolbarModule, BrowserModule],
  exports: [MatButtonModule, MatCheckboxModule,MatListModule,MatCardModule, MatToolbarModule, BrowserModule],
})
export class MaterialModule { }