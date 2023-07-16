import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserpPageRoutingModule } from './userp-routing.module';

import { UserpPage } from './userp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserpPageRoutingModule
  ],
  declarations: [UserpPage]
})
export class UserpPageModule {}
