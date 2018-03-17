import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatFormFieldModule,
  MatInputModule, MatCardModule, MatTabsModule, MatGridListModule, MatIconModule,MatToolbarModule
} from '@angular/material'; 
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatGridListModule,
    FlexLayoutModule,
    MatIconModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatGridListModule,
    FlexLayoutModule,
    MatIconModule,
    MatToolbarModule
  ],
  declarations: []
})
export class MaterialModule { }
