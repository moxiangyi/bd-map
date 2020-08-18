import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-comfirm-dialog',
  templateUrl: './comfirm-dialog.component.html',
  styleUrls: ['./comfirm-dialog.component.css']
})
export class ComfirmDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ComfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
    ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirm() {
    this.dialogRef.close(true);
  }

  ngOnInit(){}

}
