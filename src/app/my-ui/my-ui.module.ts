
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LogInDialogComponent } from './log-in-dialog/log-in-dialog.component';
import { FooterComponent } from './footer/footer.component';
import { InstructionComponent } from './instruction/instruction.component';

import {MatCheckboxModule} from '@angular/material/checkbox';

import {MatExpansionModule} from '@angular/material/expansion'

import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { PlayingFielComponent } from './playing-fiel/playing-fiel.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';






@NgModule({
  declarations: [NavBarComponent, LogInDialogComponent, FooterComponent, InstructionComponent, ChatBoxComponent, PlayingFielComponent],
  imports: [
    CommonModule,
    MatFormFieldModule, 
    MatInputModule,
    MatExpansionModule,


    MatTabsModule,
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatIconModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatCardModule

  ],
  entryComponents:[
    InstructionComponent
  ],
  exports: [NavBarComponent,LogInDialogComponent,FooterComponent,ChatBoxComponent,PlayingFielComponent],
})
export class MyUiModule { }
