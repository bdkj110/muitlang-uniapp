<template>
  <view>
    <scroll-view :animation="animationData" scroll-y="true" class="listBox" :style="{visibility: sourceIfShow}">
      <view class="uni-list">
        <radio-group @change="radioChange">
          <label class="uni-list-cell uni-list-cell-pd" v-for="(item) in langIn" :key="item.value">
            <view>
              <radio :value="item.value"/>
            </view>
            <view>{{item.name}}</view>
          </label>
        </radio-group>
      </view>
    </scroll-view>
    
    <scroll-view :animation="animationData" scroll-y="true" class="listBox" :style="{visibility :objectIfShow}">
      <view class="uni-list">
        <checkbox-group @change="checkboxChange">
          <label class="uni-list-cell uni-list-cell-pd" v-for="item in langOut" :key="item.value">
            <view>
              <checkbox :value="item.value" :checked="item.checked" />
            </view>
            <view>{{item.name}}</view>
          </label>
        </checkbox-group>
      </view>
    </scroll-view>
  </view>
</template>

<script>
  import {
    langIn,
    langOut
  } from './langlist'
  
  export default {
    name:'LangPopup',
    props:['chackboxOrRadio'],
		data() {
			return {
        sourceIfShow: 'hidden',
        objectIfShow: 'hidden',
        animationData: {},
        radioDisplay: '200px',
        checkboxDisplay: '100%',
				langIn, // 源语言库
				langOut, // 目标语言库
        current: 0,
        language: []
			}
		},
    methods:{
      onReady () {
        this.animation = uni.createAnimation()
      },
      radioChange (evt) {
        this.current = evt.detail.value;
        this.$emit('sourceChange', this.current)
      },
      checkboxChange (e) {
        this.language = e.detail.value
        this.$emit('objectChange', this.language)
        
        // console.log(this.language.join())
        // for (let i = 0, lenI = this.language.length; i < lenI; ++i) {
        //   const item = this.language[i]
        //   if(values.includes(item.value)){
        //     this.$set(this.language,'checked',true)
        //     console.log(this.language)
        //   }else{
        //     this.$set(this.language,'checked',false)
        //     console.log(this.language)
        //   }
        // }
      },
      parentMsg(ifShowChackbox, chackboxOrRadio) {
        if (ifShowChackbox) {
          this.animation.top(200).step({duration:200, timingFunction: 'ease'})
          this.animationData = this.animation.export()
          if (chackboxOrRadio) {
            this.sourceIfShow = 'visible' 
            this.objectIfShow = 'hidden'
          } else {
            this.objectIfShow = 'visible'
            this.sourceIfShow = 'hidden'
            console.log('object')
          }
        } else{
          this.animation.top('100%').step({duration:200, timingFunction: 'ease'})
          this.animationData = this.animation.export()
        }
      }
    }
  }
</script>

<style>
  .listBox {
    top: 100%;
    background-color: #F4F7FA;
    position: fixed;
    bottom: 0;
    height: calc(100% - 200px);
    width: 100%;
    color: #6D7B94;
  }
  
  .uni-list-cell {
    display: flex;
    justify-content: space-between;
    height: 48px;
    margin: 4px 24px 4px 24px;
  }
  
</style>
