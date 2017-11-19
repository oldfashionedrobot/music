import { Component } from '@angular/core';
import { YoutubeService } from '../services/youtube.service';

@Component({
  template: `
    <h1>Home</h1>
    <input type="text" #searchQuery />
    <button (click)="search(searchQuery.value)">Search</button>
    <p *ngFor="let result of searchResults">
      <img [src]="result.snippet.thumbnails.default.url" />
      {{ result.snippet.title }}
      {{ result.id.videoId }}
    </p>
  `
})

export class HomeComponent {
  searchResults: any[] = [];

  constructor(private _youtube: YoutubeService) {}

  search(query: string) {
    this._youtube.search(query).then(items => {
      this.searchResults = items;
    })
  }
}
