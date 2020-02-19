<template>
  <view class="resultPopup" @click="convers">
    <view class="title">
      {{currentlanguage }} -> {{ sourceLanguage}}
    </view>
    <view class="content">
      {{transBackResult}}
    </view>
    <view class="close">
      <view class="myicon icon-quxiao1"></view>
    </view>
    <!-- <view class="button1">
        <button class="buttons" @click="jumpOut('https://magi.com/search?q='+ form.PopupContent)">
           <view class="myicon icon-baidu"></view>
        </button>
        <button class="buttons">
           <view class="myicon icon-Google"></view>
        </button>
        <button class="buttons">
           <view class="myicon icon-photo"></view>
        </button>
        <button class="buttons">
           <view class="myicon icon-Wikipedia"></view>
        </button>
      </view> -->
  </view>
</template>

<script>
  export default {
    name: 'resultPopup',
    props: ['currentlanguage', 'sourceLanguage', 'transBackResult'],
    data() {
      return {
        currentResult: true,
      }
    },
    methods: {
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
  
  .close {
    position: absolute;
    bottom: 30px;
    right: 50%;
  }

  /* 
  .button1 {
    position: absolute;
    bottom: 0px;
    display: flex;
    justify-content:space-between;
    width: 100%;
  }
  
  .buttons {
    margin: 16px;
    width: 36px;
    height: 36px;
    background: #F3F8FD;
    box-shadow: -4px -2px 8px rgba(136, 165, 191, 0.08), 4px 4px 8px rgba(255, 255, 255, 0.4), inset -4px -6px 8px rgba(217, 230, 242, 0.5), inset 4px 6px 8px rgba(255, 255, 255, 0.4);
    border-radius: 14px;
  } 
  */
</style>
