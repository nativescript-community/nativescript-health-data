import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
	bootstrap: [AppComponent],
	imports: [NativeScriptModule, AppRoutingModule],
	declarations: [AppComponent, ItemsComponent],
	providers: [],
	schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
