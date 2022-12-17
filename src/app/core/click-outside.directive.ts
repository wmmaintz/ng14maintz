import { Directive, AfterViewInit, OnDestroy } from '@angular/core';
import { Inject, Output } from '@angular/core';
import { ElementRef } from "@angular/core";
import { Subscription } from 'rxjs';

import { EventEmitter } from '@angular/core';
import { NavbarComponent } from "@app/core/navbar/navbar.component";
import { filter } from "rxjs/operators";
import { fromEvent } from "rxjs";


@Directive({
  selector: '[mClickOutside]'
})
export class ClickOutsideDirective implements AfterViewInit, OnDestroy {
  @Output() clickOutside = new EventEmitter<void>();

  documentClickSubscription: Subscription | undefined;


  constructor(
    private element: ElementRef,
    @Inject(NavbarComponent) private document: Document
  ) {}

  ngAfterViewInit(): void {
    this.documentClickSubscription = fromEvent(this.document, 'click')
      .pipe(
        filter((event) => {
          return !this.isInside(event.target as HTMLElement);
        })
      )
      .subscribe(() => {
        this.clickOutside.emit();
      });
  }

  ngOnDestroy(): void {
    this.documentClickSubscription?.unsubscribe();
  }

  isInside(elementToCheck: HTMLElement): boolean {
    return (
      elementToCheck === this.element.nativeElement ||
      this.element.nativeElement.contains(elementToCheck)
    );
  }

}
