import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import {
  ModalDemoModule,
  DialogDemoModule,
  AlertBoxDemoModule,
  BadgeDemoModule,
  PaginationDemoModule,
  PagerDemoModule,
  PanelDemoModule,
  AccordionDemoModule,
  ActionButtonDemoModule,
  RatingDemoModule,
  TabsDemoModule,
  TooltipDemoModule,
  PopoverDemoModule,
  DatePickerDemoModule,
  BreadcrumbsDemoModule,
  ProgressBarDemoModule,
  SelectButtonDemoModule,
  OverlayDemoModule,
  CarouselDemoModule,
  SwitchDemoModule,
  MenuBarDemoModule,
  AutoCompleteDemoModule,
  FlowStepDemoModule,
  InfiniteScrollDemoModule,
  DataTableDemoModule
} from './demo';
import { RebirthUIModule } from './exports';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    SharedModule.forRoot(),
    RebirthUIModule.forRoot(),
    ModalDemoModule,
    DialogDemoModule,
    PagerDemoModule,
    PaginationDemoModule,
    AlertBoxDemoModule,
    BadgeDemoModule,
    PanelDemoModule,
    AccordionDemoModule,
    ActionButtonDemoModule,
    RatingDemoModule,
    TabsDemoModule,
    TooltipDemoModule,
    PopoverDemoModule,
    DatePickerDemoModule,
    BreadcrumbsDemoModule,
    ProgressBarDemoModule,
    SelectButtonDemoModule,
    OverlayDemoModule,
    CarouselDemoModule,
    SwitchDemoModule,
    MenuBarDemoModule,
    AutoCompleteDemoModule,
    FlowStepDemoModule,
    DataTableDemoModule,
    InfiniteScrollDemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}


