import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from './blog';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private webService: WebRequestService) { }

  /** Sends info to backend to create a new Blog. */
  createBlog(title: string, author: string, content: string) {
    return this.webService.post('create', {title, author, content});
  }

  /** Gets all the blogs. */
  getAllBlogs(): Observable<Blog> {
    return this.webService.get('blogs');
  }

  /** Gets  */
  getBlogs(title: string, author: string, content: string) {
    return this.webService.post('blogs', {title, author, content});
  }
}
