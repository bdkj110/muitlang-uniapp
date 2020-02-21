<template>
  <view>
    <scroll-view scroll-y="true" class="resultList">
      <view :key="item.name" v-for="(item, index) in languageRes">
        <view class="block" />
        <button class="resultItem" hover-class="resultItemHover" @click="transBack(index)">
          <view class="title">{{languageRes[index]}}</view>
          <view class="content">{{transResult[index]}}</view>
          <view class="icon" >
            <view class="myicon icon-copy" @click.stop="paste(index)"></view>
          </view>
        </button>
      </view>
    </scroll-view>
  </view>
</template>

<script>
  export default {
    name: 'resultList',
    props: ['languageRes', 'transResult'],
    methods: {
      transBack(index) {
        this.$emit('transBack', index)
      },
      paste(index) {
        uni.vibrateShort({
            success: function () {
                console.log('success')
            }
        })
        uni.setClipboardData({
          data: this.transResult[index],
          success: function () {
            console.log('success');
          }
        });
      }
    }
  }
</script>

<style scoped>
  .resultList {
    background-color: #F4F7FA;
    position: fixed;
    top: 0;
    bottom: 200px;
    width: 100%;
    z-index: 1;
  }

  .resultItem {
    height: auto;
    width: 90%;
    background: #F3F6F9;
    box-shadow: 2px 1px 4px rgba(136, 165, 191, 0.1), -2px -1px 2px rgba(255, 255, 255, 0.5);
    border-radius: 12px;
    text-align: left;
    font-size: 15;
    padding-left: 0;
  }

  .resultItem::after {
    border: 0;
  }

  .resultItemHover {
    background: #E9F1F7;
    box-shadow: -2px -2px 4px rgba(136, 165, 191, 0.12), 2px 2px 4px rgba(255, 255, 255, 0.9);
  }

  .title {
    position: relative;
    top: 0;
    left: 12px;
    height: 40px;
    color: #6D7B94;
    font-weight: bold;
  }

  .content {
    position: relative;
    line-height: 25px;
    top: 32;
    width: 85%;
    left: 12px;
    color: #6D7B94;
    margin-bottom: 12px;
  }

  .icon {
    position: absolute;
    top: 50%;
    right: 28px;
  }

  .block {
    width: 100%;
    height: 16px;
  }
</style>
