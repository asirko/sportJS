import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ResizeGraphService } from './visualization/resize-graph.service';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { mergeMap, takeUntil } from 'rxjs/operators';

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

    const mouseDown = fromEvent(this.separator.nativeElement, 'mousedown');
    const mouseMove = fromEvent(document, 'mousemove');
    const mouseUp = fromEvent(document, 'mouseup');
    const listenMoveUntilUp = mouseMove.pipe(takeUntil(mouseUp));

    mouseDown.pipe(mergeMap(() => listenMoveUntilUp))
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
