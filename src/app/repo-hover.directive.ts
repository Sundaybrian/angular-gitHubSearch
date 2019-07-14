;
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRepoHover]'
})
export class RepoHoverDirective {

  constructor(private elem: ElementRef) {
  }

  @HostListener('mouseover') onmouseover() {
    this.repoDeco('#fb3');
  }

  @HostListener('mouseout') onmouseout() {
    this.repoDeco("#1ebba3");
  }

  private repoDeco(color: string) {
    this.elem.nativeElement.style.color = color;
  }

}
