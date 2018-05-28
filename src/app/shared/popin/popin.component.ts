import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'sp-popin',
  templateUrl: './popin.component.html',
  styleUrls: ['./popin.component.scss']
})
export class PopinComponent {

  @Output() exit = new EventEmitter<void>();

  /**
   * If user use escape => close the popin
   * The event is captured on document directly because the focus might be anywhere on the document
   * @param {KeyboardEvent} event
   */
  @HostListener('document:keydown', ['$event'])
  escapePressed(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.exit.emit();
    }
  }

  /**
   * Capture the click on the overlay only
   * WARNING: the overlay is a parent node of the white div then all click on the div must be stopped (event.stopPropagation)
   */
  @HostListener('click')
  clickOutside() {
    this.exit.emit();
  }
}
