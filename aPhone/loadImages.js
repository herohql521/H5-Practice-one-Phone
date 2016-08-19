
var Game = function(){

 	//为函数对象添加的一些属性

 	this.imageLoadingProgressCallback;
 	this.images = {};
 	this.imageUrls = [];
 	this.imagesLoaded = 0;
 	this.imagesFailedToload = 0;
 	this.imagesIndex = 0;

 	return this;

};

	//为函数对象添加一些方法

	Game.prototype = {
		//根据参数的url返回相关的图片
		getImage: function(imageUrl){
			return this.images[imageUrl];
		},

		//此方法通过loadImage()方法回调，返回加载成功的数量
		imageLoadedCallback: function(e){
			this.imagesLoaded++;
		},

		//此方法通过loadImages()方法回调，返回加载失败的数量
		imageLoadErrorCallback: function(e){
			this.imagesFailedToload++;
		},

		//加载图像
		loadImage: function(imageUrl){
			var image = new Image(), self = this;  //self指针指向Game对象

			image.src = imageUrl;

			//监听image加载成功和失败方法，并返回数值
			image.addEventListener('load',function(e){  
				self.imageLoadedCallback(e);
			});

			image.addEventListener('error',function(e){
				self.imageLoadErrorCallback();
			});

			this.images[imageUrl] = image; //将图片地址添加到Game的images对象的数组中（新数组）

		},

		//持续调用，继续加载数组中的下一张，回调loadImage()并给成功数和失败数属性赋值，
		loadImages: function(){
			if(this.imagesIndex < this.imageUrls.length){
				this.loadImage(this.imageUrls[this.imagesIndex]);
				this.imagesIndex++;
			}

			//根据赋值后的成功数和失败数属性，返回完成的百分比
			return (this.imagesLoaded + this.imagesFailedToload) / this.imageUrls.length * 100;
		},
        //将图像加入url数组队列
		queueImage: function(imageUrl){
			this.imageUrls.push(imageUrl);
		}
	};

   var game = new Game ;
    game.queueImage("ui/loading.jpg");
    game.queueImage("ui/loading_logo.png");
	game.queueImage("ui/ab.mp3");
	game.queueImage("ui/bai.jpg");
	game.queueImage("ui/begin.mp3");
	game.queueImage("ui/call_2.png");
	game.queueImage("ui/call_3.png");
	game.queueImage("ui/call_4.png");
	game.queueImage("ui/call_11.png");
	game.queueImage("ui/dian.png");
	game.queueImage("ui/dianhua.mp3");
	game.queueImage("ui/duanxin2.mp3");
	game.queueImage("ui/fasong.png");
	game.queueImage("ui/fengdi_1.png");
	game.queueImage("ui/fengdi_12.png");
	game.queueImage("ui/fengdi_13.png");
	game.queueImage("ui/fengdi_14.png");
	game.queueImage("ui/fengdi_15.png");
	game.queueImage("ui/fengdi_16.png");
	game.queueImage("ui/fengdi_17.png");
	game.queueImage("ui/fengdi_18.png");
	game.queueImage("ui/guojie.png");
	game.queueImage("ui/icon_1.png");
	game.queueImage("ui/icon_2.png");
	game.queueImage("ui/icon_3.png");
	game.queueImage("ui/icon_4.png");
	game.queueImage("ui/icon_5.png");
	game.queueImage("ui/icon_7.png");
	game.queueImage("ui/icon_8.png");
	game.queueImage("ui/icon_9.png");
	game.queueImage("ui/icon_10.png");
	game.queueImage("ui/icon_11.png");
	game.queueImage("ui/icon_12.png");
	game.queueImage("ui/icon_13.png");
	game.queueImage("ui/icon_14.png");
	game.queueImage("ui/icon_15.png");
	game.queueImage("ui/jietong.jpg");
	game.queueImage("ui/laidian.mp3");
	game.queueImage("ui/lt_1.png");
	game.queueImage("ui/lt_2.png");
	game.queueImage("ui/lt_3.png");
	game.queueImage("ui/lt_4.png");
	game.queueImage("ui/lt_5.png");
	game.queueImage("ui/lt_6.png");
	game.queueImage("ui/lt_7.png");
	game.queueImage("ui/lt_8.png");
	game.queueImage("ui/luanting5.mp3");
	game.queueImage("ui/message_22.png");
	game.queueImage("ui/message_34.png");
	game.queueImage("ui/message_close2.png");
	game.queueImage("ui/message_yue2.png");
	game.queueImage("ui/new_close.png");
	game.queueImage("ui/page_bg2.jpg");
	game.queueImage("ui/page_icon.png");
	game.queueImage("ui/shang.png");
	game.queueImage("ui/sp_btn1.png");
	game.queueImage("ui/sp_tishi13.png");
	game.queueImage("ui/wx_4.png");
	game.queueImage("ui/wx_5.png");
	game.queueImage("ui/wx_6.png");
	game.queueImage("ui/wx_7.png");
	game.queueImage("ui/wx_8.png");
	game.queueImage("ui/wx_9.png");
	game.queueImage("ui/wx_bottom.png");
	game.queueImage("ui/wx_exit.png");
	game.queueImage("ui/wx_queren.png");
	game.queueImage("ui/wx_qvxiao.png");
	game.queueImage("ui/wx_tishi.png");
	game.queueImage("ui/wx_title.png");
	game.queueImage("ui/zfb_3.png");
	game.queueImage("ui/zfb_4.png");
	game.queueImage("ui/zfb_5.png");
	game.queueImage("ui/zfb_close.png");
	game.queueImage("ui/zfb_open.png");
	game.queueImage("ui/zfb_tishi.png");
	

	var interval = setInterval(function(e){
		loadingPercentComplete = game.loadImages();

		document.getElementById("loading").innerHTML = parseInt(loadingPercentComplete) + "%";

		if(loadingPercentComplete === 100){
			clearInterval(interval);
			hide();
			play();
		}
	},50);

	function hide(){
		document.getElementById("section0").style.display = "none";
	}

