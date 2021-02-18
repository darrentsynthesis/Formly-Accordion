import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import "./accordion.component.scss";

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent extends FieldType {
  /**
   * Callback to invoke when an active tab is collapsed by clicking on the header.
   * @param $event Tabview event
   */
  onClose(event) {
    if (this.to.onClose) {
      this.to.onClose(event);
    }
  }

  /**
   * Callback to invoke when a tab gets expanded.
   * @param $event Tabview event
   */
  onOpen(event) {
    if (this.to.onOpen) {
      this.to.onOpen(event);
    }
  }

}
