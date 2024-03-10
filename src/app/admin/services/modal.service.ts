import { Injectable, TemplateRef } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

@Injectable({
    providedIn: 'root'
})
export class ModalService {

    private tplModal!: NzModalRef;
    
    constructor(private modal: NzModalService) { }

    createModal(info: any, tplContent: TemplateRef<{}>, tplTitle?: TemplateRef<{}>, tplFooter?: TemplateRef<{}>): void {
        this.tplModal = this.modal.create({
            nzTitle: tplTitle || undefined,
            nzContent: tplContent,
            nzFooter: tplFooter || null,
        });
    }

    destroy() {
        this.tplModal.destroy();
    }

}