import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/mergeMap';
import {ResizeGraphService} from "./visualization/resize-graph.service";

@Component({
  selector: 'sp-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss'],
  providers: [ResizeGraphService]
})
export class StatComponent implements OnInit {

  @ViewChild('leftBlock') leftBlock: ElementRef;
  @ViewChild('separator') separator: ElementRef;
  @ViewChild('rightBlock') rightBlock: ElementRef;

  constructor(private elementRef: ElementRef,
              private resizeGraphService: ResizeGraphService) { }

  ngOnInit() {

    const mouseDown = Observable.fromEvent(this.separator.nativeElement, 'mousedown');
    const mouseMove = Observable.fromEvent(document, 'mousemove');
    const mouseUp = Observable.fromEvent(document, 'mouseup');

    mouseDown.mergeMap(() => mouseMove.takeUntil(mouseUp))
      .subscribe((e: MouseEvent) => {
        const newWidths = this.getBlocksWidth(e.x);
        this.resizeGraphService.setWidth(newWidths.rightWidth);
        this.leftBlock.nativeElement.setAttribute('style', `width:${newWidths.leftWidth}px`);
        this.rightBlock.nativeElement.setAttribute('style', `width:${newWidths.rightWidth}px`);
      });

    const blocksWidth = this.getBlocksWidth(this.separator.nativeElement.getBoundingClientRect().left + 2);
    this.resizeGraphService.setWidth(blocksWidth.rightWidth);
  }

  private getBlocksWidth(mouseX: number): {leftWidth, rightWidth} {
    const rectContainer = this.elementRef.nativeElement.getBoundingClientRect();
    const marginAndPaddingSeparator = 7;
    const leftWidth = mouseX - rectContainer.left - marginAndPaddingSeparator;
    const rightWidth = rectContainer.width + rectContainer.left - mouseX - marginAndPaddingSeparator;
    return {leftWidth, rightWidth};
  }

}
