import { AfterContentInit, AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { TableColumn } from '../../models/table-column';
import { DatePipe, KeyValue } from '@angular/common';
import { ModalService } from 'src/app/admin/services/modal.service';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnChanges {
  @Input() tableColumns : TableColumn[] = [];
  @Input() tableRows : any;
  @Output() deleteEvent = new EventEmitter<any>();
  tplFooter!: TemplateRef<{}>;


  constructor(private modalService : ModalService, private modal : NzModalService, private datePipe : DatePipe) {}

  ngOnChanges(): void {
    console.log(this.tableRows);
    this.tableRows.map((row: any) => {
      row.date = row?.date?.seconds;
      return row;
    })
  }

  keepOrder = (a: KeyValue<string,string>, b: KeyValue<string,string>): any => {
    return a;
  }

  // onDelete(data : any) {
  //   console.log(data);
  //   this.deleteEvent.emit(data);
  // }

  onDelete(id : any) {
    //this.modalService.createModal(data, this.tplContent, this.tplTitle,this.tplFooter);
    this.modal.confirm({
      nzTitle: 'Confirmation',
      nzContent: 'Are you sure want to delete?',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.deleteEvent.emit(id),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }

  getSecFromDate(date : any) : number {
    console.log(date)
    return date.seconds;
  }
}
