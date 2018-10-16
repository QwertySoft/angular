import { Component, OnInit, Input, Output, EventEmitter, HostListener, HostBinding, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit, OnChanges {

  @Input() title: string;
  @Output() event: EventEmitter<string> = new EventEmitter<string>();
  @HostBinding('class.card-outline-primary') private ishovering = true;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  @HostListener('mouseover', ['$event']) onHover($event) {
    console.log($event);
    // window.alert(this.title);
  }

  ngOnInit() {
    setInterval(() => {
      this.event.emit(this.title);
    }, 1000);
  }

}
