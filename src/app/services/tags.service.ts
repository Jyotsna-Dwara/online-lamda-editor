import { Injectable } from '@angular/core';
import {TagListItem} from '../interfaces';
import{ DEFAULT_TAG_LIST, TAGS_LIST } from '../mock-data';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor() { }

  getDefautTags(): Observable<TagListItem[]> {
    return of(DEFAULT_TAG_LIST);
  }
  getTags(): Observable<TagListItem[]> {
    return of(TAGS_LIST);
  }
}
