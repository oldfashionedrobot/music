import { Component, AfterViewInit } from '@angular/core';
import { YoutubeService } from '../services/youtube.service';
import YouTubePlayer from 'youtube-player';

@Component({
  selector: 'youtube-player',
  template: `
    <div id="player"></div>
    <div *ngIf="playerActive" class="player-controls">
      <button (click)="toggleMute()">
        Toggle Mute
      </button>
    </div>
  `
})

export class YoutubePlayerComponent implements AfterViewInit {
  player: any;
  playerActive: boolean = false;

  constructor(private _youtube: YoutubeService) {}

  ngAfterViewInit() {
    this.player = YouTubePlayer('player', {
      height: '390',
      width: '640',
      playerVars: {
        controls: 0
      }
    });

    this._youtube.ytVideoSubject.subscribe((ytVideoId: string) => {
      this.player.loadVideoById(ytVideoId);
      this.player.playVideo().then(() => {
        this.playerActive = true;
      });
    })
  }

  toggleMute() {
    this.player.isMuted().then(val => {
      if(val) {
        this.player.unMute()
      } else {
        this.player.mute();
      }
    })
  }
}
