# H5-Practice-one-Phone
模拟微信、支付宝、来电接听等伪页的h5,demo将在末尾给出。

#####里面用到了大量的弹出层的显示隐层，是用jquery做的，其余基本都是原生写法。

###主要的技术包含以下

  ####1.视口约束
    
    为了使所有尺寸的手机都可以得到相同的体验效果，也方便书写定位的时候不计算复杂的百分比，采用固定视口宽度的方法 content=" width=640 "
    
    用变量phoneScale来计算原始缩放比的大小，并赋给initial-scale。这样所有尺寸的手机，都将以640px的视口大小完美展现。
```javascript
<script>
	//缩放比例
		var phoneScale = parseInt(screen.width)/640;
		document.write('<meta name="viewport"  content="width=640, minimum-scale='+ phoneScale + ', maximum-scale= '+phoneScale+', initial-scale= '+phoneScale+', user-scalable=no"/>')
	</script>
	```
	
	####2.资源预加载
	
	  这个方法是我从David Geary的《canvas核心技术》一书中参考出来的，主要用到了js的"load"和"error"事件来监听图片、音频等文件的加载进度，详细代码我会在另一个库中详细列出
	  
	####3.UI及弹窗
	
	  这个案例ui数量非常庞大，大约80左右张，所以主要的功劳在美术身上，前端代码比较简单，jq的fadeIn和fadeOut就可以轻松完成模拟效果。
	
	####4.触摸
	  
	  原作者用swiper.js这个框架来搭建的结构，我感觉项目里面滑屏事件很少，我就用原生的触摸事件来实现。其实就用到了touchstart来代替swiper的tap事件。
	  （我不是作者，只是练习而已）
	  
	  
####[练习demo]()
####[原作者demo](http://case.valuepr.net/nbh5/index.php)
