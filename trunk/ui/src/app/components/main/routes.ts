import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './component';
import { AuthGuard } from '../../shared';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children : [
            {
                path: '',
                loadChildren: '../risk-map/index#RiskMapModule',
                canActivate: [AuthGuard]
            }
        ]
    }
];

export const MainRouteModule: ModuleWithProviders = RouterModule.forChild(routes);
