import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core';
import { DuplicateDialogService } from './duplicate-dialog.service';
import {  MatButtonModule } from '@angular/material/button';
import { DuplicateDialogComponent } from './duplicate-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    imports: [
        CommonModule,
        MatDialogModule,
        MatButtonModule
    ],
    declarations: [
        DuplicateDialogComponent
    ],
    exports: [DuplicateDialogComponent],
    entryComponents: [DuplicateDialogComponent],
    providers: [DuplicateDialogService]
  })
  export class DuplicateDialogModule {
  }