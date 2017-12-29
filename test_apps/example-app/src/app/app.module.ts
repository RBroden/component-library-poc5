import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { 
  TestModule, 
  MockNgClassModule
} from '../../../../dist';

import { AppComponent } from './app.component';
import { AppMockNgClassModule } from './app-mock-ngclass-case/app-mock-ngclass.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    TestModule,
    MockNgClassModule,
    AppMockNgClassModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
