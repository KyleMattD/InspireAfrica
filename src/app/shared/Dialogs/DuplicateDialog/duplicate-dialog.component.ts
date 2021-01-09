import { ChangeDetectionStrategy, Component, HostListener, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DuplicateDialogService } from './duplicate-dialog.service';
@Component({
changeDetection: ChangeDetectionStrategy.OnPush,
selector: 'app-duplicate-dialog',
templateUrl: './duplicate-dialog.component.html',
styles: [`
  .header, .dialog-message {
      text-transform: lowercase;
  }
  .header::first-letter, .dialog-message::first-letter {
      text-transform: uppercase;
  }
`]
})
export class DuplicateDialogComponent {
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: {
                  cancelText: string,
                  confirmText: string,
                  message: string,
                  title: string
              }, private mdDialogRef: MatDialogRef<DuplicateDialogComponent>) { }
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