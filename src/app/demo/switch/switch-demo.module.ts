import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SwitchDemoComponent } from './switch-demo.component';
import { RebirthNGModule } from '../../exports/rebirth-ng.module';

@NgModule({
  imports: [CommonModule, RebirthNGModule, FormsModule],
  exports: [SwitchDemoComponent],
  declarations: [SwitchDemoComponent],
  providers: [],
  entryComponents: [SwitchDemoComponent]
})
export class SwitchDemoModule {
}
