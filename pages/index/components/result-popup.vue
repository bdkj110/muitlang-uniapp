<template>
  <view class="resultPopup">
    <view class="title">
      {{currentlanguage }} -> {{ sourceLanguage}}
    </view>
    <view class="content">
      {{transBackResult}}
    </view>
    <!-- <view class="close">
      <view class="myicon icon-quxiao"></view>
    </view> -->
    <view class="button1">
      <button class="buttons" >
        <view class="myicon icon-baidu" @click="magi(0)"></view>
      </button>
      <button class="buttons">
        <view class="myicon icon-Google" @click="google(1)"></view>
      </button>
      <button class="buttons">
        <view class="myicon icon-photo" @click="googlePhoto(2)"></view>
      </button>
      <button class="buttons">
        <view class="myicon icon-Wikipedia" @click="wiki(3)"></view>
      </button>
    </view>
  </view>
</template>

<script>
  export default {
    name: 'resultPopup',
    props: ['currentlanguage', 'sourceLanguage', 'transBackResult', 'currentTransResult'],
    data() {
      return {
        currentResult: true,
      }
    },
    methods: {
      magi(types) {
        plus.runtime.openURL('https://magi.com/search?q='+ this.transBackResult, function(res) {  
          console.log(res);  
        });  
      },
      google(types) {
        plus.runtime.openURL('https://www.google.com/search?q='+ this.transBackResult, function(res) {  
          console.log(res);  
        });  
      },
      googlePhoto(types) {
        plus.runtime.openURL('https://www.google.com/search?tbm=isch&q='+ this.transBackResult, function(res) {  
          console.log(res);  
        });  
      },
      wiki(types) {
        plus.runtime.openURL('https://en.wikipedia.org/wiki/'+ this.transBackResult, function(res) {  
          console.log(res);  
        });  
      }
      // jumpOut (e) {
      // window.location.href = e
      // } 
    }
  }
</script>

<style scoped>
  .resultPopup {
    transform: translateY(-150upx);
    width: 550upx;
    height: 800upx;
    background: #F3F8FD;
    box-shadow: 0px 16px 80px #6C8195, inset 2px 3px 2px rgba(255, 255, 255, 0.7), inset -1px -2px 2px rgba(169, 202, 252, 0.5);
    border-radius: 23px;
  }

  .title {
    position: absolute;
    color: #31456A;
    margin: 16px;
    font-size: 20px;
    font-weight: bold;
    width: 90%;
    top: 4px;
  }

  .content {
    position: absolute;
    color: #58667C;
    margin: 16px;
    top: 48px;
  }

 /* .close {
    position: absolute;
    top: 32px;
    right: 30px;
  } */


  .button1 {
    position: absolute;
    bottom: 0px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    z-index: 99;
  }

  .buttons {
    color: #58667C;
    margin: 16px;
    width: 36px;
    height: 36px;
    background: #F3F8FD;
    box-shadow: 4px 2px 8px rgba(136, 165, 191, 0.3), -5px -3px 8px #FFFFFF, inset -2px -2px 24px rgba(255, 255, 255, 0.5), inset 2px 2px 24px rgba(214, 225, 237, 0.5);
    border-radius: 14px;
  }

  .buttonsHover {
    background: #E3EEF9;
    box-shadow: -4px -2px 8px rgba(136, 165, 191, 0.16), 4px 4px 8px rgba(255, 255, 255, 0.8), inset 5px 5px 8px rgba(151, 174, 199, 0.5), inset -5px -5px 8px rgba(255, 255, 255, 0.5);
  }
</style>
