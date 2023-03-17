import { Injectable } from '@angular/core';
import { itemUrl } from '../app.constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StoryItemService {
  constructor(private http: HttpClient) {}

  getTopStoryById(storyId: number) {
    return this.http.get(`${itemUrl}/${storyId}.json`);
  }
}
