import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatFormFieldModule,
  MatInputModule, MatCardModule, MatTabsModule, MatGridListModule, MatIconModule
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
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatGridListModule,
    FlexLayoutModule,
    MatIconModule
  ],
  declarations: []
})
export class MaterialModule { }
