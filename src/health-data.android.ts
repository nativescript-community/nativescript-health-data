import { Common } from './health-data.common';

export class HealthData extends Common {
    requestPermissions() {
        this.hasPermissions = true;
    }
}
