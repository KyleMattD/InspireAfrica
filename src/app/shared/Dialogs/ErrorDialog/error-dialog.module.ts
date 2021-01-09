import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core';
import { ErrorDialogService } from './error-dialog.service';
import {  MatButtonModule } from '@angular/material/button';
import { ErrorDialogComponent } from './error-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    imports: [
        CommonModule,
        MatDialogModule,
        MatButtonModule
    ],
    declarations: [
        ErrorDialogComponent
    ],
    exports: [ErrorDialogComponent],
    entryComponents: [ErrorDialogComponent],
    providers: [ErrorDialogService]
  })
  export class ErrorDialogModule {
  }