<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
  *{
    transition: width 2s;
    color: #7489A3;
  }
  
  button::after{ border: none;}  
  
  @font-face {
      font-family: 'myicon';  /* project id 1539034 */
      src: url('https://at.alicdn.com/t/font_1539034_tmok16fr5s.eot');
      src: url('https://at.alicdn.com/t/font_1539034_tmok16fr5s.eot?#iefix') format('embedded-opentype'),
      url('https://at.alicdn.com/t/font_1539034_tmok16fr5s.woff2') format('woff2'),
      url('https://at.alicdn.com/t/font_1539034_tmok16fr5s.woff') format('woff'),
      url('https://at.alicdn.com/t/font_1539034_tmok16fr5s.ttf') format('truetype'),
      url('https://at.alicdn.com/t/font_1539034_tmok16fr5s.svg#myicon') format('svg');
  }
  
  .myicon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-family: "myicon" !important;
    font-size: 20px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    z-index: 1;
    filter: blur(0px);
  }
  
  .icon-baidu:before {
    content: "\e607";
  }
  
  .icon-translate:before {
    content: "\e608";
    color: #61B6FF;
  }
  
  .icon-quxiao:before {
    content: "\e600";
    color: #FFA49E;
  }
  
  .icon-quxiao1:before {
    content: "\e61e";
    color: #FFA49E;
    font-size: 30px;
  }
  
  .icon-Google:before {
    content: "\e60b";
  }
  
  .icon-copy:before {
    content: "\e601";
    color: #6D7B94;
  }
  
  .icon-photo:before {
    content: "\e60d";
  }
  
  .icon-right:before {
    content: "\e60e";
    color: #A8C7D0;
  }
  
  .icon-Wikipedia:before {
    content: "\e60f";
  }
 
 
/* 修改复选框默认样式 */
	/* #ifdef H5 */
	uni-checkbox .uni-checkbox-input {
		border: 0 !important;
		background: #F3F6F9 ;
		box-shadow: 1px 0.5px 3px rgba(136, 165, 191, 0.6), -1px -0.5px 2px #FFFFFF !important;
		border-radius: 12px !important;
	}

	uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked {
		color: #fff;
		background: $specColor
	}

	.uni-checkbox-input.uni-checkbox-input-checked {
		border: none !important;
	}

	/* #endif */
	/* 微信中样式 */
	/* #ifdef APP-PLUS ||MP-WEIXIN */
	checkbox .wx-checkbox-input {
		border: 0 !important;
    width: 40rpx;
    height: 40rpx;
		background: #F3F6F9;
		box-shadow: 1px 1px 1px rgba(136, 165, 191, 0.6), -1px -1px 1px #FFFFFF !important;
		filter: blur(1px) !important;
		border-radius: 12px !important;
	}

	checkbox .wx-checkbox-input.wx-checkbox-input-checked {
		background: #B9CAD9 !important;
		box-shadow: -4px -2px 8px rgba(136, 165, 191, 0.16), 4px 4px 8px rgba(255, 255, 255, 0.8), inset 5px 5px 8px rgba(151, 174, 199, 0.5), inset -5px -5px 8px rgba(255, 255, 255, 0.5) !important;
		filter: blur(1px) !important;
		border-radius: 12px !important;
	}

	.wx-checkbox-input.wx-checkbox-input-checked {
		border: none !important;
	}

  .wx-checkbox-input.wx-checkbox-input-checked::before {
    opacity:0 !important;
  }

	radio .wx-radio-input {
		border: 0 !important;
		width: 40rpx;
		height: 40rpx;
		background: #F3F6F9;
		box-shadow: 1px 1px 1px rgba(136, 165, 191, 0.6), -1px -1px 1px #FFFFFF !important;
		filter: blur(1px) !important;
		border-radius: 12px !important;
	}

	radio .wx-radio-input.wx-radio-input-checked {
		background: #B9CAD9 !important;
		box-shadow: -4px -2px 8px rgba(136, 165, 191, 0.16), 4px 4px 8px rgba(255, 255, 255, 0.8), inset 5px 5px 8px rgba(151, 174, 199, 0.5), inset -5px -5px 8px rgba(255, 255, 255, 0.5) !important;
		filter: blur(1px) !important;
		border-radius: 12px !important;
	}
  
  .wx-radio-input.wx-radio-input-checked {
  	border: none !important;
  }
  
  .wx-radio-input.wx-radio-input-checked::before {
    opacity:0 !important;
  }
	/* #endif */
</style>
