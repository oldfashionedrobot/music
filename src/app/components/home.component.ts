import { Component } from '@angular/core';
import { YoutubeService } from '../services/youtube.service';

@Component({
  template: `
    <h1>Home</h1>
    <youtube-player></youtube-player>
    <br>
    <input type="text" #searchQuery />
    <button (click)="search(searchQuery.value)">Search</button>
    <p *ngFor="let result of searchResults">
      <img (click)="playVideo(result.id.videoId)" [src]="result.snippet.thumbnails.default.url" />
      {{ result.snippet.title }}
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

  playVideo(ytId: string) {
    this._youtube.playVideo(ytId);
  }
}
