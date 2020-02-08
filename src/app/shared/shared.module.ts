import { NgModule } from '@angular/core';

import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    // Material Imports
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatTableModule,
    MatDatepickerModule,
    MatDialogModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  exports: [
    // Material exports
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatTableModule,
    MatDatepickerModule,
    MatDialogModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
})
export class SharedModule { }
