jQuery.HSlider
==============

A jQuery One-Page Slider plugin

* Create an photo-first, full-page web slider has never been so easy
* All animation is powered by CSS3 with GPU acceleration
* Only for mobile or modern desktop browser

## Live Demo

<img alt="Mobile Weather-App Demo" src="pic/screenshot-mo.jpeg" width="300"  />
#### [Mobile Weather-App Demo →](http://huangxuan.me/jquery.HSlider/demo-weather-app/)

![Desktop Gallery Demo](/pic/screenshot-pc.jpg)
#### [Desktop Gallery Demo →](http://huangxuan.me/jquery.HSlider/)



## Document

#### Get Started

import styles and scripts

```html
<link rel="stylesheet" type="text/css" href="reset.css">  <!--recommended-->
<link rel="stylesheet" type="text/css" href="hslider.css">  <!--essential-->
<link rel="stylesheet" type="text/css" href="default-style.css"> <!--optional-->
<script type="text/javascript" src="jquery-2.0.3.min.js"></script>
<script type="text/javascript" src="jquery.HSlider.js"></script>
```

HTML Structure:
```html
<div class="wrap">
	<div class="slider">
		<section>
			<article>
				<h1> Title </h1>
			<article>
			<img src="yourimage.jpg">
		</section>
		<section>
			<!-- same -->
		</section>
	</div>
</div>
```

Init HSlider!
```javascript
// deathly simple!
$(".slider").HSlider();		
```

#### HSlider Options

use options:

```javascript
$(".slider").HSlider({
	easing: "ease-in-out",
	animationTime: 400,
	pagination: false
});
```

#### `easing`

- @type `String`  
- @default `ease`  
- The easing function used in page transition

#### `animationTime`

- @type `Number`
- @default `1300`  
- The duration used for page transition

#### `pagination`

- @tyle `Boolean`  
- @default `true`  
- Auto generate pagination or not
