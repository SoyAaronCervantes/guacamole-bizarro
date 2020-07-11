import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavWebsiteComponent } from './sidenav-website.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    SidenavWebsiteComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [SidenavWebsiteComponent]
})
export class SidenavWebsiteModule { }
