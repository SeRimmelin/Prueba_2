import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnadirProductoPageRoutingModule } from './anadir-producto-routing.module';

import { AnadirProductoPage } from './anadir-producto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnadirProductoPageRoutingModule
  ],
  declarations: [AnadirProductoPage]
})
export class AnadirProductoPageModule {}
