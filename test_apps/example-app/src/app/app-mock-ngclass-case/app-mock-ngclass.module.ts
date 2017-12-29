import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppMockNgClassComponent} from './app-mock-ngclass';

@NgModule({
    imports: [CommonModule],
    declarations: [AppMockNgClassComponent],
    exports: [AppMockNgClassComponent]
})
export class AppMockNgClassModule {};
