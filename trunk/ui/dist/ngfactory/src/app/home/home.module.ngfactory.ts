/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '../../../../../src/app/home/home.module';
import * as import2 from '@angular/common';
import * as import3 from '@angular/router';
import * as import4 from './home-page/home-page.component.ngfactory';
import * as import5 from '../../../../../src/app/home/home-page/home-page.component';
class HomeModuleInjector extends import0.ɵNgModuleInjector<import1.HomeModule> {
  _CommonModule_0:import2.CommonModule;
  _RouterModule_1:import3.RouterModule;
  _HomeModule_2:import1.HomeModule;
  __NgLocalization_3:import2.NgLocaleLocalization;
  _ROUTES_4:any[];
  constructor(parent:import0.Injector) {
    super(parent,[import4.HomePageComponentNgFactory],([] as any[]));
  }
  get _NgLocalization_3():import2.NgLocaleLocalization {
    if ((this.__NgLocalization_3 == null)) { (this.__NgLocalization_3 = new import2.NgLocaleLocalization(this.parent.get(import0.LOCALE_ID))); }
    return this.__NgLocalization_3;
  }
  createInternal():import1.HomeModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._RouterModule_1 = new import3.RouterModule(this.parent.get(import3.ɵa,(null as any)),this.parent.get(import3.Router,(null as any)));
    this._HomeModule_2 = new import1.HomeModule();
        this._ROUTES_4 = [[{
          path: '',
          component: import5.HomePageComponent,
          pathMatch: 'full'
        }
    ]];
    return this._HomeModule_2;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.RouterModule)) { return this._RouterModule_1; }
    if ((token === import1.HomeModule)) { return this._HomeModule_2; }
    if ((token === import2.NgLocalization)) { return this._NgLocalization_3; }
    if ((token === import3.ROUTES)) { return this._ROUTES_4; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const HomeModuleNgFactory:import0.NgModuleFactory<import1.HomeModule> = new import0.NgModuleFactory<any>(HomeModuleInjector,import1.HomeModule);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2dpcmljL1Byb2plY3RzL25nMi1ib290c3RyYXAvYXBwVUkvc3JjL2FwcC9ob21lL2hvbWUubW9kdWxlLm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL1VzZXJzL2dpcmljL1Byb2plY3RzL25nMi1ib290c3RyYXAvYXBwVUkvc3JjL2FwcC9ob21lL2hvbWUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
