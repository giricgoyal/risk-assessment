import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RiskMapComponent } from './component';
import { AuthGuard } from '../../shared';

const routes: Routes = [
    {
        path: '',
        component: RiskMapComponent
    }
];

export const RiskMapRouteModule: ModuleWithProviders = RouterModule.forChild(routes);
