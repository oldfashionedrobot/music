import { Injectable } from '@angular/core';

const YT_KEY = 'AIzaSyBUWDQHGabStJb5lO-tUFb6W1LIFARpVpM';
const YT_API_URL = `https://www.googleapis.com/youtube/v3/search?key=${YT_KEY}&part=snippet&type=video&topicId=/m/04rlf&`;

@Injectable()

export class YoutubeService {
  search(query: string): Promise<any> {
    return fetch(`${YT_API_URL}q=${query}&maxResults=10`)
      .then(resp => resp.json())
      .then(json => json['items']);
  }
}
