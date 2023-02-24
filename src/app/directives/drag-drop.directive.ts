import { Directive, HostBinding, HostListener, Output, EventEmitter, ElementRef } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

export interface FileHandle {
  file: File,
  url: SafeUrl
}

@Directive({
  selector: '[appDragDrop]'
})
export class DragDropDirective {

  @Output() files: EventEmitter<File> = new EventEmitter();

  @HostBinding("style.background") private background = "#eee";

  constructor(private el: ElementRef,private sanitizer: DomSanitizer) { 
  }

  @HostListener("dragover", ["$event"]) public onDragOver(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = "#999";
  }

  @HostListener("dragleave", ["$event"]) public onDragLeave(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = "#eee";
  }

  @HostListener('drop', ['$event']) public onDrop(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#eee';
    let tempFiles = (evt.dataTransfer?.files as FileList);
    const url = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(tempFiles[0]));
    if (!tempFiles?.length) {
      return;
    }
    this.files.emit(tempFiles[0]);    
  }

}
