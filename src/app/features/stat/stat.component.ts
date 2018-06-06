import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ResizeGraphService } from './visualization/resize-graph.service';

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
    this.initGraphWidth();

    // todo redimensionner les 2 blocs dynamiquement
    // fromEvent de rxjs peut être utile
    // il prend 2 paramètres: l'élément du DOM observé, et l'événement observé
    // il renvoit un observable de ses événements
  }

  private initGraphWidth(): void {
    const blocksWidth = this.getBlocksWidth(this.separator.nativeElement.getBoundingClientRect().left + 2);
    this.resizeGraphService.setWidth(blocksWidth.rightWidth);
  }

  private resizeFromEvent(e: MouseEvent): void {
    const newWidths = this.getBlocksWidth(e.x);
    this.resizeGraphService.setWidth(newWidths.rightWidth);
    this.leftBlock.nativeElement.setAttribute('style', `width:${newWidths.leftWidth}px`);
    this.rightBlock.nativeElement.setAttribute('style', `width:${newWidths.rightWidth}px`);
  }

  private getBlocksWidth(mouseX: number): {leftWidth, rightWidth} {
    const rectContainer = this.elementRef.nativeElement.getBoundingClientRect();
    const marginAndPaddingSeparator = 7;
    const leftWidth = mouseX - rectContainer.left - marginAndPaddingSeparator;
    const rightWidth = rectContainer.width + rectContainer.left - mouseX - marginAndPaddingSeparator;
    return {leftWidth, rightWidth};
  }

}
