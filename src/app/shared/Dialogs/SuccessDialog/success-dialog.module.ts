import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core';
import { SuccessDialogService } from './success-dialog.service';
import {  MatButtonModule } from '@angular/material/button';
import { SuccessDialogComponent } from './success-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    imports: [
        CommonModule,
        MatDialogModule,
        MatButtonModule
    ],
    declarations: [
        SuccessDialogComponent
    ],
    exports: [SuccessDialogComponent],
    entryComponents: [SuccessDialogComponent],
    providers: [SuccessDialogService]
  })
  export class SuccessDialogModule {
  }