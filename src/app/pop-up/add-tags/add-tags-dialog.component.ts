import { Component, ElementRef, ViewChild, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatDialogRef } from '@angular/material/dialog';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { TagsService } from '../../services/tags.service';

interface TagListItem {
  name: string;
}
@Component({
  selector: 'app-add-tags-dialog',
  templateUrl: './add-tags-dialog.component.html',
  styleUrls: ['./add-tags-dialog.component.scss'],
})
export class AddTagsDialogComponent implements OnInit, OnDestroy {
  tagsList: TagListItem[] = [];
  selectedTags: TagListItem[] = [];
  tags = new FormControl('');
  filteredOptions!: Observable<TagListItem[]>;
  subscriptions$: Subscription[] = []

  @ViewChild('tagsInput') tagsInput!: ElementRef<HTMLInputElement>;

  constructor(public dialogRef: MatDialogRef<AddTagsDialogComponent>, private tagsService$: TagsService) {}

  ngOnInit() {
    this.getTags();
    this.filteredOptions = this.tags.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  ngOnDestroy(): void {
    this.subscriptions$.forEach((subscription) => subscription.unsubscribe());
  }

  private _filter(value: string): TagListItem[] {
    const filterValue = value.toLowerCase();
    return this.tagsList.filter((tagsItem) =>
      tagsItem.name.toLowerCase().includes(filterValue)
    );
  }
  private getTags(): void {
    let subscription$ = this.tagsService$.getTags().subscribe((_tagItem:TagListItem[]) => this.tagsList=_tagItem);
    this.subscriptions$.push(subscription$)   
  }
  public selected(event: MatAutocompleteSelectedEvent): void {
    this.selectedTags.push(event.option.value);
    this.tagsInput.nativeElement.value = '';
    this.tags.setValue(null);
  }
  public cancel(): void {
    this.dialogRef.close([]);
  }
  public remove(deleteTag: TagListItem): void {
    this.selectedTags = this.selectedTags.filter(
      (tagsListItem) => tagsListItem.name != deleteTag.name
    );
  }
}
