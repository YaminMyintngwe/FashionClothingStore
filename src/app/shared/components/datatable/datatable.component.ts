import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { TableColumn } from '../../models/table-column';
import { KeyValue } from '@angular/common';
import { ModalService } from 'src/app/admin/services/modal.service';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent  {
  @Input() tableColumns : TableColumn[] = [];
  @Input() tableRows : any;
  @Output() deleteEvent = new EventEmitter<any>();
  @ViewChild('tplContent')
  tplContent!: TemplateRef<{}>;
  
  @ViewChild('tplTitle')
  tplTitle!: TemplateRef<{}>;
  
  @ViewChild('tplFooter')
  tplFooter!: TemplateRef<{}>;


  constructor(private modalService : ModalService, private modal : NzModalService) {}

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
}
