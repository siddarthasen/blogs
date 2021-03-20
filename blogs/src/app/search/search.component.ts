import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog';
import { BlogService } from '../blog.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./_search.scss']
})
export class SearchComponent implements OnInit {

  show: boolean = false;
  searchResults: string[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    
  }
  first: boolean = false;
  blogs:any;

  /** Submits AUTHOR, TITLE, CONTENTS fields to API */
  onSubmit(): void {
    this.show = !this.show;

    this.searchResults[0] = ((document.getElementById("title") as HTMLInputElement).value);
    this.searchResults[1] = ((document.getElementById("author") as HTMLInputElement).value);
    this.searchResults[2] = ((document.getElementById("contents") as HTMLInputElement).value);
    
    this.blogService.getBlogs(this.searchResults[0], this.searchResults[1], this.searchResults[2])
      .subscribe(data => {
        this.blogs = data;
    })
  
  }

}
