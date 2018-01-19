import { NgModule, LOCALE_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/en';

import { WindowRef } from './tracker/window.service';
import {
    CTestSharedLibsModule,
    JhiAlertComponent,
    JhiAlertErrorComponent
} from './';

@NgModule({
    imports: [
        CTestSharedLibsModule
    ],
    declarations: [
        JhiAlertComponent,
        JhiAlertErrorComponent
    ],
    providers: [
        WindowRef,
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'en'
        },
    ],
    exports: [
        CTestSharedLibsModule,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ]
})
export class CTestSharedCommonModule {
    constructor() {
        registerLocaleData(locale);
    }
}
