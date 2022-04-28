import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic-container',
  templateUrl: './topic-container.component.html',
  styleUrls: ['./topic-container.component.css']
})
export class TopicContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  blobClick($event: Event) {
    if ($event.target instanceof SVGElement) {
      const blob = $event.target
      console.log(blob)
    }
  }
}
