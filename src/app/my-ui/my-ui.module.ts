import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LogInDialogComponent } from './log-in-dialog/log-in-dialog.component';
import { FooterComponent } from './footer/footer.component';
import { MatInputModule } from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';






@NgModule({
  declarations: [NavBarComponent, LogInDialogComponent, FooterComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatTabsModule,
    MatDialogModule,
    MatButtonModule,

  ],
  exports: [NavBarComponent,LogInDialogComponent]
})
export class MyUiModule { }
