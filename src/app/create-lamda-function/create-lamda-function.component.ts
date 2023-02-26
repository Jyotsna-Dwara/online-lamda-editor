import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { Subscription } from 'rxjs';

import { AddTagsDialogComponent } from '../pop-up/add-tags/add-tags-dialog.component';
import { TestExecutionDialogComponent } from '../pop-up/test-execution/test-execution-dialog.component';

import { LamdaFunctionDetailsService } from '../services/lamda-function-details.service';
import { TagsService } from '../services/tags.service';

import { URL_PATTERN } from '../constants';
import { CreateFuntionFormDetails, TagListItem, LamdaType } from '../interfaces';

@Component({
  selector: 'app-create-lamda-function',
  templateUrl: './create-lamda-function.component.html',
  styleUrls: ['./create-lamda-function.component.scss']
})
export class CreateLamdaFunctionComponent implements OnInit, OnDestroy {

  lamdaTypes!: LamdaType[];
  templateTypeData!: String[];
  tagsList: TagListItem[] = [];
  editorOptions = {theme: 'vs-dark', language: 'javascript'};
  defaultTagList! :TagListItem[];
  inputFileType! : string[];

  subscriptions$: Subscription[] = []

  createFunctionForm = new FormGroup({
    maintainenceTime: new FormControl('', [Validators.required]),
    responseBatchSize: new FormControl('', [Validators.required]),
    inputType: new FormControl('', [Validators.required]),
    inputUrl: new FormControl('', [
      Validators.required,
      Validators.pattern(URL_PATTERN),
    ]),
    type: new FormControl('', [Validators.required]),
    version: new FormControl('', [Validators.required]),
    template: new FormControl('', [Validators.required]),
    tags: new FormControl('', [Validators.required]),
    scalaEditor: new FormControl('', Validators.required),
  });

  constructor(private dialog: MatDialog, private tagsService$:TagsService, 
    private lamdaFunctionDetailsService$: LamdaFunctionDetailsService) {
      
  }

  ngOnInit(): void {
    this.getDefaultTags();
    this.getCreateLamdaFormDetails();
  }

  ngOnDestroy(): void {
    this.subscriptions$.forEach((subscription) => subscription.unsubscribe());
  }

  private getDefaultTags(): void {
    let subscription$ = this.tagsService$.getDefautTags()
    .subscribe((_defalutTags:TagListItem[]) => this.defaultTagList = _defalutTags);
    this.subscriptions$.push(subscription$);
  }

  private getCreateLamdaFormDetails(): void {
    let subscription$ = this.lamdaFunctionDetailsService$.getCreateFunctionFormDetails()
      .subscribe((_cretaFunctionFormDetails: CreateFuntionFormDetails) =>{
        this.lamdaTypes = _cretaFunctionFormDetails.lamda_types;
        this.inputFileType = _cretaFunctionFormDetails.input_file_type;
      });
    this.subscriptions$.push(subscription$);

  }

  public addTags(tags:TagListItem[]): void {
    this.tagsList = this.tagsList.concat(tags);
    this.createFunctionForm.get('tags')?.patchValue(this.tagsList.map(item => item.name)+'');
  }
  public removeTags(deleteTag: TagListItem): void {
    this.tagsList = this.tagsList.filter(
      (tagsListItem) => tagsListItem.name != deleteTag.name
    );
    this.createFunctionForm.get('tags')?.patchValue(this.tagsList.map(item => item.name)+'');
  }
  public addTagsDialog(): void {
    const dialogRef = this.dialog.open(AddTagsDialogComponent, {
      disableClose: true
    });
    dialogRef.afterClosed().subscribe((result: TagListItem[]) => {
        this.addTags(result);
    });
  }
  public testExecuteDialog(): void {
    const dialogRef = this.dialog.open(TestExecutionDialogComponent, {
      data: {
        formData: this.createFunctionForm.value,
      },
    });
    dialogRef.afterClosed().subscribe((result: any) => {});
  }
  public selectTemplateData(event: any): void {
    this.templateTypeData = event.value.list;
  }

}
