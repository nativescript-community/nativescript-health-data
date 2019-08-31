import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ItemsRoutingModule } from "./items-routing.module";
import { ItemsComponent } from "./items.component";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    ItemsRoutingModule
  ],
  declarations: [
    ItemsComponent,
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class ItemsModule {
}
