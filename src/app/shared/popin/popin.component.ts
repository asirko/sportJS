import {Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'sp-popin',
  templateUrl: './popin.component.html',
  styleUrls: ['./popin.component.scss']
})
export class PopinComponent implements OnInit {

  @ViewChild('popin') popin: ElementRef;
  @Output() exit = new EventEmitter<void>();

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) { }

  ngOnInit() {
    this.listenExitPopin();
  }

  listenExitPopin(): void {
    this.renderer.listen(this.popin.nativeElement, 'click', e => e.stopPropagation());
    this.renderer.listen(this.elementRef.nativeElement, 'click', () => this.exit.next());
    this.renderer.listen(document, 'keyup.Escape', () => this.exit.next());
  }
}
