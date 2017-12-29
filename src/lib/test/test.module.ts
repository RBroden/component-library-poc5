import {NgModule} from '@angular/core';
import {TestComponent} from './test';
export * from './test';

@NgModule({
    declarations: [TestComponent],
    exports: [TestComponent]
})
export class TestModule {};
