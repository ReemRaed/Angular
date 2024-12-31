import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appForloop]'
})
export class ForloopDirective {

  private _start: number = 0;
  private _end: number = 0;

  constructor(private template: TemplateRef<any>, private view: ViewContainerRef) { }

  @Input() set initialization(value: number) {
    this._start = value;
    this.render();
  }
  @Input() set Iteration(value: number) {
    this._end = value;
    this.render();
  }
  @Input() set display(condition: boolean) {
    if (condition) {
      this.render();
    }
    else {
      this.view.clear();
    }

  }

  private render() {
    if (this._start < this._end) {
      this.view.clear();
      for (let i = this._start; i <= this._end; i++) {
        this.view.createEmbeddedView(this.template, { $implicit: i });
      }
    }

  }

}
