import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { TableColumn } from '../../models/table-column';
import { KeyValue } from '@angular/common';
import { ModalService } from 'src/app/admin/services/modal.service';

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


  constructor(private modalService : ModalService) {}

  keepOrder = (a: KeyValue<string,string>, b: KeyValue<string,string>): any => {
    return a;
  }

  // onDelete(data : any) {
  //   console.log(data);
  //   this.deleteEvent.emit(data);
  // }

  onDelete(data : any) {
    this.modalService.createModal(data, this.tplContent, this.tplTitle,this.tplFooter);
  }

  deleteRow() {
    
  }
}
