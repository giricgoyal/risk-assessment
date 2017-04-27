/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '../../../../../../src/app/components/authentication/index';
import * as import2 from '@angular/router';
import * as import3 from '@angular/common';
import * as import4 from '@angular/forms';
import * as import5 from '@angular/http';
import * as import6 from '../../../../../../src/app/shared/module';
import * as import7 from './login.component.ngfactory';
import * as import8 from './signup.component.ngfactory';
import * as import9 from './forgotpassword.component.ngfactory';
import * as import10 from '../../../../../../src/app/shared/services/auth.service';
import * as import11 from '../../../../../../src/app/components/authentication/login.component';
import * as import12 from '../../../../../../src/app/components/authentication/signup.component';
import * as import13 from '../../../../../../src/app/components/authentication/forgotpassword.component';
class AuthenticationModuleInjector extends import0.ɵNgModuleInjector<import1.AuthenticationModule> {
  _RouterModule_0:import2.RouterModule;
  _CommonModule_1:import3.CommonModule;
  _ɵba_2:import4.ɵba;
  _FormsModule_3:import4.FormsModule;
  _HttpModule_4:import5.HttpModule;
  _SharedModule_5:import6.SharedModule;
  _AuthenticationModule_6:import1.AuthenticationModule;
  __NgLocalization_7:import3.NgLocaleLocalization;
  __ɵi_8:import4.ɵi;
  __BrowserXhr_9:import5.BrowserXhr;
  __ResponseOptions_10:import5.BaseResponseOptions;
  __XSRFStrategy_11:any;
  __XHRBackend_12:import5.XHRBackend;
  __RequestOptions_13:import5.BaseRequestOptions;
  __Http_14:any;
  _ROUTES_15:any[];
  constructor(parent:import0.Injector) {
    super(parent,[
      import7.LoginComponentNgFactory,
      import8.SignupComponentNgFactory,
      import9.ForgotPasswordComponentNgFactory
    ]
    ,([] as any[]));
  }
  get _NgLocalization_7():import3.NgLocaleLocalization {
    if ((this.__NgLocalization_7 == null)) { (this.__NgLocalization_7 = new import3.NgLocaleLocalization(this.parent.get(import0.LOCALE_ID))); }
    return this.__NgLocalization_7;
  }
  get _ɵi_8():import4.ɵi {
    if ((this.__ɵi_8 == null)) { (this.__ɵi_8 = new import4.ɵi()); }
    return this.__ɵi_8;
  }
  get _BrowserXhr_9():import5.BrowserXhr {
    if ((this.__BrowserXhr_9 == null)) { (this.__BrowserXhr_9 = new import5.BrowserXhr()); }
    return this.__BrowserXhr_9;
  }
  get _ResponseOptions_10():import5.BaseResponseOptions {
    if ((this.__ResponseOptions_10 == null)) { (this.__ResponseOptions_10 = new import5.BaseResponseOptions()); }
    return this.__ResponseOptions_10;
  }
  get _XSRFStrategy_11():any {
    if ((this.__XSRFStrategy_11 == null)) { (this.__XSRFStrategy_11 = import5.ɵb()); }
    return this.__XSRFStrategy_11;
  }
  get _XHRBackend_12():import5.XHRBackend {
    if ((this.__XHRBackend_12 == null)) { (this.__XHRBackend_12 = new import5.XHRBackend(this._BrowserXhr_9,this._ResponseOptions_10,this._XSRFStrategy_11)); }
    return this.__XHRBackend_12;
  }
  get _RequestOptions_13():import5.BaseRequestOptions {
    if ((this.__RequestOptions_13 == null)) { (this.__RequestOptions_13 = new import5.BaseRequestOptions()); }
    return this.__RequestOptions_13;
  }
  get _Http_14():any {
    if ((this.__Http_14 == null)) { (this.__Http_14 = import5.ɵc(this._XHRBackend_12,this._RequestOptions_13)); }
    return this.__Http_14;
  }
  createInternal():import1.AuthenticationModule {
    this._RouterModule_0 = new import2.RouterModule(this.parent.get(import2.ɵa,(null as any)),this.parent.get(import2.Router,(null as any)));
    this._CommonModule_1 = new import3.CommonModule();
    this._ɵba_2 = new import4.ɵba();
    this._FormsModule_3 = new import4.FormsModule();
    this._HttpModule_4 = new import5.HttpModule();
    this._SharedModule_5 = new import6.SharedModule();
    this._AuthenticationModule_6 = new import1.AuthenticationModule(this.parent.get(import10.AuthenticationService));
      this._ROUTES_15 = [[
        {
          path: '',
          redirectTo: 'login',
          pathMatch: 'full'
        }
        ,
        {
          path: 'login',
          component: import11.LoginComponent
        }
        ,
        {
          path: 'signup',
          component: import12.SignupComponent
        }
        ,
        {
          path: 'requestotp',
          component: import13.ForgotPasswordComponent
        }

      ]
    ];
    return this._AuthenticationModule_6;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.RouterModule)) { return this._RouterModule_0; }
    if ((token === import3.CommonModule)) { return this._CommonModule_1; }
    if ((token === import4.ɵba)) { return this._ɵba_2; }
    if ((token === import4.FormsModule)) { return this._FormsModule_3; }
    if ((token === import5.HttpModule)) { return this._HttpModule_4; }
    if ((token === import6.SharedModule)) { return this._SharedModule_5; }
    if ((token === import1.AuthenticationModule)) { return this._AuthenticationModule_6; }
    if ((token === import3.NgLocalization)) { return this._NgLocalization_7; }
    if ((token === import4.ɵi)) { return this._ɵi_8; }
    if ((token === import5.BrowserXhr)) { return this._BrowserXhr_9; }
    if ((token === import5.ResponseOptions)) { return this._ResponseOptions_10; }
    if ((token === import5.XSRFStrategy)) { return this._XSRFStrategy_11; }
    if ((token === import5.XHRBackend)) { return this._XHRBackend_12; }
    if ((token === import5.RequestOptions)) { return this._RequestOptions_13; }
    if ((token === import5.Http)) { return this._Http_14; }
    if ((token === import2.ROUTES)) { return this._ROUTES_15; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const AuthenticationModuleNgFactory:import0.NgModuleFactory<import1.AuthenticationModule> = new import0.NgModuleFactory<any>(AuthenticationModuleInjector,import1.AuthenticationModule);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2dpcmljL1Byb2plY3RzL25nMi1ib290c3RyYXAvYXBwVUkvc3JjL2FwcC9jb21wb25lbnRzL2F1dGhlbnRpY2F0aW9uL2luZGV4Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL1VzZXJzL2dpcmljL1Byb2plY3RzL25nMi1ib290c3RyYXAvYXBwVUkvc3JjL2FwcC9jb21wb25lbnRzL2F1dGhlbnRpY2F0aW9uL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
