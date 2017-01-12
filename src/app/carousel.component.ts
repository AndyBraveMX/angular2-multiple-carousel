import {  Component,  Input} from '@angular/core';
import {   trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  AnimationTransitionEvent} from '@angular/core';
  import {Image} from './image.interface';
  import { Http } from '@angular/http';

  export enum Direction {UNKNOWN, NEXT, PREV}
//Compoent Decorator
@Component({
  //Name of our tag
  selector: 'css-carousel',
  animations: [],
  //Template for the tag
  template: `
  <div class="carousel">
  	<ul class="slides">
  		<li *ngFor="let image of images">
  			<h2>{{image.title}}</h2>
  			<img src="{{image.url}}" alt="">
  		</li>
  	</ul>
  	<a class="left carousel-control" (click)="prev()" *ngIf="images.length" role="button" data-slide="prev">
  		<span class="icon-prev" aria-hidden="true"></span>
  		<span *ngIf="isBS4" class="sr-only">Previous</span>
  	</a>
  	<a class="right carousel-control" (click)="next()" *ngIf="images.length" role="button" data-slide="next">
  		<span class="icon-next" aria-hidden="true"></span>
  		<span *ngIf="isBS4" class="sr-only">Next</span>
  	</a>
  </div>
  `,
  //Styles for the tag
  styles: [`
.carousel{
    overflow:hidden;
    width:100%;
}
.slides{
    list-style:none;
    position:relative;
    width:800%; /* Number of panes * 100% */
    overflow:hidden; /* Clear floats */
        /* Slide effect Animations*/
    -moz-animation:carousel 30s infinite;
    -webkit-animation:carousel 30s infinite;
    animation:carousel 30s infinite;
}
.slides > li{
     position:relative;
     float:left;
     width: 3%; /* 100 / number of panes */
     display: inline-block;
     margin-bottom: 8px;
     margin-right: 8px;
}
.carousel img{
    display:block;
    width:100%;
    max-width:100%;
}
.carousel h2{
    margin-bottom: 0;
    font-size:1em;
    padding:1.5em 0.5em 1.5em 0.5em;
    position:absolute;
    right:0px;
    bottom:0px;
    left:0px;
    text-align:center;
    color:#fff;
    background-color:rgba(0,0,0,0.75);
    text-transform: uppercase;
}
@keyframes carousel{
    0%    { left:-5%; }
    11%   { left:-5%; }
    12.5% { left:-105%; }
    23.5% { left:-105%; }
    25%   { left:-205%; }
    36%   { left:-205%; }
    37.5% { left:-305%; }
    48.5% { left:-305%; }
    50%   { left:-405%; }
    61%   { left:-405%; }
    62.5% { left:-305%; }
    73.5% { left:-305%; }
    75%   { left:-205%; }
    86%   { left:-205%; }
    87.5% { left:-105%; }
    98.5% { left:-105%; }
    100%  { left:-5%; }
}
  `]
})
//Carousel Component itself
export class CSSCarouselComponent {
  //images data to be bound to the template
  public images = IMAGES;
  private currentSlide:Image;

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
