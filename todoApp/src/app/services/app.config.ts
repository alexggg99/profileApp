import { AppConfig } from './app-config';
export { AppConfig } from './app-config';

import { InjectionToken } from "@angular/core";

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export const END_POINT_CONFIG: AppConfig = {
    serverResource: 'http://localhost:8181',
    serverTodo: 'http://localhost:9842'
}
