import { Component, OnDestroy, OnInit } from '@angular/core';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import { ResizeGraphService } from '../resize-graph.service';
import { RecordStoreService } from '../../record-store.service';
import { Subscription } from 'rxjs/Subscription';
import { combineLatest } from 'rxjs/observable/combineLatest';

@Component({
  selector: 'sp-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit, OnDestroy {

  private margin = {top: 20, right: 20, bottom: 20, left: 30};
  private width = 400;
  private height = 500;
  private x: any;
  private y: any;
  private svg: any;
  private line: d3Shape.Line<[number, number]>;

  sub: Subscription;

  constructor(private resizeGraphService: ResizeGraphService,
              private recordStoreService: RecordStoreService) {}

  ngOnInit() {
    this.sub = combineLatest(
      this.resizeGraphService.getWidth$(),
      this.recordStoreService.getSelectedRecord$(),
    ).subscribe(([width, record]) => {
      this.width = width;
      if (record) {
        this.drawGraph(record.heartBeats);
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private drawGraph(data) {
    this.initSvg();
    this.initAxis(data);
    this.drawAxis();
    this.drawLine(data);
  }

  private initSvg() {
    if (this.svg) {
      this.svg.remove();
    }
    this.svg = d3.select('.svg-container')
      .append('svg')
      .attr('width', '' + this.width)
      .attr('height', '' + this.height);
  }

  private initAxis(data) {
    this.x = d3Scale.scaleLinear().range([0, this.width - this.margin.left - this.margin.right]);
    this.y = d3Scale.scaleLinear().range([this.height - this.margin.top - this.margin.bottom, 0]);
    this.x.domain(d3Array.extent(data, (d: any) => d.x ));
    this.y.domain(d3Array.extent(data, (d: any) => d.y ));
  }

  private drawAxis() {

    this.svg.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', `translate(${this.margin.left},${this.height - this.margin.top - this.margin.bottom})`)
      .call(d3Axis.axisBottom(this.x));

    this.svg.append('g')
      .attr('class', 'axis axis--y')
      .attr('transform', `translate(${this.margin.left}, 0)`)
      .call(d3Axis.axisLeft(this.y))
      .append('text')
      .attr('fill', '#000')
      .attr('class', 'axis-title')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '.71em')
      .style('text-anchor', 'end')
      .text('bpm');
  }

  private drawLine(data) {
    this.line = d3Shape.line()
      .x( (d: any) => this.x(d.x) )
      .y( (d: any) => this.y(d.y) );

    this.svg.append('path')
      .attr('transform', `translate(${this.margin.left}, 0)`)
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-linejoin', 'round')
      .attr('stroke-linecap', 'round')
      .attr('stroke-width', 1.5)
      .attr('d', this.line)
    ;
  }

}
