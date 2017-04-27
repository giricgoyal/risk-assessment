/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from './component.scss.shim.ngstyle';
import * as import1 from '@angular/core';
import * as import2 from '@angular/router';
import * as import3 from '@angular/common';
import * as import4 from '../../../../../../src/app/components/sidebar/component';
const styles_AppSidebarComponent:any[] = [import0.styles];
export const RenderType_AppSidebarComponent:import1.RendererType2 = import1.ɵcrt({
  encapsulation: 0,
  styles: styles_AppSidebarComponent,
  data: {}
}
);
export function View_AppSidebarComponent_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
      (l()(),import1.ɵeld(0,(null as any),(null as any),30,'div',[[
        'class',
        'sidebar-container'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n    '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),27,'ul',[[
        'class',
        'nav navbar-nav nav-right'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n        '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),3,'li',[[
        'class',
        'text-center'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n            '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),0,'img',[
      [
        'alt',
        'apnaDoctor'
      ]
      ,
      [
        'class',
        'img-fluid'
      ]
      ,
      [
        'height',
        '200px'
      ]
      ,
      [
        'src',
        'assets/images/logo.png'
      ]
      ,
      [
        'width',
        '200px'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n        '])),
    (l()(),import1.ɵted((null as any),['\n        '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),19,'li',[[
        'class',
        'nav-item'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n            '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),16,'a',[
      [
        'class',
        'nav-link'
      ]
      ,
      [
        'routerLinkActive',
        'active'
      ]

    ]
    ,[
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
        const pd_0:any = ((<any>import1.ɵnov(v,12).onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
      import1.ɵdid(335872,[[
        2,
        4
      ]
    ],0,import2.RouterLinkWithHref,[
      import2.Router,
      import2.ActivatedRoute,
      import3.LocationStrategy
    ]
      ,{routerLink: [
        0,
        'routerLink'
      ]
    },(null as any)),
    import1.ɵpad(1),
    import1.ɵdid(860160,(null as any),2,import2.RouterLinkActive,[
      import2.Router,
      import1.ElementRef,
      import1.Renderer,
      import1.ChangeDetectorRef
    ]
      ,{routerLinkActive: [
        0,
        'routerLinkActive'
      ]
    },(null as any)),
    import1.ɵqud(301989888,1,{links: 1}),
    import1.ɵqud(301989888,2,{linksWithHrefs: 1}),
    (l()(),import1.ɵted((null as any),['\n                '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),5,'span',[[
        'class',
        'nav-item-icon fa-stack fa-lg'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n                    '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),0,'i',[[
        'class',
        'fa fa-circle fa-stack-2x'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n                    '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),0,'i',[[
        'class',
        'fa fa-info fa-stack-1x fa-inverse'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n                '])),
    (l()(),import1.ɵted((null as any),['\n                '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),1,'span',[[
        'class',
        'nav-item-text'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['About'])),
    (l()(),import1.ɵted((null as any),['\n            '])),
    (l()(),import1.ɵted((null as any),['\n        '])),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    const currVal_2:any = ck(v,13,0,'/app/about');
    ck(v,12,0,currVal_2);
    const currVal_3:any = 'active';
    ck(v,14,0,currVal_3);
  },(ck,v) => {
    const currVal_0:any = import1.ɵnov(v,12).target;
    const currVal_1:any = import1.ɵnov(v,12).href;
    ck(v,11,0,currVal_0,currVal_1);
  });
}
function View_AppSidebarComponent_Host_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'sidebar',([] as any[]),(null as any),(null as any),(null as any),View_AppSidebarComponent_0,RenderType_AppSidebarComponent)),
    import1.ɵdid(24576,(null as any),0,import4.AppSidebarComponent,([] as any[]),(null as any),(null as any))
  ]
  ,(null as any),(null as any));
}
export const AppSidebarComponentNgFactory:import1.ComponentFactory<import4.AppSidebarComponent> = import1.ɵccf('sidebar',import4.AppSidebarComponent,View_AppSidebarComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2dpcmljL1Byb2plY3RzL25nMi1ib290c3RyYXAvYXBwVUkvc3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXIvY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL1VzZXJzL2dpcmljL1Byb2plY3RzL25nMi1ib290c3RyYXAvYXBwVUkvc3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXIvY29tcG9uZW50LnRzIiwibmc6Ly8vVXNlcnMvZ2lyaWMvUHJvamVjdHMvbmcyLWJvb3RzdHJhcC9hcHBVSS9zcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9jb21wb25lbnQuaHRtbCIsIm5nOi8vL1VzZXJzL2dpcmljL1Byb2plY3RzL25nMi1ib290c3RyYXAvYXBwVUkvc3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXIvY29tcG9uZW50LnRzLkFwcFNpZGViYXJDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8ZGl2IGNsYXNzPVwic2lkZWJhci1jb250YWluZXJcIj5cbiAgICA8dWwgY2xhc3M9XCJuYXYgbmF2YmFyLW5hdiBuYXYtcmlnaHRcIj5cbiAgICAgICAgPGxpIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9sb2dvLnBuZ1wiIGhlaWdodD1cIjIwMHB4XCIgd2lkdGg9XCIyMDBweFwiIGNsYXNzPVwiaW1nLWZsdWlkXCIgYWx0PVwiYXBuYURvY3RvclwiIC8+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiIFtyb3V0ZXJMaW5rXT1cIlsnL2FwcC9hYm91dCddXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXYtaXRlbS1pY29uIGZhLXN0YWNrIGZhLWxnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2lyY2xlIGZhLXN0YWNrLTJ4XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWluZm8gZmEtc3RhY2stMXggZmEtaW52ZXJzZVwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXYtaXRlbS10ZXh0XCI+QWJvdXQ8L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgPC91bD5cbjwvZGl2PiIsIjxzaWRlYmFyPjwvc2lkZWJhcj4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01DQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUErQjtNQUMzQjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXFDO01BQ2pDO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBd0I7SUFDcEI7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO0lBQW9HO0lBQ25HO01BQ0w7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFxQjtJQUNqQjtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO0lBQUE7a0JBQUE7UUFBQTtRQUFBO01BQUE7SUFBQTs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBOEM7Z0JBQTlDOzs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBQTtnQkFBQTtJQUE0RTtNQUN4RTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQTJDO01BQ3ZDO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBd0M7TUFDeEM7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFpRDtJQUM5QztNQUNQO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBNEI7SUFBWTtJQUN4QztJQUNIO0lBQ0o7OztJQVJpRDtJQUE5QyxVQUE4QyxTQUE5QztJQUFvQjtJQUFwQixVQUFvQixTQUFwQjs7SUFBQTtJQUFBO0lBQUEsVUFBQSxtQkFBQTs7Ozs7SUNOWjtnQkFBQTs7OzsifQ==
