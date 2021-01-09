import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { SuccessDialogComponent } from './success-dialog.component';

@Injectable()

export class SuccessDialogService {
  constructor(private dialog: MatDialog) { }
  dialogRef: MatDialogRef<SuccessDialogComponent>;
  
  public open(options) {
    this.dialogRef = this.dialog.open(SuccessDialogComponent, {    
         data: {
           title: options.title,
           message: options.message,
           cancelText: options.cancelText,
           confirmText: options.confirmText
         }
    });
  }
  public confirmed(): Observable<any> {
    
    return this.dialogRef.afterClosed().pipe(take(1), map(res => {
        return res;
      }
    ));
  }
}