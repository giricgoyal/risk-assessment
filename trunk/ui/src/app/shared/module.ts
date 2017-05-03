import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { ToasterModule } from 'angular2-toaster';
import { RouterModule } from '@angular/router';

// import { MetaDescriptionComponent } from '../meta-description.component';
// import { TitleComponent } from '../title.component';

import { HttpService, ToasterInjectableService, SessionService, AuthenticationService, AuthGuard } from './services';
import { AppLoaderComponent, NameInitialsComponent } from './components';
import { D3Service } from 'd3-ng2-service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    // ToasterModule,
    RouterModule
  ],
  declarations: [
    AppLoaderComponent,
    NameInitialsComponent
    // TitleComponent, 
    // MetaDescriptionComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpModule,
    // ToasterModule,
    RouterModule,
    AppLoaderComponent,
    NameInitialsComponent
    // TitleComponent, 
    // MetaDescriptionComponent
  ]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ HttpService, ToasterInjectableService, SessionService, AuthenticationService, AuthGuard, D3Service ]
    }
  }
}