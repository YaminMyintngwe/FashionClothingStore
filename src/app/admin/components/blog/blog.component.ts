import { Component } from '@angular/core';
import { TableColumn } from 'src/app/shared/models/table-column';
import { BLOG_TABLE_COLUMNS } from '../../constants/blog-table.column';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  blogTableColumns : TableColumn[] = BLOG_TABLE_COLUMNS;
}
