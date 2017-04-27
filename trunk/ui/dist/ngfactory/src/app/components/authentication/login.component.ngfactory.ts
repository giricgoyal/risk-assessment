/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from './component.scss.shim.ngstyle';
import * as import1 from '@angular/core';
import * as import2 from '../../shared/components/loader/component.ngfactory';
import * as import3 from '../../../../../../src/app/shared/components/loader/component';
import * as import4 from '@angular/router';
import * as import5 from '@angular/common';
import * as import6 from '../../../../../../src/app/components/authentication/login.component';
import * as import7 from '@angular/forms';
import * as import8 from '../../../../../../src/app/shared/services/http.service';
import * as import9 from '../../../../../../src/app/shared/services/auth.service';
const styles_LoginComponent:any[] = [import0.styles];
export const RenderType_LoginComponent:import1.RendererType2 = import1.ɵcrt({
  encapsulation: 0,
  styles: styles_LoginComponent,
  data: {}
}
);
export function View_LoginComponent_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
      (l()(),import1.ɵeld(0,(null as any),(null as any),69,'div',[[
        'class',
        'login-container'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n    '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),66,'div',[[
        'class',
        'd-flex align-items-center justify-content-center flex-wrap'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n        '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),1,'div',[[
        'class',
        'text-center mr-5'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n        '])),
    (l()(),import1.ɵted((null as any),['\n        '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),60,'div',[[
        'class',
        'login-panel ml-5'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n            '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'loader',([] as any[]),(null as any),(null as any),(null as any),import2.View_AppLoaderComponent_0,import2.RenderType_AppLoaderComponent)),
      import1.ɵdid(2121728,(null as any),0,import3.AppLoaderComponent,[import1.ElementRef],{showLoader: [
        0,
        'showLoader'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['\n            '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),54,'div',[[
        'class',
        'p-5'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n                '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),11,'div',[[
        'class',
        'text-center mb-4'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n                    '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'h6',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['Login'])),
    (l()(),import1.ɵted((null as any),['\n                    '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),5,'label',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['Don\'t have an account? '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),3,'a',([] as any[]),[
      [
        1,
        'target',
        0
      ]
      ,
      [
        8,
        'href',
        4
      ]

    ]
      ,[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      if (('click' === en)) {
        const pd_0:any = ((<any>import1.ɵnov(v,22).onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import1.ɵdid(335872,(null as any),0,import4.RouterLinkWithHref,[
      import4.Router,
      import4.ActivatedRoute,
      import5.LocationStrategy
    ]
      ,{routerLink: [
        0,
        'routerLink'
      ]
    },(null as any)),
    import1.ɵpad(1),
    (l()(),import1.ɵted((null as any),['Signup'])),
    (l()(),import1.ɵted((null as any),['\n                '])),
    (l()(),import1.ɵted((null as any),['\n                '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),38,'form',[[
        'novalidate',
        ''
      ]
    ],[
      [
        2,
        'ng-untouched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-touched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pristine',
        (null as any)
      ]
      ,
      [
        2,
        'ng-dirty',
        (null as any)
      ]
      ,
      [
        2,
        'ng-valid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-invalid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pending',
        (null as any)
      ]

    ]
    ,[
      [
        (null as any),
        'ngSubmit'
      ]
      ,
      [
        (null as any),
        'submit'
      ]
      ,
      [
        (null as any),
        'reset'
      ]

    ]
    ,(v,en,$event) => {
      var ad:boolean = true;
      var co:import6.LoginComponent = v.component;
      if (('submit' === en)) {
        const pd_0:any = ((<any>import1.ɵnov(v,29).onSubmit($event)) !== false);
        ad = (pd_0 && ad);
      }
      if (('reset' === en)) {
        const pd_1:any = ((<any>import1.ɵnov(v,29).onReset()) !== false);
        ad = (pd_1 && ad);
      }
      if (('ngSubmit' === en)) {
        const pd_2:any = ((<any>co.login()) !== false);
        ad = (pd_2 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import1.ɵdid(8192,(null as any),0,import7.ɵbf,([] as any[]),(null as any),(null as any)),
      import1.ɵdid(8192,[[
        'f',
        4
      ]
    ],0,import7.NgForm,[
      [
        8,
        (null as any)
      ]
      ,
      [
        8,
        (null as any)
      ]

    ]
    ,(null as any),{ngSubmit: 'ngSubmit'}),
    import1.ɵprd(1024,(null as any),import7.ControlContainer,(null as any),[import7.NgForm]),
    import1.ɵdid(8192,(null as any),0,import7.NgControlStatusGroup,[import7.ControlContainer],(null as any),(null as any)),
    (l()(),import1.ɵted((null as any),['\n                    '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),9,'div',[[
        'class',
        'form-group'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n                        '])),
    (l()(),import1.ɵted((null as any),['\n                        '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),5,'input',[
      [
        'class',
        'form-control'
      ]
      ,
      [
        'id',
        'username'
      ]
      ,
      [
        'name',
        'username'
      ]
      ,
      [
        'placeholder',
        'Mobile number/Email address'
      ]
      ,
      [
        'type',
        'text'
      ]

    ]
    ,[
      [
        2,
        'ng-untouched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-touched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pristine',
        (null as any)
      ]
      ,
      [
        2,
        'ng-dirty',
        (null as any)
      ]
      ,
      [
        2,
        'ng-valid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-invalid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pending',
        (null as any)
      ]

    ]
    ,[
      [
        (null as any),
        'ngModelChange'
      ]
      ,
      [
        (null as any),
        'input'
      ]
      ,
      [
        (null as any),
        'blur'
      ]
      ,
      [
        (null as any),
        'compositionstart'
      ]
      ,
      [
        (null as any),
        'compositionend'
      ]

    ]
    ,(v,en,$event) => {
      var ad:boolean = true;
      var co:import6.LoginComponent = v.component;
      if (('input' === en)) {
        const pd_0:any = ((<any>import1.ɵnov(v,37)._handleInput($event.target.value)) !== false);
        ad = (pd_0 && ad);
      }
      if (('blur' === en)) {
        const pd_1:any = ((<any>import1.ɵnov(v,37).onTouched()) !== false);
        ad = (pd_1 && ad);
      }
      if (('compositionstart' === en)) {
        const pd_2:any = ((<any>import1.ɵnov(v,37)._compositionStart()) !== false);
        ad = (pd_2 && ad);
      }
      if (('compositionend' === en)) {
        const pd_3:any = ((<any>import1.ɵnov(v,37)._compositionEnd($event.target.value)) !== false);
        ad = (pd_3 && ad);
      }
      if (('ngModelChange' === en)) {
        const pd_4:any = ((<any>(co.data.phonenumber = $event)) !== false);
        ad = (pd_4 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import1.ɵdid(8192,(null as any),0,import7.DefaultValueAccessor,[
      import1.Renderer,
      import1.ElementRef,
      [
        2,
        import7.COMPOSITION_BUFFER_MODE
      ]

    ]
    ,(null as any),(null as any)),
    import1.ɵprd(512,(null as any),import7.NG_VALUE_ACCESSOR,(p0_0:any) => {
      return [p0_0];
    },[import7.DefaultValueAccessor]),
    import1.ɵdid(335872,(null as any),0,import7.NgModel,[
      [
        2,
        import7.ControlContainer
      ]
      ,
      [
        8,
        (null as any)
      ]
      ,
      [
        8,
        (null as any)
      ]
      ,
      [
        2,
        import7.NG_VALUE_ACCESSOR
      ]

    ]
    ,{
      name: [
        0,
        'name'
      ]
      ,
      model: [
        1,
        'model'
      ]

    }
    ,{update: 'ngModelChange'}),
    import1.ɵprd(1024,(null as any),import7.NgControl,(null as any),[import7.NgModel]),
    import1.ɵdid(8192,(null as any),0,import7.NgControlStatus,[import7.NgControl],(null as any),(null as any)),
    (l()(),import1.ɵted((null as any),['\n                    '])),
    (l()(),import1.ɵted((null as any),['\n                    '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),9,'div',[[
        'class',
        'form-group'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n                        '])),
    (l()(),import1.ɵted((null as any),['\n                        '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),5,'input',[
      [
        'class',
        'form-control'
      ]
      ,
      [
        'id',
        'password'
      ]
      ,
      [
        'name',
        'password'
      ]
      ,
      [
        'placeholder',
        'Password'
      ]
      ,
      [
        'type',
        'password'
      ]

    ]
    ,[
      [
        2,
        'ng-untouched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-touched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pristine',
        (null as any)
      ]
      ,
      [
        2,
        'ng-dirty',
        (null as any)
      ]
      ,
      [
        2,
        'ng-valid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-invalid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pending',
        (null as any)
      ]

    ]
    ,[
      [
        (null as any),
        'ngModelChange'
      ]
      ,
      [
        (null as any),
        'input'
      ]
      ,
      [
        (null as any),
        'blur'
      ]
      ,
      [
        (null as any),
        'compositionstart'
      ]
      ,
      [
        (null as any),
        'compositionend'
      ]

    ]
    ,(v,en,$event) => {
      var ad:boolean = true;
      var co:import6.LoginComponent = v.component;
      if (('input' === en)) {
        const pd_0:any = ((<any>import1.ɵnov(v,48)._handleInput($event.target.value)) !== false);
        ad = (pd_0 && ad);
      }
      if (('blur' === en)) {
        const pd_1:any = ((<any>import1.ɵnov(v,48).onTouched()) !== false);
        ad = (pd_1 && ad);
      }
      if (('compositionstart' === en)) {
        const pd_2:any = ((<any>import1.ɵnov(v,48)._compositionStart()) !== false);
        ad = (pd_2 && ad);
      }
      if (('compositionend' === en)) {
        const pd_3:any = ((<any>import1.ɵnov(v,48)._compositionEnd($event.target.value)) !== false);
        ad = (pd_3 && ad);
      }
      if (('ngModelChange' === en)) {
        const pd_4:any = ((<any>(co.data.password = $event)) !== false);
        ad = (pd_4 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import1.ɵdid(8192,(null as any),0,import7.DefaultValueAccessor,[
      import1.Renderer,
      import1.ElementRef,
      [
        2,
        import7.COMPOSITION_BUFFER_MODE
      ]

    ]
    ,(null as any),(null as any)),
    import1.ɵprd(512,(null as any),import7.NG_VALUE_ACCESSOR,(p0_0:any) => {
      return [p0_0];
    },[import7.DefaultValueAccessor]),
    import1.ɵdid(335872,(null as any),0,import7.NgModel,[
      [
        2,
        import7.ControlContainer
      ]
      ,
      [
        8,
        (null as any)
      ]
      ,
      [
        8,
        (null as any)
      ]
      ,
      [
        2,
        import7.NG_VALUE_ACCESSOR
      ]

    ]
    ,{
      name: [
        0,
        'name'
      ]
      ,
      model: [
        1,
        'model'
      ]

    }
    ,{update: 'ngModelChange'}),
    import1.ɵprd(1024,(null as any),import7.NgControl,(null as any),[import7.NgModel]),
    import1.ɵdid(8192,(null as any),0,import7.NgControlStatus,[import7.NgControl],(null as any),(null as any)),
    (l()(),import1.ɵted((null as any),['\n                    '])),
    (l()(),import1.ɵted((null as any),['\n                    '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'button',[
      [
        'class',
        'btn btn-primary btn-block'
      ]
      ,
      [
        'type',
        'submit'
      ]

    ]
      ,[[
        8,
        'disabled',
        0
      ]
    ],(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n                    Login\n                '])),
    (l()(),import1.ɵted((null as any),['\n                    '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),6,'div',[[
        'class',
        'text-center mt-4'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n                        '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),3,'a',([] as any[]),[
      [
        1,
        'target',
        0
      ]
      ,
      [
        8,
        'href',
        4
      ]

    ]
      ,[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      if (('click' === en)) {
        const pd_0:any = ((<any>import1.ɵnov(v,61).onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import1.ɵdid(335872,(null as any),0,import4.RouterLinkWithHref,[
      import4.Router,
      import4.ActivatedRoute,
      import5.LocationStrategy
    ]
      ,{routerLink: [
        0,
        'routerLink'
      ]
    },(null as any)),
    import1.ɵpad(1),
    (l()(),import1.ɵted((null as any),['Forgot Password?'])),
    (l()(),import1.ɵted((null as any),['\n                    '])),
    (l()(),import1.ɵted((null as any),['\n                '])),
    (l()(),import1.ɵted((null as any),['\n            '])),
    (l()(),import1.ɵted((null as any),['\n        '])),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    var co:import6.LoginComponent = v.component;
    const currVal_0:any = co.showLoader;
    ck(v,10,0,currVal_0);
    const currVal_3:any = ck(v,23,0,'/signup');
    ck(v,22,0,currVal_3);
    const currVal_18:any = 'username';
    const currVal_19:any = co.data.phonenumber;
    ck(v,39,0,currVal_18,currVal_19);
    const currVal_27:any = 'password';
    const currVal_28:any = co.data.password;
    ck(v,50,0,currVal_27,currVal_28);
    const currVal_32:any = ck(v,62,0,'/requestotp');
    ck(v,61,0,currVal_32);
  },(ck,v) => {
    var co:import6.LoginComponent = v.component;
    const currVal_1:any = import1.ɵnov(v,22).target;
    const currVal_2:any = import1.ɵnov(v,22).href;
    ck(v,21,0,currVal_1,currVal_2);
    const currVal_4:any = import1.ɵnov(v,31).ngClassUntouched;
    const currVal_5:any = import1.ɵnov(v,31).ngClassTouched;
    const currVal_6:any = import1.ɵnov(v,31).ngClassPristine;
    const currVal_7:any = import1.ɵnov(v,31).ngClassDirty;
    const currVal_8:any = import1.ɵnov(v,31).ngClassValid;
    const currVal_9:any = import1.ɵnov(v,31).ngClassInvalid;
    const currVal_10:any = import1.ɵnov(v,31).ngClassPending;
    ck(v,27,0,currVal_4,currVal_5,currVal_6,currVal_7,currVal_8,currVal_9,currVal_10);
    const currVal_11:any = import1.ɵnov(v,41).ngClassUntouched;
    const currVal_12:any = import1.ɵnov(v,41).ngClassTouched;
    const currVal_13:any = import1.ɵnov(v,41).ngClassPristine;
    const currVal_14:any = import1.ɵnov(v,41).ngClassDirty;
    const currVal_15:any = import1.ɵnov(v,41).ngClassValid;
    const currVal_16:any = import1.ɵnov(v,41).ngClassInvalid;
    const currVal_17:any = import1.ɵnov(v,41).ngClassPending;
    ck(v,36,0,currVal_11,currVal_12,currVal_13,currVal_14,currVal_15,currVal_16,currVal_17);
    const currVal_20:any = import1.ɵnov(v,52).ngClassUntouched;
    const currVal_21:any = import1.ɵnov(v,52).ngClassTouched;
    const currVal_22:any = import1.ɵnov(v,52).ngClassPristine;
    const currVal_23:any = import1.ɵnov(v,52).ngClassDirty;
    const currVal_24:any = import1.ɵnov(v,52).ngClassValid;
    const currVal_25:any = import1.ɵnov(v,52).ngClassInvalid;
    const currVal_26:any = import1.ɵnov(v,52).ngClassPending;
    ck(v,47,0,currVal_20,currVal_21,currVal_22,currVal_23,currVal_24,currVal_25,currVal_26);
    const currVal_29:any = co.isLoginDisabled();
    ck(v,55,0,currVal_29);
    const currVal_30:any = import1.ɵnov(v,61).target;
    const currVal_31:any = import1.ɵnov(v,61).href;
    ck(v,60,0,currVal_30,currVal_31);
  });
}
function View_LoginComponent_Host_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'login-component',([] as any[]),(null as any),(null as any),(null as any),View_LoginComponent_0,RenderType_LoginComponent)),
    import1.ɵdid(57344,(null as any),0,import6.LoginComponent,[
      import8.HttpService,
      import9.AuthenticationService
    ]
    ,(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const LoginComponentNgFactory:import1.ComponentFactory<import6.LoginComponent> = import1.ɵccf('login-component',import6.LoginComponent,View_LoginComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2dpcmljL1Byb2plY3RzL25nMi1ib290c3RyYXAvYXBwVUkvc3JjL2FwcC9jb21wb25lbnRzL2F1dGhlbnRpY2F0aW9uL2xvZ2luLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9Vc2Vycy9naXJpYy9Qcm9qZWN0cy9uZzItYm9vdHN0cmFwL2FwcFVJL3NyYy9hcHAvY29tcG9uZW50cy9hdXRoZW50aWNhdGlvbi9sb2dpbi5jb21wb25lbnQudHMiLCJuZzovLy9Vc2Vycy9naXJpYy9Qcm9qZWN0cy9uZzItYm9vdHN0cmFwL2FwcFVJL3NyYy9hcHAvY29tcG9uZW50cy9hdXRoZW50aWNhdGlvbi9sb2dpbi5jb21wb25lbnQuaHRtbCIsIm5nOi8vL1VzZXJzL2dpcmljL1Byb2plY3RzL25nMi1ib290c3RyYXAvYXBwVUkvc3JjL2FwcC9jb21wb25lbnRzL2F1dGhlbnRpY2F0aW9uL2xvZ2luLmNvbXBvbmVudC50cy5Mb2dpbkNvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxkaXYgY2xhc3M9XCJsb2dpbi1jb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGZsZXgtd3JhcFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgbXItNVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luLXBhbmVsIG1sLTVcIj5cbiAgICAgICAgICAgIDxsb2FkZXIgW3Nob3dMb2FkZXJdPVwic2hvd0xvYWRlclwiPjwvbG9hZGVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtNVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNj5Mb2dpbjwvaDY+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Eb24ndCBoYXZlIGFuIGFjY291bnQ/IDxhIFtyb3V0ZXJMaW5rXT1cIlsnL3NpZ251cCddXCI+U2lnbnVwPC9hPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGZvcm0gI2Y9XCJuZ0Zvcm1cIiAobmdTdWJtaXQpPVwibG9naW4oKVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxsYWJlbCBmb3I9XCJ1c2VybmFtZVwiPk1vYmlsZSBOdW1iZXIvRW1haWw8L2xhYmVsPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwidXNlcm5hbWVcIiBpZD1cInVzZXJuYW1lXCIgWyhuZ01vZGVsKV09XCJkYXRhLnBob25lbnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJNb2JpbGUgbnVtYmVyL0VtYWlsIGFkZHJlc3NcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgWyhuZ01vZGVsKV09XCJkYXRhLnBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiIFtkaXNhYmxlZF09XCJpc0xvZ2luRGlzYWJsZWQoKVwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIG10LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL3JlcXVlc3RvdHAnXVwiPkZvcmdvdCBQYXNzd29yZD88L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PiIsIjxsb2dpbi1jb21wb25lbnQ+PC9sb2dpbi1jb21wb25lbnQ+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01DQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUE2QjtNQUN6QjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXdFO01BQ3BFO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBOEI7SUFDeEI7TUFDTjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQThCO0lBQzFCO2tCQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBMkM7TUFDM0M7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFpQjtNQUNiO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBOEI7SUFDMUI7SUFBSTtJQUFVO0lBQ2Q7SUFBTztJQUF1QjtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7SUFBQTtnQkFBQTs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBRztJQUEyQjtJQUFrQjtJQUM1RTtNQUNOO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO01BQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBa0I7UUFBQTtRQUFBO01BQUE7TUFBbEI7SUFBQTtnQkFBQTtrQkFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtnQkFBQTtnQkFBQTtJQUF1QztNQUNuQztRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXdCO0lBQ29DO0lBQ3hEO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7TUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBc0U7UUFBQTtRQUFBO01BQUE7TUFBdEU7SUFBQTtnQkFBQTs7O01BQUE7UUFBQTs7TUFBQTs7SUFBQTtLQUFBO2dCQUFBO01BQUE7SUFBQTtnQkFBQTtNQUFBO1FBQUE7O01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTs7TUFBQTs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtnQkFBQTtnQkFBQTtJQUFpSjtJQUMvSTtNQUNOO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBd0I7SUFDeUI7SUFDN0M7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtNQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUEwRTtRQUFBO1FBQUE7TUFBQTtNQUExRTtJQUFBO2dCQUFBOzs7TUFBQTtRQUFBOztNQUFBOztJQUFBO0tBQUE7Z0JBQUE7TUFBQTtJQUFBO2dCQUFBO01BQUE7UUFBQTs7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBOztNQUFBOztJQUFBO0tBQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO2dCQUFBO2dCQUFBO0lBQStIO0lBQzdIO0lBQ047TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUF1RjtJQUVsRjtNQUNMO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBOEI7SUFDMUI7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO0lBQUE7Z0JBQUE7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUc7SUFBK0I7SUFBb0I7SUFDcEQ7SUFDSDtJQUNMO0lBQ0o7SUFDSjs7OztJQXhCVTtJQUFSLFVBQVEsU0FBUjtJQUl5QztJQUFILFVBQUcsU0FBSDtJQUtjO0lBQThCO0lBQXRFLFVBQXdDLFdBQThCLFVBQXRFO0lBSTRDO0lBQThCO0lBQTFFLFVBQTRDLFdBQThCLFVBQTFFO0lBTUc7SUFBSCxVQUFHLFVBQUg7OztJQWYwQjtJQUFBO0lBQUEsVUFBQSxtQkFBQTtJQUVsQztJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBLFVBQUEsc0VBQUE7SUFHUTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBLFVBQUEsNEVBQUE7SUFJQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBLFVBQUEsNEVBQUE7SUFFc0M7SUFBMUMsVUFBMEMsVUFBMUM7SUFJSTtJQUFBO0lBQUEsVUFBQSxxQkFBQTs7Ozs7SUN4QnhCO2dCQUFBOzs7SUFBQTtLQUFBOzs7SUFBQTs7OyJ9
