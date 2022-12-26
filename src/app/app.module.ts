  import { DoBootstrap, Injector, NgModule } from '@angular/core';
  import { createCustomElement } from '@angular/elements';
  import { BrowserModule } from '@angular/platform-browser';
  import {CustomReactComponentWrapperComponent} from "./CustomReactComponentWrapper";
  import { AppComponent } from './app.component';

  @NgModule({
    declarations: [
      AppComponent,
      CustomReactComponentWrapperComponent,

    ],
    imports: [
      BrowserModule
    ],
    providers: [],
    entryComponents: [
      CustomReactComponentWrapperComponent,
      // AppComponent
    ],
    bootstrap: [AppComponent]
  })


  // export class AppModule implements DoBootstrap {
  //   constructor(private injector: Injector) {
  //     const webComponent = createCustomElement(AppComponent, { injector: this.injector });
  //     customElements.define('angular-component', webComponent);
  //   }
  //
  //   ngDoBootstrap() { }
  // }
  export class AppModule {}
