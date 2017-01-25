import {  Component,  Input} from '@angular/core';
import {   trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  AnimationTransitionEvent, NgZone} from '@angular/core';
  import {Image} from './image.interface';
  import { Http } from '@angular/http';

  export enum Direction {UNKNOWN, NEXT, PREV}
  //Compoent Decorator
  @Component({
    //Name of our tag
    selector: 'css-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: [ './carousel.component.css' ],
    host: {
      '[style.right.px]':'0.21 * right'
    }
  })
  //Carousel Component itself
  export class CSSCarouselComponent {
    right:number=0;

    toLeft(){
      console.log("izquierda");
      this.right=this.right+200;
    }

    toRight(){
      console.log("derecha");
      this.right=this.right-200;
    }

    //images data to be bound to the template
    public images = IMAGES;

  }

  //IMAGES array implementing Image interface
  var IMAGES: Image[] = [
    { "title": "We are covered", "url": "images/covered.jpg","index": 0 },
    { "title": "Generation Gap", "url": "images/generation.jpg","index":1 },
    { "title": "Potter Me", "url": "images/potter.jpg","index":2 },
    { "title": "Pre-School Kids", "url": "images/preschool.jpg","index":3 },
    { "title": "Young Peter Cech", "url": "images/soccer.jpg","index":4 } ,
    { "title": "Young Peter Cech", "url": "images/soccer.jpg","index":5 }
  ];
