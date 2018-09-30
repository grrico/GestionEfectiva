import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,MatListModule,MatCardModule, MatToolbarModule, BrowserModule, MatIconModule, MatTabsModule],
  exports: [MatButtonModule, MatCheckboxModule,MatListModule,MatCardModule, MatToolbarModule, BrowserModule, MatIconModule, MatTabsModule],
})
export class MaterialModule { }