import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroeComponent } from './heroe/heroe.component'
import { ListadoComponent } from './listado/listado.component'


@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent
    ],
    imports: [
        //Aqui solo los modulos
        CommonModule // necesario para el ngif y ngfor
    ]
})
export class HeroesModule {

}