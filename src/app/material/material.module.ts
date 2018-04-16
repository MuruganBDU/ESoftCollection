import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatFormFieldModule,
  MatInputModule, MatCardModule, MatTabsModule, MatGridListModule, MatIconModule,MatToolbarModule,MatSidenavModule,MatCheckboxModule
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
    MatToolbarModule,
    MatSidenavModule,MatCheckboxModule
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
    MatToolbarModule,
    MatSidenavModule,MatCheckboxModule
  ],
  declarations: []
})
export class MaterialModule { }
