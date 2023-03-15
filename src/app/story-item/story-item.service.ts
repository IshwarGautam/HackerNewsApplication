import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = 'https://hacker-news.firebaseio.com/v0';
const itemUrl = `${baseUrl}/item/`;

@Injectable({
  providedIn: 'root',
})
export class StoryItemService {
  constructor(private http: HttpClient) {}

  getTopStoryById(storyId: number) {
    return this.http.get(`${itemUrl}/${storyId}.json`);
  }
}
