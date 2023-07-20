import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ConfirmComponent } from './dialogs/confirm/confirm.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    TranslateModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    TranslateModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule,
    FormsModule
  ]
})
export class SharedModule { }
