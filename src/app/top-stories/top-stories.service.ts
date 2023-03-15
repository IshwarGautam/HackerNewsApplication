import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'https://hacker-news.firebaseio.com/v0';
const topStoriesUrl = `${baseUrl}/topstories.json`;

@Injectable({
  providedIn: 'root',
})
export class TopStoriesService {
  constructor(private http: HttpClient) {}

  getTopStories() {
    return this.http.get(topStoriesUrl);
  }
}
