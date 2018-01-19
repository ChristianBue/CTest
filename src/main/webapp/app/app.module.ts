import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { CTestSharedModule, UserRouteAccessService } from './shared';
import { CTestAppRoutingModule} from './app-routing.module';
import { CTestHomeModule } from './home/home.module';
import { CTestAdminModule } from './admin/admin.module';
import { CTestAccountModule } from './account/account.module';
import { CTestEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        CTestAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        CTestSharedModule,
        CTestHomeModule,
        CTestAdminModule,
        CTestAccountModule,
        CTestEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class CTestAppModule {}
