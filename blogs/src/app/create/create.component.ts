import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styleUrls: ['./_create.scss']
})
export class CreateComponent implements OnInit {

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
  }

  createNewBlog(): void {
    var title: string = ((document.getElementById("title") as HTMLInputElement).value);
    var author: string = ((document.getElementById("author") as HTMLInputElement).value);
    var content: string = ((document.getElementById("content") as HTMLInputElement).value);
    
    this.blogService.createBlog(title, author, content).subscribe((res) => {
      
    })
  }
}
