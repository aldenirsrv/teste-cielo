import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.modules';
import { TemplateComponent } from './shared/components/template/template.component';
import { AgmCoreModule } from '@agm/core';

import { LoaderComponent } from './shared/components/loader/loader.component';
import { LoaderService } from './shared/components/loader/loader.service';


@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBl1rlE8v7RUlNs3iaIah7FiMpv_dBW1zw",
      libraries: ["places"]
    }),
  ],
  exports: [],
  providers: [LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
