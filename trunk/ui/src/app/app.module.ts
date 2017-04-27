import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TitleComponent } from './title.component';
import { MetaDescriptionComponent } from './meta-description.component';

export { AppComponent, TitleComponent, MetaDescriptionComponent };
import { SharedModule } from './shared';
import { AppRouteModule } from './shared/config/app.routes';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    MetaDescriptionComponent
  ],
  imports: [
    SharedModule.forRoot(),
    NgbModule.forRoot(),
    BrowserModule.withServerTransition({ appId: 'cli-universal-demo' }),
    AppRouteModule
    // RouterModule.forRoot([
    //   { path: 'asd', loadChildren: './home/home.module#HomeModule' },
    //   { path: 'about', loadChildren: './about/about.module#AboutModule' },
    //   // { path: '**', redirectTo: '', pathMatch: 'full' },
    //   {
    //       path: '', 
    //       loadChildren: './components/authentication/index#AuthenticationModule'
    //   }
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent, TitleComponent, MetaDescriptionComponent]
})
export class AppModule { }
