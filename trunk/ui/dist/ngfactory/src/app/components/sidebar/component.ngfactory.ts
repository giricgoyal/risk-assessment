/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from './component.scss.shim.ngstyle';
import * as import1 from '@angular/core';
import * as import2 from '@angular/forms';
import * as import3 from '../../../../../../src/app/components/sidebar/component';
import * as import4 from '@angular/common';
const styles_AppSidebarComponent:any[] = [import0.styles];
export const RenderType_AppSidebarComponent:import1.RendererType2 = import1.ɵcrt({
  encapsulation: 0,
  styles: styles_AppSidebarComponent,
  data: {}
}
);
function View_AppSidebarComponent_1(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),3,'option',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    import1.ɵdid(73728,(null as any),0,import2.NgSelectOption,[
      import1.ElementRef,
      import1.Renderer,
      [
        2,
        import2.SelectControlValueAccessor
      ]

    ]
      ,{value: [
        0,
        'value'
      ]
    },(null as any)),
    import1.ɵdid(73728,(null as any),0,import2.ɵq,[
      import1.ElementRef,
      import1.Renderer,
      [
        8,
        (null as any)
      ]

    ]
      ,{value: [
        0,
        'value'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),[
      '',
      ''
    ]
    ))
  ]
  ,(ck,v) => {
    const currVal_0:any = import1.ɵinlineInterpolate(1,'',v.context.$implicit.key,'');
    ck(v,1,0,currVal_0);
    const currVal_1:any = import1.ɵinlineInterpolate(1,'',v.context.$implicit.key,'');
    ck(v,2,0,currVal_1);
  },(ck,v) => {
    const currVal_2:any = v.context.$implicit.value;
    ck(v,3,0,currVal_2);
  });
}
function View_AppSidebarComponent_2(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),3,'option',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    import1.ɵdid(73728,(null as any),0,import2.NgSelectOption,[
      import1.ElementRef,
      import1.Renderer,
      [
        2,
        import2.SelectControlValueAccessor
      ]

    ]
      ,{value: [
        0,
        'value'
      ]
    },(null as any)),
    import1.ɵdid(73728,(null as any),0,import2.ɵq,[
      import1.ElementRef,
      import1.Renderer,
      [
        8,
        (null as any)
      ]

    ]
      ,{value: [
        0,
        'value'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),[
      '',
      ''
    ]
    ))
  ]
  ,(ck,v) => {
    const currVal_0:any = import1.ɵinlineInterpolate(1,'',v.context.$implicit.key,'');
    ck(v,1,0,currVal_0);
    const currVal_1:any = import1.ɵinlineInterpolate(1,'',v.context.$implicit.key,'');
    ck(v,2,0,currVal_1);
  },(ck,v) => {
    const currVal_2:any = v.context.$implicit.value;
    ck(v,3,0,currVal_2);
  });
}
export function View_AppSidebarComponent_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
      (l()(),import1.ɵeld(0,(null as any),(null as any),100,'div',[[
        'class',
        'sidebar-container'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n    '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),32,'div',[[
        'class',
        'form-group'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n        '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'label',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['Risk'])),
    (l()(),import1.ɵted((null as any),['\n        '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),26,'select',[[
        'class',
        'form-control'
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
        'ngModelChange'
      ]
      ,
      [
        (null as any),
        'change'
      ]
      ,
      [
        (null as any),
        'blur'
      ]

    ]
    ,(v,en,$event) => {
      var ad:boolean = true;
      var co:import3.AppSidebarComponent = v.component;
      if (('change' === en)) {
        const pd_0:any = ((<any>import1.ɵnov(v,8).onChange($event.target.value)) !== false);
        ad = (pd_0 && ad);
      }
      if (('blur' === en)) {
        const pd_1:any = ((<any>import1.ɵnov(v,8).onTouched()) !== false);
        ad = (pd_1 && ad);
      }
      if (('ngModelChange' === en)) {
        const pd_2:any = ((<any>(co.risk = $event)) !== false);
        ad = (pd_2 && ad);
      }
      if (('ngModelChange' === en)) {
        const pd_3:any = ((<any>co.onRiskChange()) !== false);
        ad = (pd_3 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import1.ɵdid(8192,(null as any),0,import2.SelectControlValueAccessor,[
      import1.Renderer,
      import1.ElementRef
    ]
    ,(null as any),(null as any)),
    import1.ɵprd(512,(null as any),import2.NG_VALUE_ACCESSOR,(p0_0:any) => {
      return [p0_0];
    },[import2.SelectControlValueAccessor]),
    import1.ɵdid(335872,(null as any),0,import2.NgModel,[
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
        8,
        (null as any)
      ]
      ,
      [
        2,
        import2.NG_VALUE_ACCESSOR
      ]

    ]
      ,{model: [
        0,
        'model'
      ]
    },{update: 'ngModelChange'}),
    import1.ɵprd(1024,(null as any),import2.NgControl,(null as any),[import2.NgModel]),
    import1.ɵdid(8192,(null as any),0,import2.NgControlStatus,[import2.NgControl],(null as any),(null as any)),
    (l()(),import1.ɵted((null as any),['\n            '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),3,'option',[[
        'value',
        'risk_class'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import1.ɵdid(73728,(null as any),0,import2.NgSelectOption,[
      import1.ElementRef,
      import1.Renderer,
      [
        2,
        import2.SelectControlValueAccessor
      ]

    ]
      ,{value: [
        0,
        'value'
      ]
    },(null as any)),
    import1.ɵdid(73728,(null as any),0,import2.ɵq,[
      import1.ElementRef,
      import1.Renderer,
      [
        8,
        (null as any)
      ]

    ]
      ,{value: [
        0,
        'value'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['Risk Class'])),
    (l()(),import1.ɵted((null as any),['\n            '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),3,'option',[[
        'value',
        'risk_type'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import1.ɵdid(73728,(null as any),0,import2.NgSelectOption,[
      import1.ElementRef,
      import1.Renderer,
      [
        2,
        import2.SelectControlValueAccessor
      ]

    ]
      ,{value: [
        0,
        'value'
      ]
    },(null as any)),
    import1.ɵdid(73728,(null as any),0,import2.ɵq,[
      import1.ElementRef,
      import1.Renderer,
      [
        8,
        (null as any)
      ]

    ]
      ,{value: [
        0,
        'value'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['Risk Type'])),
    (l()(),import1.ɵted((null as any),['\n            '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),3,'option',[[
        'value',
        'risk_group'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import1.ɵdid(73728,(null as any),0,import2.NgSelectOption,[
      import1.ElementRef,
      import1.Renderer,
      [
        2,
        import2.SelectControlValueAccessor
      ]

    ]
      ,{value: [
        0,
        'value'
      ]
    },(null as any)),
    import1.ɵdid(73728,(null as any),0,import2.ɵq,[
      import1.ElementRef,
      import1.Renderer,
      [
        8,
        (null as any)
      ]

    ]
      ,{value: [
        0,
        'value'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['Risk Group'])),
    (l()(),import1.ɵted((null as any),['\n            '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),3,'option',[[
        'value',
        'threat'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import1.ɵdid(73728,(null as any),0,import2.NgSelectOption,[
      import1.ElementRef,
      import1.Renderer,
      [
        2,
        import2.SelectControlValueAccessor
      ]

    ]
      ,{value: [
        0,
        'value'
      ]
    },(null as any)),
    import1.ɵdid(73728,(null as any),0,import2.ɵq,[
      import1.ElementRef,
      import1.Renderer,
      [
        8,
        (null as any)
      ]

    ]
      ,{value: [
        0,
        'value'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['Threat'])),
    (l()(),import1.ɵted((null as any),['\n        '])),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵted((null as any),['\n    '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),12,'div',[[
        'class',
        'form-group'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n        '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),9,'select',[[
        'class',
        'form-control'
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
        'ngModelChange'
      ]
      ,
      [
        (null as any),
        'change'
      ]
      ,
      [
        (null as any),
        'blur'
      ]

    ]
    ,(v,en,$event) => {
      var ad:boolean = true;
      var co:import3.AppSidebarComponent = v.component;
      if (('change' === en)) {
        const pd_0:any = ((<any>import1.ɵnov(v,39).onChange($event.target.value)) !== false);
        ad = (pd_0 && ad);
      }
      if (('blur' === en)) {
        const pd_1:any = ((<any>import1.ɵnov(v,39).onTouched()) !== false);
        ad = (pd_1 && ad);
      }
      if (('ngModelChange' === en)) {
        const pd_2:any = ((<any>(co.subRisk = $event)) !== false);
        ad = (pd_2 && ad);
      }
      if (('ngModelChange' === en)) {
        const pd_3:any = ((<any>co.onSubRiskChange()) !== false);
        ad = (pd_3 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import1.ɵdid(8192,(null as any),0,import2.SelectControlValueAccessor,[
      import1.Renderer,
      import1.ElementRef
    ]
    ,(null as any),(null as any)),
    import1.ɵprd(512,(null as any),import2.NG_VALUE_ACCESSOR,(p0_0:any) => {
      return [p0_0];
    },[import2.SelectControlValueAccessor]),
    import1.ɵdid(335872,(null as any),0,import2.NgModel,[
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
        8,
        (null as any)
      ]
      ,
      [
        2,
        import2.NG_VALUE_ACCESSOR
      ]

    ]
      ,{model: [
        0,
        'model'
      ]
    },{update: 'ngModelChange'}),
    import1.ɵprd(1024,(null as any),import2.NgControl,(null as any),[import2.NgModel]),
    import1.ɵdid(8192,(null as any),0,import2.NgControlStatus,[import2.NgControl],(null as any),(null as any)),
    (l()(),import1.ɵted((null as any),['\n            '])),
    (l()(),import1.ɵand(8388608,(null as any),(null as any),1,(null as any),View_AppSidebarComponent_1)),
    import1.ɵdid(401408,(null as any),0,import4.NgForOf,[
      import1.ViewContainerRef,
      import1.TemplateRef,
      import1.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['\n        '])),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵted((null as any),['\n    '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),27,'div',[[
        'class',
        'form-group'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n        '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'label',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['Metric'])),
    (l()(),import1.ɵted((null as any),['\n        '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),21,'select',[[
        'class',
        'form-control'
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
        'ngModelChange'
      ]
      ,
      [
        (null as any),
        'change'
      ]
      ,
      [
        (null as any),
        'blur'
      ]

    ]
    ,(v,en,$event) => {
      var ad:boolean = true;
      var co:import3.AppSidebarComponent = v.component;
      if (('change' === en)) {
        const pd_0:any = ((<any>import1.ɵnov(v,56).onChange($event.target.value)) !== false);
        ad = (pd_0 && ad);
      }
      if (('blur' === en)) {
        const pd_1:any = ((<any>import1.ɵnov(v,56).onTouched()) !== false);
        ad = (pd_1 && ad);
      }
      if (('ngModelChange' === en)) {
        const pd_2:any = ((<any>(co.metric = $event)) !== false);
        ad = (pd_2 && ad);
      }
      if (('ngModelChange' === en)) {
        const pd_3:any = ((<any>co.onMetricChange()) !== false);
        ad = (pd_3 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import1.ɵdid(8192,(null as any),0,import2.SelectControlValueAccessor,[
      import1.Renderer,
      import1.ElementRef
    ]
    ,(null as any),(null as any)),
    import1.ɵprd(512,(null as any),import2.NG_VALUE_ACCESSOR,(p0_0:any) => {
      return [p0_0];
    },[import2.SelectControlValueAccessor]),
    import1.ɵdid(335872,(null as any),0,import2.NgModel,[
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
        8,
        (null as any)
      ]
      ,
      [
        2,
        import2.NG_VALUE_ACCESSOR
      ]

    ]
      ,{model: [
        0,
        'model'
      ]
    },{update: 'ngModelChange'}),
    import1.ɵprd(1024,(null as any),import2.NgControl,(null as any),[import2.NgModel]),
    import1.ɵdid(8192,(null as any),0,import2.NgControlStatus,[import2.NgControl],(null as any),(null as any)),
    (l()(),import1.ɵted((null as any),['\n            '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),3,'option',[[
        'value',
        'fatalities'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import1.ɵdid(73728,(null as any),0,import2.NgSelectOption,[
      import1.ElementRef,
      import1.Renderer,
      [
        2,
        import2.SelectControlValueAccessor
      ]

    ]
      ,{value: [
        0,
        'value'
      ]
    },(null as any)),
    import1.ɵdid(73728,(null as any),0,import2.ɵq,[
      import1.ElementRef,
      import1.Renderer,
      [
        8,
        (null as any)
      ]

    ]
      ,{value: [
        0,
        'value'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['Fatalities'])),
    (l()(),import1.ɵted((null as any),['\n            '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),3,'option',[[
        'value',
        'economic_loss'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import1.ɵdid(73728,(null as any),0,import2.NgSelectOption,[
      import1.ElementRef,
      import1.Renderer,
      [
        2,
        import2.SelectControlValueAccessor
      ]

    ]
      ,{value: [
        0,
        'value'
      ]
    },(null as any)),
    import1.ɵdid(73728,(null as any),0,import2.ɵq,[
      import1.ElementRef,
      import1.Renderer,
      [
        8,
        (null as any)
      ]

    ]
      ,{value: [
        0,
        'value'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['Economic Loss'])),
    (l()(),import1.ɵted((null as any),['\n            '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),3,'option',[[
        'value',
        'affected_people'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import1.ɵdid(73728,(null as any),0,import2.NgSelectOption,[
      import1.ElementRef,
      import1.Renderer,
      [
        2,
        import2.SelectControlValueAccessor
      ]

    ]
      ,{value: [
        0,
        'value'
      ]
    },(null as any)),
    import1.ɵdid(73728,(null as any),0,import2.ɵq,[
      import1.ElementRef,
      import1.Renderer,
      [
        8,
        (null as any)
      ]

    ]
      ,{value: [
        0,
        'value'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['Affected People'])),
    (l()(),import1.ɵted((null as any),['\n        '])),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵted((null as any),['\n    '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),20,'div',[[
        'class',
        'form-group'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n        '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'label',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['Magnitude'])),
    (l()(),import1.ɵted((null as any),['\n        '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),14,'select',[[
        'class',
        'form-control'
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
        'ngModelChange'
      ]
      ,
      [
        (null as any),
        'change'
      ]
      ,
      [
        (null as any),
        'blur'
      ]

    ]
    ,(v,en,$event) => {
      var ad:boolean = true;
      var co:import3.AppSidebarComponent = v.component;
      if (('change' === en)) {
        const pd_0:any = ((<any>import1.ɵnov(v,85).onChange($event.target.value)) !== false);
        ad = (pd_0 && ad);
      }
      if (('blur' === en)) {
        const pd_1:any = ((<any>import1.ɵnov(v,85).onTouched()) !== false);
        ad = (pd_1 && ad);
      }
      if (('ngModelChange' === en)) {
        const pd_2:any = ((<any>(co.magnitude = $event)) !== false);
        ad = (pd_2 && ad);
      }
      if (('ngModelChange' === en)) {
        const pd_3:any = ((<any>co.omMagnitudeChange()) !== false);
        ad = (pd_3 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import1.ɵdid(8192,(null as any),0,import2.SelectControlValueAccessor,[
      import1.Renderer,
      import1.ElementRef
    ]
    ,(null as any),(null as any)),
    import1.ɵprd(512,(null as any),import2.NG_VALUE_ACCESSOR,(p0_0:any) => {
      return [p0_0];
    },[import2.SelectControlValueAccessor]),
    import1.ɵdid(335872,(null as any),0,import2.NgModel,[
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
        8,
        (null as any)
      ]
      ,
      [
        2,
        import2.NG_VALUE_ACCESSOR
      ]

    ]
      ,{model: [
        0,
        'model'
      ]
    },{update: 'ngModelChange'}),
    import1.ɵprd(1024,(null as any),import2.NgControl,(null as any),[import2.NgModel]),
    import1.ɵdid(8192,(null as any),0,import2.NgControlStatus,[import2.NgControl],(null as any),(null as any)),
    (l()(),import1.ɵted((null as any),['\n            '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),3,'option',[[
        'value',
        ''
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import1.ɵdid(73728,(null as any),0,import2.NgSelectOption,[
      import1.ElementRef,
      import1.Renderer,
      [
        2,
        import2.SelectControlValueAccessor
      ]

    ]
      ,{value: [
        0,
        'value'
      ]
    },(null as any)),
    import1.ɵdid(73728,(null as any),0,import2.ɵq,[
      import1.ElementRef,
      import1.Renderer,
      [
        8,
        (null as any)
      ]

    ]
      ,{value: [
        0,
        'value'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['None'])),
    (l()(),import1.ɵted((null as any),['\n            '])),
    (l()(),import1.ɵand(8388608,(null as any),(null as any),1,(null as any),View_AppSidebarComponent_2)),
    import1.ɵdid(401408,(null as any),0,import4.NgForOf,[
      import1.ViewContainerRef,
      import1.TemplateRef,
      import1.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['\n        '])),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    var co:import3.AppSidebarComponent = v.component;
    const currVal_7:any = co.risk;
    ck(v,10,0,currVal_7);
    const currVal_8:any = 'risk_class';
    ck(v,15,0,currVal_8);
    const currVal_9:any = 'risk_class';
    ck(v,16,0,currVal_9);
    const currVal_10:any = 'risk_type';
    ck(v,20,0,currVal_10);
    const currVal_11:any = 'risk_type';
    ck(v,21,0,currVal_11);
    const currVal_12:any = 'risk_group';
    ck(v,25,0,currVal_12);
    const currVal_13:any = 'risk_group';
    ck(v,26,0,currVal_13);
    const currVal_14:any = 'threat';
    ck(v,30,0,currVal_14);
    const currVal_15:any = 'threat';
    ck(v,31,0,currVal_15);
    const currVal_23:any = co.subRisk;
    ck(v,41,0,currVal_23);
    const currVal_24:any = co.subRisks;
    ck(v,46,0,currVal_24);
    const currVal_32:any = co.metric;
    ck(v,58,0,currVal_32);
    const currVal_33:any = 'fatalities';
    ck(v,63,0,currVal_33);
    const currVal_34:any = 'fatalities';
    ck(v,64,0,currVal_34);
    const currVal_35:any = 'economic_loss';
    ck(v,68,0,currVal_35);
    const currVal_36:any = 'economic_loss';
    ck(v,69,0,currVal_36);
    const currVal_37:any = 'affected_people';
    ck(v,73,0,currVal_37);
    const currVal_38:any = 'affected_people';
    ck(v,74,0,currVal_38);
    const currVal_46:any = co.magnitude;
    ck(v,87,0,currVal_46);
    const currVal_47:any = '';
    ck(v,92,0,currVal_47);
    const currVal_48:any = '';
    ck(v,93,0,currVal_48);
    const currVal_49:any = co.magnitudeList;
    ck(v,97,0,currVal_49);
  },(ck,v) => {
    const currVal_0:any = import1.ɵnov(v,12).ngClassUntouched;
    const currVal_1:any = import1.ɵnov(v,12).ngClassTouched;
    const currVal_2:any = import1.ɵnov(v,12).ngClassPristine;
    const currVal_3:any = import1.ɵnov(v,12).ngClassDirty;
    const currVal_4:any = import1.ɵnov(v,12).ngClassValid;
    const currVal_5:any = import1.ɵnov(v,12).ngClassInvalid;
    const currVal_6:any = import1.ɵnov(v,12).ngClassPending;
    ck(v,7,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6);
    const currVal_16:any = import1.ɵnov(v,43).ngClassUntouched;
    const currVal_17:any = import1.ɵnov(v,43).ngClassTouched;
    const currVal_18:any = import1.ɵnov(v,43).ngClassPristine;
    const currVal_19:any = import1.ɵnov(v,43).ngClassDirty;
    const currVal_20:any = import1.ɵnov(v,43).ngClassValid;
    const currVal_21:any = import1.ɵnov(v,43).ngClassInvalid;
    const currVal_22:any = import1.ɵnov(v,43).ngClassPending;
    ck(v,38,0,currVal_16,currVal_17,currVal_18,currVal_19,currVal_20,currVal_21,currVal_22);
    const currVal_25:any = import1.ɵnov(v,60).ngClassUntouched;
    const currVal_26:any = import1.ɵnov(v,60).ngClassTouched;
    const currVal_27:any = import1.ɵnov(v,60).ngClassPristine;
    const currVal_28:any = import1.ɵnov(v,60).ngClassDirty;
    const currVal_29:any = import1.ɵnov(v,60).ngClassValid;
    const currVal_30:any = import1.ɵnov(v,60).ngClassInvalid;
    const currVal_31:any = import1.ɵnov(v,60).ngClassPending;
    ck(v,55,0,currVal_25,currVal_26,currVal_27,currVal_28,currVal_29,currVal_30,currVal_31);
    const currVal_39:any = import1.ɵnov(v,89).ngClassUntouched;
    const currVal_40:any = import1.ɵnov(v,89).ngClassTouched;
    const currVal_41:any = import1.ɵnov(v,89).ngClassPristine;
    const currVal_42:any = import1.ɵnov(v,89).ngClassDirty;
    const currVal_43:any = import1.ɵnov(v,89).ngClassValid;
    const currVal_44:any = import1.ɵnov(v,89).ngClassInvalid;
    const currVal_45:any = import1.ɵnov(v,89).ngClassPending;
    ck(v,84,0,currVal_39,currVal_40,currVal_41,currVal_42,currVal_43,currVal_44,currVal_45);
  });
}
function View_AppSidebarComponent_Host_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'sidebar',([] as any[]),(null as any),(null as any),(null as any),View_AppSidebarComponent_0,RenderType_AppSidebarComponent)),
    import1.ɵdid(2121728,(null as any),0,import3.AppSidebarComponent,([] as any[]),(null as any),(null as any))
  ]
  ,(null as any),(null as any));
}
export const AppSidebarComponentNgFactory:import1.ComponentFactory<import3.AppSidebarComponent> = import1.ɵccf('sidebar',import3.AppSidebarComponent,View_AppSidebarComponent_Host_0,{magnitudeList: 'magnitudeList'},{
  riskSubriskUpdate: 'riskSubriskUpdate',
  metricUpdate: 'metricUpdate',
  magnitudeUpdate: 'magnitudeUpdate'
}
,([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2dpcmljL1Byb2plY3RzL3Jpc2stYXNzZXNzbWVudC90cnVuay91aS9zcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vVXNlcnMvZ2lyaWMvUHJvamVjdHMvcmlzay1hc3Nlc3NtZW50L3RydW5rL3VpL3NyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL2NvbXBvbmVudC50cyIsIm5nOi8vL1VzZXJzL2dpcmljL1Byb2plY3RzL3Jpc2stYXNzZXNzbWVudC90cnVuay91aS9zcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9jb21wb25lbnQuaHRtbCIsIm5nOi8vL1VzZXJzL2dpcmljL1Byb2plY3RzL3Jpc2stYXNzZXNzbWVudC90cnVuay91aS9zcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9jb21wb25lbnQudHMuQXBwU2lkZWJhckNvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxkaXYgY2xhc3M9XCJzaWRlYmFyLWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxsYWJlbD5SaXNrPC9sYWJlbD5cbiAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiIFsobmdNb2RlbCldPVwicmlza1wiIChuZ01vZGVsQ2hhbmdlKT1cIm9uUmlza0NoYW5nZSgpXCI+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicmlza19jbGFzc1wiPlJpc2sgQ2xhc3M8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJyaXNrX3R5cGVcIj5SaXNrIFR5cGU8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJyaXNrX2dyb3VwXCI+UmlzayBHcm91cDwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInRocmVhdFwiPlRocmVhdDwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgWyhuZ01vZGVsKV09XCJzdWJSaXNrXCIgKG5nTW9kZWxDaGFuZ2UpPVwib25TdWJSaXNrQ2hhbmdlKClcIj5cbiAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBzdWJSaXNrczsgbGV0IGkgPSBpbmRleFwiIHZhbHVlPVwie3tvcHRpb24ua2V5fX1cIj57e29wdGlvbi52YWx1ZX19PC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxsYWJlbD5NZXRyaWM8L2xhYmVsPlxuICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgWyhuZ01vZGVsKV09XCJtZXRyaWNcIiAobmdNb2RlbENoYW5nZSk9XCJvbk1ldHJpY0NoYW5nZSgpXCI+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZmF0YWxpdGllc1wiPkZhdGFsaXRpZXM8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJlY29ub21pY19sb3NzXCI+RWNvbm9taWMgTG9zczwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImFmZmVjdGVkX3Blb3BsZVwiPkFmZmVjdGVkIFBlb3BsZTwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWw+TWFnbml0dWRlPC9sYWJlbD5cbiAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiIFsobmdNb2RlbCldPVwibWFnbml0dWRlXCIgKG5nTW9kZWxDaGFuZ2UpPVwib21NYWduaXR1ZGVDaGFuZ2UoKVwiPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPk5vbmU8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBtYWduaXR1ZGVMaXN0OyBsZXQgaSA9IGluZGV4XCIgdmFsdWU9XCJ7e29wdGlvbi5rZXl9fVwiPnt7b3B0aW9uLnZhbHVlfX08L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgPC9kaXY+XG48L2Rpdj4iLCI8c2lkZWJhcj48L3NpZGViYXI+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ1lZO2dCQUFBOzs7TUFBQTtRQUFBOztNQUFBOztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBQTs7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQThFO01BQUE7TUFBQTtJQUFBO0lBQUE7OztJQUF2QjtJQUF2RCxTQUF1RCxTQUF2RDtJQUF1RDtJQUF2RCxTQUF1RCxTQUF2RDs7SUFBOEU7SUFBQTs7Ozs7SUFlOUU7Z0JBQUE7OztNQUFBO1FBQUE7O01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFBOzs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBbUY7TUFBQTtNQUFBO0lBQUE7SUFBQTs7O0lBQXZCO0lBQTVELFNBQTRELFNBQTVEO0lBQTREO0lBQTVELFNBQTRELFNBQTVEOztJQUFtRjtJQUFBOzs7OztNQTNCL0Y7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUErQjtNQUMzQjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXdCO0lBQ3BCO0lBQU87SUFBWTtNQUNuQjtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtNQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQTZCO1FBQUE7UUFBQTtNQUFBO01BQW1CO1FBQUE7UUFBQTtNQUFBO01BQWhEO0lBQUE7Z0JBQUE7OztJQUFBO0tBQUE7Z0JBQUE7TUFBQTtJQUFBO2dCQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTs7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7Z0JBQUE7SUFBaUY7TUFDN0U7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBQTs7O01BQUE7UUFBQTs7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7OztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUEyQjtJQUFtQjtNQUM5QztRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFBOzs7TUFBQTtRQUFBOztNQUFBOztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBQTs7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQTBCO0lBQWtCO01BQzVDO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7OztNQUFBO1FBQUE7O01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFBOzs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBMkI7SUFBbUI7TUFDOUM7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBQTs7O01BQUE7UUFBQTs7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7OztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUF1QjtJQUFlO0lBQ2pDO0lBQ1A7TUFDTjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXdCO01BQ3BCO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO01BQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBNkI7UUFBQTtRQUFBO01BQUE7TUFBc0I7UUFBQTtRQUFBO01BQUE7TUFBbkQ7SUFBQTtnQkFBQTs7O0lBQUE7S0FBQTtnQkFBQTtNQUFBO0lBQUE7Z0JBQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBOztNQUFBOztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBQTtnQkFBQTtJQUF1RjtJQUNuRjtnQkFBQTs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUF1RztJQUNsRztJQUNQO01BQ047UUFBQTtRQUFBO01BQUE7SUFBQTtJQUF3QjtJQUNwQjtJQUFPO0lBQWM7TUFDckI7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7TUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUE2QjtRQUFBO1FBQUE7TUFBQTtNQUFxQjtRQUFBO1FBQUE7TUFBQTtNQUFsRDtJQUFBO2dCQUFBOzs7SUFBQTtLQUFBO2dCQUFBO01BQUE7SUFBQTtnQkFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7O01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFBO2dCQUFBO0lBQXFGO01BQ2pGO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7OztNQUFBO1FBQUE7O01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFBOzs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBMkI7SUFBbUI7TUFDOUM7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBQTs7O01BQUE7UUFBQTs7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7OztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUE4QjtJQUFzQjtNQUNwRDtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFBOzs7TUFBQTtRQUFBOztNQUFBOztJQUFBO09BQUE7UUFBQTtRQUFBO01B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
