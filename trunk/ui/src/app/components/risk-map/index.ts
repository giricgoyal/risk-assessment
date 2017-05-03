import { AppSidebarModule } from '../sidebar';
import { RiskMapRouteModule } from './routes';
import { RiskMapComponent } from './component';
import { SharedModule } from '../../shared';
import { NgModule } from '@angular/core';
import  { LeafletModule } from '@asymmetrik/angular2-leaflet';

@NgModule({
    imports: [
        AppSidebarModule,
        SharedModule,
        RiskMapRouteModule,
        LeafletModule
    ],
    declarations: [
        RiskMapComponent
    ]
})

export class RiskMapModule {}