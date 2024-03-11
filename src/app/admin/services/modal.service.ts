import { Injectable, TemplateRef } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

@Injectable({
    providedIn: 'root'
})
export class ModalService {

    private tplModal!: NzModalRef;
    
    constructor(private modal: NzModalService) { }

    createModal(data: any, tplContent: TemplateRef<{}>, tplTitle?: TemplateRef<{}>, tplFooter?: TemplateRef<{}>): void {
        this.tplModal = this.modal.create({
            nzTitle: tplTitle,
            nzContent: tplContent,
            nzFooter: tplFooter,
        });
    }

    destroy() {
        this.tplModal.destroy();
    }

}