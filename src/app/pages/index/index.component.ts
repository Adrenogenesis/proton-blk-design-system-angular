import { Component, OnInit, OnDestroy } from "@angular/core";
import noUiSlider from "nouislider";

import {
  bounceInUpOnEnterAnimation
}from '../../../../lib/';

@Component({
  selector: "app-index",
  templateUrl: "index.component.html",
  animations: [
    bounceInUpOnEnterAnimation({ anchor: 'enter1' }),
  ]
})
export class IndexComponent implements OnInit, OnDestroy {

  options = [
		{
			label: 'Attention Seekers',
			animations: [
				'bounce',
				'flash',
				'pulse',
				'rubberBand',
				'shake',
				'swing',
				'tada',
				'wobble',
				'jello',
				'heartBeat',
				'headShake'
			]
		},
		{
			label: 'Bouncing Entrances',
			animations: [ 'bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp' ]
		},
		{
			label: 'Bouncing Exits',
			animations: [ 'bounceOut', 'bounceOutDown', 'bounceOutLeft', 'bounceOutRight', 'bounceOutUp' ]
		},
		{
			label: 'Fading Entrances',
			animations: [
				'fadeIn',
				'fadeInDown',
				'fadeInDownBig',
				'fadeInLeft',
				'fadeInLeftBig',
				'fadeInRight',
				'fadeInRightBig',
				'fadeInUp',
				'fadeInUpBig'
			]
		},
		{
			label: 'Fading Exits',
			animations: [
				'fadeOut',
				'fadeOutDown',
				'fadeOutDownBig',
				'fadeOutLeft',
				'fadeOutLeftBig',
				'fadeOutRight',
				'fadeOutRightBig',
				'fadeOutUp',
				'fadeOutUpBig'
			]
		},
		{
			label: 'Flippers',
			animations: [ 'flip', 'flipInX', 'flipInY', 'flipOutX', 'flipOutY' ]
		},
		{
			label: 'Lightspeed',
			animations: [ 'lightSpeedIn', 'lightSpeedOut' ]
		},
		{
			label: 'Rotating Entrances',
			animations: [ 'rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight' ]
		},
		{
			label: 'Rotating Exits',
			animations: [
				'rotateOut',
				'rotateOutDownLeft',
				'rotateOutDownRight',
				'rotateOutUpLeft',
				'rotateOutUpRight'
			]
		},
		{
			label: 'Sliding Entrances',
			animations: [ 'slideInUp', 'slideInDown', 'slideInLeft', 'slideInRight' ]
		},
		{
			label: 'Sliding Exits',
			animations: [ 'slideOutUp', 'slideOutDown', 'slideOutLeft', 'slideOutRight' ]
		},
		{
			label: 'Zoom Entrances',
			animations: [ 'zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp' ]
		},
		{
			label: 'Zoom Exits',
			animations: [ 'zoomOut', 'zoomOutDown', 'zoomOutLeft', 'zoomOutRight', 'zoomOutUp' ]
		},
		{
			label: 'Specials',
			animations: [ 'hinge', 'jackInTheBox', 'rollIn', 'rollOut' ]
		},
		{
			label: 'Other',
			animations: [ 'collapse', 'rotate', 'rotate90', 'rotate720', 'hueRotate' ]
		}
	];
	animation = 'rubberBand';
	animationState = false;
	animationWithState = false;
	hueBtnState = false;

	animate() {
		this.animationState = false;
		setTimeout(() => {
			this.animationState = true;
			this.animationWithState = !this.animationWithState;
		}, 1);
	}

  isCollapsed = true;
  focus;
  focus1;
  focus2;
  date = new Date();
  pagination = 3;
  pagination1 = 1;
  constructor() {}
  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("index-page");

    var slider = document.getElementById("sliderRegular");

    noUiSlider.create(slider, {
      start: 40,
      connect: false,
      range: {
        min: 0,
        max: 100
      }
    });

    var slider2 = document.getElementById("sliderDouble");

    noUiSlider.create(slider2, {
      start: [20, 60],
      connect: true,
      range: {
        min: 0,
        max: 100
      }
    });
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("index-page");
  }
}
