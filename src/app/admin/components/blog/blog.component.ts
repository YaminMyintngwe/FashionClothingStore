import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'src/app/shared/models/table-column';
import { BLOG_TABLE_COLUMNS } from '../../constants/blog-table.column';
import { Router } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit{
  blogTableColumns : TableColumn[] = BLOG_TABLE_COLUMNS;
  blogs! : Blog[];
  constructor(private router : Router, private blogService : BlogService) {}

  ngOnInit(): void {
    this.blogService.getBlog().subscribe((blogList) => {
      console.log(blogList);
      this.blogs = (<Blog[]>blogList);
    })
  }

  addBlog(id : number) {
    this.router.navigateByUrl(`/admin/blog/${id}`);
  }
}
