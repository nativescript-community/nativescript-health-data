import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';


import { ItemsComponent } from './items/items.component';

export const COMPONENTS = [ItemsComponent];
@NgModule({
    schemas: [NO_ERRORS_SCHEMA]
})
export class InstallModule {}

export function installPlugin() {}

export const demos = [
    { name: 'Basic', path: 'basic', component: ItemsComponent }
];
