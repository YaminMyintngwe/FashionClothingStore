import { Component, Input } from '@angular/core';
import { TableColumn } from '../../models/table-column';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent {
  @Input() tableColumns : TableColumn[] = [];
  @Input() tableRows : any;


  keepOrder = (a: KeyValue<string,string>, b: KeyValue<string,string>): any => {
    return a;
  }
}
