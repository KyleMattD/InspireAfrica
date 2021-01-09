import { ChangeDetectionStrategy, Component, HostListener, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ErrorDialogService } from './error-dialog.service';
@Component({
changeDetection: ChangeDetectionStrategy.OnPush,
selector: 'app-error-dialog',
templateUrl: './error-dialog.component.html',
styles: [`
  .header, .dialog-message {
      text-transform: lowercase;
  }
  .header::first-letter, .dialog-message::first-letter {
      text-transform: uppercase;
  }
`]
})
export class ErrorDialogComponent {
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: {
                  
                  confirmText: string,
                  message: string,
                  title: string
              }, private mdDialogRef: MatDialogRef<ErrorDialogComponent>) { }
  public cancel() {
    this.close(false);
  }
  public close(value) {
    this.mdDialogRef.close(value);
  }
  public confirm() {
    this.close(true);
  }
  @HostListener("keydown.esc") 
  public onEsc() {
    this.close(false);
  }
}