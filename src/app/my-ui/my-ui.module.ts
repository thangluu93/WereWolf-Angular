import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LogInDialogComponent } from './log-in-dialog/log-in-dialog.component';
import { FooterComponent } from './footer/footer.component';
import { MatInputModule } from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';





@NgModule({
  declarations: [NavBarComponent, LogInDialogComponent, FooterComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatTabsModule,
    MatDialogModule,
    MatButtonModule,

    MatToolbarModule,

    MatFormFieldModule, 
    FormsModule,
    ReactiveFormsModule,r

  ],
  exports: [NavBarComponent,LogInDialogComponent,FooterComponent]
})
export class MyUiModule { }
