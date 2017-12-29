import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MockNgClassComponent} from './mock-ngclass';

@NgModule({
    imports: [CommonModule],
    declarations: [MockNgClassComponent],
    exports: [MockNgClassComponent]
})
export class MockNgClassModule {};
