jQuery.HSlider
==============

A jQuery One-Page Slider plugin

#### [View Live Demo →](http://huangxuan.me/jquery.HSlider/)

* Create an photo-first, fullpage web slider has never been so easy
* All animation is powered by CSS3 with GPU Acceleration
* Only for modern broswer


## Document

#### Get Started

import styles and scripts

```
<link rel="stylesheet" type="text/css" href="reset.css">
<link rel="stylesheet" type="text/css" href="style.css">
<script type="text/javascript" src="jquery-2.0.3.min.js"></script>
<script type="text/javascript" src="jquery.HSlider.js"></script>
```

HTML Structure:
```
<div class = "wrap">
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
```
// deathly simple!
$(".slider").HSlider();		
```

#### HSlider Options

use options:

```
$(".slider").HSlider({
	easing: "ease-in-out",
	animationTime: 1000,
	pagination: false
});	
```

##### `easing`

- @type `String`  
- @default `ease`  
- The easing function used in page transition

##### `animationTime`

- @type `Number`
- @default `1300`  
- The duration used for page transition

##### `pagination`

- @tyle `Boolean`  
- @default `true`  
- Auto generate pagination or not
