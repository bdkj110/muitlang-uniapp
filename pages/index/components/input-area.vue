<template>
  <view>
    <view class="bottomArea" :style="{height: inputH, bottom: bottomAreaH}">
      <!-- 文本框 -->
      <view class="inputArea" :style="{bottom: inputToBottom}">
        <textarea @input="lesionInput" @focus="changeHeight" v-model="form.content" style="color: #58746C; margin:16px; position: absolute; width: 85%; height: 90%;"
          :adjust-position="false" :show-confirm-bar="false" :disabled="ifTextareaShow" maxlength="-1" @keydown.enter="preventBreak"
          @keyup.enter="trans" />
        </view>
      
      <view class="displayClipboard" :style="{visibility: displayClipboard}">
        请输入或<button class="pasteButton" @click="paste">粘贴</button>文字
      </view>
      
      <!-- 右侧按钮 -->
      <view>
        <view class="buttons-quxiao" @click="cancel">
          <view class="myicon icon-quxiao"></view>
          <view class="buttons-background" hover-class="buttonsHover" ></view>
        </view>
        <view class="buttons-fanyi" :style="{bottom: inputToBottom}" @click="trans">
          <view class="myicon icon-translate"></view>
          <view class="buttons-background" hover-class="buttonsHover" ></view>
        </view>
      </view>
      
      <!-- 底部按钮 -->
      <view>
        <view class="sourceLanguage" @click="source">源语言：{{form.sourceLanguage}} </view>
        <view class="arrow">
          <view class="myicon icon-right"></view>
        </view>
        <view class="objectLanguage" @click="object">
          <view style="max-width: 100px; overflow: hidden; text-overflow: ellipsis; margin: 0px 15px 0px 15px;">
            {{form.languageName}}
          </view>
        </view>
      </view>
    </view>
    
    <view class="">
      <!-- 语言选择 -->
      <scroll-view scroll-y="true" class="sourceListBox" :style="{visibility: sourcePopupIfShow}">
        <view class="uni-list">
          <radio-group @change="sourceChange">
            <label class="uni-list-cell uni-list-cell-pd" v-for="(item) in langIn" :key="item.value">
              <view>
                <radio :value="item.value"/>
              </view>
              <view>{{item.name}}</view>
            </label>
          </radio-group>
        </view>
      </scroll-view>
      
      <scroll-view scroll-y="true" class="objListBox" :style="{visibility: objPopupIfShow}">
        <view class="uni-list">
          <checkbox-group @change="objectChange">
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
  </view>
</template>

<script>
  import {
    langIn,
    langOut
  } from './langlist'
  
  export default{
    name:'InputArea',
    props: ['ifTextareaShow'],
    data () {
      return {
        langIn, // 源语言库
        langOut, // 目标语言库
        sourcePopupIfShow: 'hidden', // 源语言选择列表是否可见
        objPopupIfShow: 'hidden', // 目标语言选择列表是否可见
        inputH: '100%', // 文本框高度
        inputToBottom: '80px', // 输入区至底部距离
        bottomAreaH: '0px', //底部组件至底部距离
        displayClipboard: 'visible', // 复制到剪贴板是否可见
        chackboxOrRadio: null, //当前语言选择列表是源语言或目标语言
        form: {
          sourceLanguage: 'auto', // 源语言代码
          language: null, // 目标语言代码
          languageName: '目标语言', // 目标语言名称
          content: '' // 待翻译内容
        }
      }
    },
    methods: {
      // 改变文本框高度和位置
      changeHeight (e) {
        (this.form.content === '') ? this.displayClipboard = 'visible' : this.displayClipboard = 'hidden'
        this.inputH = '100%'
        this.bottomAreaH = '0px'
        this.inputToBottom = e.detail.height+24 + 'px'
        this.sourcePopupIfShow = 'hidden'
        this.objPopupIfShow = 'hidden'
      },
      lesionInput () {
        this.displayClipboard = 'hidden'
      },
      // 粘贴内容
      paste () {
        uni.getClipboardData({
            success:(res)=> {
              this.form.content = res.data
              this.displayClipboard = 'hidden'
            }
        })
      },
      preventBreak (e) {
        e.preventDefault() // 阻止浏览器默认换行操作
      },
      // 翻译
      trans () {
        this.sourcePopupIfShow = 'hidden'
        this.objPopupIfShow = 'hidden'
        this.bottomAreaH = '0px'
        this.inputH = '200px'
        this.inputToBottom = '80px'
        uni.vibrateShort({
          success: function () {
              console.log('成功震动')
          }
        })
        this.$emit('transRequst', this.form.sourceLanguage, this.form.language, this.form.content)
      },
      
      //清除按钮
      cancel () {
        this.form.content = ''
      },
      
      // 源语言选择按钮
      source () {
        this.objPopupIfShow = 'hidden'
        this.sourcePopupIfShow = 'visible'
        this.bottomAreaH = 'calc(100% - 200px)'
        this.inputH = '200px'
        //this.sourceDisplay = '200px'
        this.inputToBottom = '80px'
      },
      // 目标语言选择按钮
      object () {
        this.sourcePopupIfShow = 'hidden'
        this.objPopupIfShow = 'visible'
        this.bottomAreaH = 'calc(100% - 200px)'
        this.inputH = '200px'
        this.inputToBottom = '80px'
      },
      
      // 子组件传回的值：当前选择的源语言
      sourceChange (evt) {
        this.form.sourceLanguage = evt.detail.value;
      },
      // 子组件传回的值：当前选择的目标语言
      objectChange (e) {
        this.form.language = e.detail.value
        this.form.languageName= this.form.language.join('/')
        if (this.form.languageName === '') {
          this.form.languageName = '目标语言'
        }
      },
      
      // radioChange (evt) {
      //   this.current = evt.detail.value;
      //   this.$emit('sourceChange', this.current)
      // },
      // checkboxChange (e) {
      //   this.language = e.detail.value
      //   this.$emit('objectChange', this.language)
      // },
      // parentMsg(chackboxOrRadio) {
      //   if (chackboxOrRadio) {
      //     this.sourceIfShow = 'visible' 
      //     this.objectIfShow = 'hidden'
      //   } else {
      //     this.objectIfShow = 'visible'
      //     this.sourceIfShow = 'hidden'
      //   }
      // } 
    }
  }
</script>

<style scoped>
  .bottomArea{
    background-color: #F4F7FA;
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: 2;
  }
  
  .inputArea{
    position: absolute;
    top: 24px;
    left: 24px;
    right: 84px;
    background: linear-gradient(165.42deg, #F7FEFB 2.21%, #FCFAF6 96.46%);
    box-shadow: inset 3px 3px 7px rgba(217, 222, 237, 0.4), inset -3px -3px 7px rgba(255, 255, 255, 0.5);
    border-radius: 12px;
  }
  
  .displayClipboard{
    position: absolute;
    color: #58667C;
    top: 44px;
    left: 44px;
    display: flex;
    flex-direction: row;
    flex-wrap:nowrap; 
    z-index: 500;
  }
  
  .pasteButton{
    transform: translateY(-3px);
    color: #4599E8;
    margin-left: 12px;
    margin-right: 12px;
    height: 30px;
    line-height:30px;
    vertical-align: middle;
    background: #F7FEFB;
    box-shadow: 2px 1px 4px rgba(136, 165, 191, 0.1), -2px -1px 2px rgba(255, 255, 255, 0.5);
    border-radius: 16px;
    text-align:center;
  }
  
  .buttons-background{
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    background: #F3F8FD;
    box-shadow: 4px 2px 8px rgba(136, 165, 191, 0.3), -5px -3px 8px #FFFFFF, inset -2px -2px 24px rgba(255, 255, 255, 0.5), inset 2px 2px 24px rgba(214, 225, 237, 0.5);
    border-radius: 14px;
    filter: blur(1px);
  }
  .buttonsHover{
    background: #E3EEF9;
    box-shadow: -4px -2px 8px rgba(136, 165, 191, 0.16), 4px 4px 8px rgba(255, 255, 255, 0.8), inset 5px 5px 8px rgba(151, 174, 199, 0.5), inset -5px -5px 8px rgba(255, 255, 255, 0.5);
  }
  .buttons-fanyi{
    position: absolute;
    right: 24px;
    width: 36px;
    height: 36px;
  }
  .buttons-quxiao{
    position: absolute;
    top: 24px;
    width: 36px;
    height: 36px;
    right: 24px;
  }
  
  .sourceLanguage{
    position: absolute;
    bottom: 24px;
    left: 6.4%;
    right: 58.93%;
    height: 36px;
    background: #F3F6F9;
    box-shadow: 4px 2px 8px rgba(136, 165, 191, 0.15), -5px -3px 8px #FFFFFF;
    border-radius: 12px;
    text-align:center;
    line-height:36px;
    color: #58746C;
  }
  .sourceLanguage:hover{
    background: #61B6FF;
    color: white;
    box-shadow: -2px -2px 4px rgba(136, 165, 191, 0.12), 2px 2px 4px rgba(255, 255, 255, 0.9);
  }
  
  .objectLanguage{
    position: absolute;
    bottom: 24px;
    left: 58.93%;
    right: 6.4%;
    background: #F3F6F9;
    box-shadow: 4px 2px 8px rgba(136, 165, 191, 0.15), -5px -3px 8px #FFFFFF;
    border-radius: 12px;
    text-align:center;
    line-height:36px;
    color: #58746C;
  }
  .objectLanguage:hover{
    background: #61B6FF;
    color: white;
    box-shadow: -2px -2px 4px rgba(136, 165, 191, 0.12), 2px 2px 4px rgba(255, 255, 255, 0.9);
    }
  
  .arrow{
    position: absolute;
    transform: translate(-50%);
    left: 50%;
    width: 30px;
    height: 36px;
    bottom: 24px;
  }
  
  .sourceListBox {
    top: 200;
    background-color: #F4F7FA;
    position: fixed;
    bottom: 0;
    height: calc(100% - 200px);
    width: 100%;
    color: #6D7B94;
    z-index: 5;
  }
  
  .objListBox {
    top: 200;
    background-color: #F4F7FA;
    position: fixed;
    bottom: 0;
    height: calc(100% - 200px);
    width: 100%;
    color: #6D7B94;
    z-index: 5;
  }
  
  .uni-list-cell {
    display: flex;
    justify-content: space-between;
    height: 48px;
    margin: 4px 24px 4px 24px;
  }
</style>
