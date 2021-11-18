import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[tarefaConcluido]'
})
export class TarefaConcluidoDirective implements OnInit {

  @Input() tarefaConcluido!: boolean;

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit(): void {
    if (this.tarefaConcluido) {
      this.el.nativeElement.style.textDecoration = "line-through";
    }
  }

}
