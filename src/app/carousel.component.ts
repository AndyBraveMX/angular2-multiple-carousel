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
      '[style.height.px]':'0.9 * height',
      '[style.right.px]':'0.21 * right'
    }
  })
  //Carousel Component itself
  export class CSSCarouselComponent {

    cont = 10;
    @Input() iLike = false;
    @Input() px = 50;
    width:number=200;
    height: number;
    right:number=200;

    onClick(){
      this.iLike = !this.iLike;
      this.cont += this.iLike ? 1 : -1;
      this.px +=50;
      this.right=this.right+20;
      this.height=this.height+20;
      console.log(this.width);
    }

    //images data to be bound to the template
    public images = IMAGES;
    private currentSlide:Image;

    public wobbleState: string;

    triggerAnimation() {
      this.wobbleState = "active";
    }

    constructor(public zone: NgZone) {
      this.height = window.innerHeight;
      this.width = window.innerWidth;
    }

    reset() {
      this.zone.run(() => {
        this.wobbleState = "inactive";
      });
    }

    public next():any {
      let newIndex = (this.getCurrentIndex() + 1) % this.images.length;
      // if (newIndex === 0 && this.noWrap) {
      //   this.pause();
      //   return;
      // }
      return this.select(this.getSlideByIndex(newIndex), Direction.NEXT);
    }

    private getCurrentIndex():number {
      return !this.currentSlide ? 0 : this.currentSlide.index;
    }


    private getSlideByIndex(index:number):any {
      let len = this.images.length;
      for (let i = 0; i < len; ++i) {
        if (this.images[i].index === index) {
          return this.images[i];
        }
      }
      return void 0;
    }

    public select(nextSlide:Image, direction:Direction = Direction.UNKNOWN):void {
      let nextIndex = nextSlide.index;
      if (direction === Direction.UNKNOWN) {
        direction = nextIndex > this.getCurrentIndex()
        ? Direction.NEXT
        : Direction.PREV;
      }

      // Prevent this user-triggered transition from occurring if there is
      // already one in progress
      if (nextSlide && nextSlide !== this.currentSlide) {
        this.goNext(nextSlide, direction);
      }
    }

    private goNext(slide:Image, direction:Direction):void {
      console.log(slide.title);
      // if (this.destroyed) {
      //   return;
      // }
      //
      // slide.direction = direction;
      // slide.active = true;
      //
      // if (this.currentSlide) {
      //   this.currentSlide.direction = direction;
      //   this.currentSlide.active = false;
      // }

      this.currentSlide = slide;

      // every time you change slides, reset the timer
      //this.restartTimer();
    }

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
