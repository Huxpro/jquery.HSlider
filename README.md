jQuery.HSlider
==============

A Full-Page Scrolling, Touch-Friendly jQuery Slider

* Create an Full-Page Scrolling web slider has never been so easy
* All animations are powered by CSS3 with GPU acceleration
* Page Index now powered by URL hash for URL Sharing
* For mobile or modern desktop browser



## Live Demo

<img alt="Mobile Weather-App Demo" src="pic/screenshot-mo.jpeg" width="300"  />
#### [Mobile Weather-App Demo →](http://huangxuan.me/jquery.HSlider/demo-weather-app/)

![Desktop Gallery Demo](/pic/screenshot-pc.jpg)
#### [Desktop Gallery Demo →](http://huangxuan.me/jquery.HSlider/)



## Document
#### Get Started

import styles and scripts

```html
<link rel="stylesheet" type="text/css" href="style/reset.css">  	<!--recommended-->
<link rel="stylesheet" type="text/css" href="style/hslider.css">  	  <!--essential-->
<link rel="stylesheet" type="text/css" href="style/default-style.css"> <!--optional-->
<script type="text/javascript" src="jquery-2.0.3.min.js"></script>
<script type="text/javascript" src="jquery.HSlider.min.js"></script>
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

##### `easing {String}`

- The easing function used in page transition. Default value is `ease`

##### `animationTime {Number}`

- The duration used for page transition. Default value is `1300`

##### `pagination {Boolean}`

- Auto generate pagination or not. Default value is `true`
