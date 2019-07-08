import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatOptionModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatListModule,
    MatOptionModule,
    MatSelectModule
  ]
})
export class CustomMaterialModule {
}
