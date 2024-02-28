import { Component } from '@angular/core';
import { TableColumn } from 'src/app/shared/models/table-column';
import { BLOG_TABLE_COLUMNS } from '../../constants/blog-table.column';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  blogTableColumns : TableColumn[] = BLOG_TABLE_COLUMNS;
  constructor(private router : Router) {}

  addBlog(id : number) {
    this.router.navigateByUrl(`/admin/blog/${id}`);
  }
}
