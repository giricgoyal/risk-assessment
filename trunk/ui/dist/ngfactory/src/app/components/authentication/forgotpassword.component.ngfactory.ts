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
import * as import6 from '@angular/forms';
import * as import7 from '../../../../../../src/app/components/authentication/forgotpassword.component';
const styles_ForgotPasswordComponent:any[] = [import0.styles];
export const RenderType_ForgotPasswordComponent:import1.RendererType2 = import1.ɵcrt({
  encapsulation: 0,
  styles: styles_ForgotPasswordComponent,
  data: {}
}
);
export function View_ForgotPasswordComponent_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
      (l()(),import1.ɵeld(0,(null as any),(null as any),47,'div',[[
        'class',
        'login-container'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n    '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),44,'div',[[
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
      (l()(),import1.ɵeld(0,(null as any),(null as any),36,'div',[[
        'class',
        'login-panel ml-5'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n            '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'loader',([] as any[]),(null as any),(null as any),(null as any),import2.View_AppLoaderComponent_0,import2.RenderType_AppLoaderComponent)),
    import1.ɵdid(2121728,(null as any),0,import3.AppLoaderComponent,[import1.ElementRef],(null as any),(null as any)),
    (l()(),import1.ɵted((null as any),['\n            '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),30,'div',[[
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
    (l()(),import1.ɵted((null as any),['Forgot Password'])),
    (l()(),import1.ɵted((null as any),['\n                    '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),5,'label',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['Already have an account? '])),
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
    (l()(),import1.ɵted((null as any),['Login'])),
    (l()(),import1.ɵted((null as any),['\n                '])),
    (l()(),import1.ɵted((null as any),['\n                '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),14,'form',[[
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
      if (('submit' === en)) {
        const pd_0:any = ((<any>import1.ɵnov(v,29).onSubmit($event)) !== false);
        ad = (pd_0 && ad);
      }
      if (('reset' === en)) {
        const pd_1:any = ((<any>import1.ɵnov(v,29).onReset()) !== false);
        ad = (pd_1 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import1.ɵdid(8192,(null as any),0,import6.ɵbf,([] as any[]),(null as any),(null as any)),
    import1.ɵdid(8192,(null as any),0,import6.NgForm,[
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
    ,(null as any),(null as any)),
    import1.ɵprd(1024,(null as any),import6.ControlContainer,(null as any),[import6.NgForm]),
    import1.ɵdid(8192,(null as any),0,import6.NgControlStatusGroup,[import6.ControlContainer],(null as any),(null as any)),
    (l()(),import1.ɵted((null as any),['\n                    '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),4,'div',[[
        'class',
        'form-group'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n                        '])),
    (l()(),import1.ɵted((null as any),['\n                        '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),0,'input',[
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
        'placeholder',
        'Mobile number/Email address'
      ]
      ,
      [
        'type',
        'text'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n                    '])),
    (l()(),import1.ɵted((null as any),['\n                    '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),1,'button',[[
        'class',
        'btn btn-primary btn-block'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['Request OTP'])),
    (l()(),import1.ɵted((null as any),['\n                '])),
    (l()(),import1.ɵted((null as any),['\n            '])),
    (l()(),import1.ɵted((null as any),['\n        '])),
    (l()(),import1.ɵted((null as any),['\n        '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),0,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    const currVal_2:any = ck(v,23,0,'/login');
    ck(v,22,0,currVal_2);
  },(ck,v) => {
    const currVal_0:any = import1.ɵnov(v,22).target;
    const currVal_1:any = import1.ɵnov(v,22).href;
    ck(v,21,0,currVal_0,currVal_1);
    const currVal_3:any = import1.ɵnov(v,31).ngClassUntouched;
    const currVal_4:any = import1.ɵnov(v,31).ngClassTouched;
    const currVal_5:any = import1.ɵnov(v,31).ngClassPristine;
    const currVal_6:any = import1.ɵnov(v,31).ngClassDirty;
    const currVal_7:any = import1.ɵnov(v,31).ngClassValid;
    const currVal_8:any = import1.ɵnov(v,31).ngClassInvalid;
    const currVal_9:any = import1.ɵnov(v,31).ngClassPending;
    ck(v,27,0,currVal_3,currVal_4,currVal_5,currVal_6,currVal_7,currVal_8,currVal_9);
  });
}
function View_ForgotPasswordComponent_Host_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'forgotpassword-component',([] as any[]),(null as any),(null as any),(null as any),View_ForgotPasswordComponent_0,RenderType_ForgotPasswordComponent)),
    import1.ɵdid(24576,(null as any),0,import7.ForgotPasswordComponent,([] as any[]),(null as any),(null as any))
  ]
  ,(null as any),(null as any));
}
export const ForgotPasswordComponentNgFactory:import1.ComponentFactory<import7.ForgotPasswordComponent> = import1.ɵccf('forgotpassword-component',import7.ForgotPasswordComponent,View_ForgotPasswordComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2dpcmljL1Byb2plY3RzL25nMi1ib290c3RyYXAvYXBwVUkvc3JjL2FwcC9jb21wb25lbnRzL2F1dGhlbnRpY2F0aW9uL2ZvcmdvdHBhc3N3b3JkLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9Vc2Vycy9naXJpYy9Qcm9qZWN0cy9uZzItYm9vdHN0cmFwL2FwcFVJL3NyYy9hcHAvY29tcG9uZW50cy9hdXRoZW50aWNhdGlvbi9mb3Jnb3RwYXNzd29yZC5jb21wb25lbnQudHMiLCJuZzovLy9Vc2Vycy9naXJpYy9Qcm9qZWN0cy9uZzItYm9vdHN0cmFwL2FwcFVJL3NyYy9hcHAvY29tcG9uZW50cy9hdXRoZW50aWNhdGlvbi9mb3Jnb3RwYXNzd29yZC5jb21wb25lbnQuaHRtbCIsIm5nOi8vL1VzZXJzL2dpcmljL1Byb2plY3RzL25nMi1ib290c3RyYXAvYXBwVUkvc3JjL2FwcC9jb21wb25lbnRzL2F1dGhlbnRpY2F0aW9uL2ZvcmdvdHBhc3N3b3JkLmNvbXBvbmVudC50cy5Gb3Jnb3RQYXNzd29yZENvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxkaXYgY2xhc3M9XCJsb2dpbi1jb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGZsZXgtd3JhcFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgbXItNVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luLXBhbmVsIG1sLTVcIj5cbiAgICAgICAgICAgIDxsb2FkZXI+PC9sb2FkZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC01XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg2PkZvcmdvdCBQYXNzd29yZDwvaDY+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5BbHJlYWR5IGhhdmUgYW4gYWNjb3VudD8gPGEgW3JvdXRlckxpbmtdPVwiWycvbG9naW4nXVwiPkxvZ2luPC9hPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPGxhYmVsIGZvcj1cInVzZXJuYW1lXCI+TW9iaWxlIE51bWJlci9FbWFpbDwvbGFiZWw+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIk1vYmlsZSBudW1iZXIvRW1haWwgYWRkcmVzc1wiPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIj5SZXF1ZXN0IE9UUDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PiIsIjxmb3Jnb3RwYXNzd29yZC1jb21wb25lbnQ+PC9mb3Jnb3RwYXNzd29yZC1jb21wb25lbnQ+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQ0FBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBNkI7TUFDekI7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUF3RTtNQUNwRTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQThCO0lBQ3hCO01BQ047UUFBQTtRQUFBO01BQUE7SUFBQTtJQUE4QjtJQUMxQjtnQkFBQTtJQUFpQjtNQUNqQjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQWlCO01BQ2I7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUE4QjtJQUMxQjtJQUFJO0lBQW9CO0lBQ3hCO0lBQU87SUFBeUI7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO0lBQUE7Z0JBQUE7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUc7SUFBMEI7SUFBaUI7SUFDNUU7TUFDTjtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO0lBQUE7Z0JBQUE7Z0JBQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO2dCQUFBO2dCQUFBO0lBQU07TUFDRjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXdCO0lBQ29DO0lBQ3hEO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtJQUFnRztJQUM5RjtNQUNOO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBMEM7SUFBb0I7SUFDM0Q7SUFDTDtJQUNKO0lBQ047SUFBVztJQUNUOzs7SUFaNkM7SUFBSCxVQUFHLFNBQUg7O0lBQUE7SUFBQTtJQUFBLFVBQUEsbUJBQUE7SUFFcEM7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQSxVQUFBLHFFQUFBOzs7OztJQ1hoQjtnQkFBQTs7OzsifQ==
