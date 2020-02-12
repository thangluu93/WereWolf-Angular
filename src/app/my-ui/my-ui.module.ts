import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LogInDialogComponent } from './log-in-dialog/log-in-dialog.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [NavBarComponent, LogInDialogComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [NavBarComponent]
})
export class MyUiModule { }
