import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { OtraComponent } from '../navegar/otra/otra.component';


@Component({
  selector: 'app-popups',
  standalone: true,
  imports: [OtraComponent],
  templateUrl: './popups.component.html',
  styleUrl: './popups.component.css'
})




export class PopupsComponent {

  constructor(public dialog: MatDialog ) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(DialogAnimationsExampleDialog, {
      disableClose: true,
      autoFocus : true,
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      
    });
    
  }
}

@Component({
  selector: 'app-popups-dialog',
  templateUrl: './popups.component.dialog.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
})
export class DialogAnimationsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {}
}