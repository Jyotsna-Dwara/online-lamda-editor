import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MonacoEditorModule } from 'ngx-monaco-editor-v2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { AddTagsDialogComponent } from './pop-up/add-tags/add-tags-dialog.component';
import { TestExecutionDialogComponent } from './pop-up/test-execution/test-execution-dialog.component';
import { DragDropDirective } from './directives/drag-drop.directive';

import {LamdaFunctionDetailsService} from './services/lamda-function-details.service';
import {TagsService} from './services/tags.service';
import { CreateLamdaFunctionComponent } from './create-lamda-function/create-lamda-function.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTagsDialogComponent,
    TestExecutionDialogComponent,
    DragDropDirective,
    CreateLamdaFunctionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FlexLayoutModule,
    MonacoEditorModule.forRoot()
  ],
  providers: [
    LamdaFunctionDetailsService,
    TagsService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
