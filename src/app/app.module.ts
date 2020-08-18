import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule, MatTextColumn } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule, MatSortModule, MatAutocompleteModule, MatChipsModule } from '@angular/material';
import { PagesComponent } from './pages/pages.component';
import { DatabaseService } from './pages/database.service';
import { DetailComponent } from './pages/components/detail/detail.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import {LoginComponent} from './login/login.component';
import { ComfirmDialogComponent } from './pages/components/dialog/comfirm-dialog/comfirm-dialog.component';

const MAT_MODULE = [
  MatPaginatorModule,
  MatTableModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatCheckboxModule,
  MatCardModule,
  MatTooltipModule,
  MatSliderModule,
  MatSelectModule,
  MatProgressBarModule,
  MatDatepickerModule,
  MatTabsModule,
  MatRadioModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatSortModule,
  MatAutocompleteModule,
  MatChipsModule
];
@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    DetailComponent,
    LoginComponent,
    ComfirmDialogComponent
  ],
  entryComponents: [
    ComfirmDialogComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ...MAT_MODULE,
    routing,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  exports: [
    MatIconModule
  ],
  providers: [DatabaseService, { provide: MAT_DIALOG_DATA, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }
