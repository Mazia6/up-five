import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpFiveRoutingModule } from './up-five-routing/up-five-routing.module';
import { UpFiveComponent } from './up-five.component';
import { InitPageComponent, AboutPageComponent, ContactPageComponent } from './pages';
import { HeaderComponent, FooterComponent } from './components';

@NgModule({
  declarations: [
    UpFiveComponent,
    InitPageComponent,
    AboutPageComponent,
    ContactPageComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    UpFiveRoutingModule
  ],
  exports: [
    UpFiveComponent
  ]
})
export class UpFiveModule { }
