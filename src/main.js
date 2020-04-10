import Vue from 'vue'
import App from './App'
import api_url from './api_url'
import tool from './tool'
import store from './store/index'
import modal from './components/tool/modal'
Vue.config.productionTip = false
Vue.prototype.api_url=api_url;
Vue.prototype.tool=tool;
Vue.prototype.$store=store;

Vue.component('modal-alert',modal);

Vue.prototype.request=function(param){
  console.log(this)
  this.$store.state.loading=true;
  let url='/api2'+param.url;
  uni.request({
    url,
    method:param.method || 'get',
    header:param.header || {'content-type' : 'application/json'},
    data:param.data || false,
    success:(res)=>{
      this.$store.state.loading=false;
      if(res.statusCode==200){
        if(param.callback){
          param.callback(res);
        }
      }else{
        uni.showToast({
          title:res.data.message,
          icon:"none",
          duration:2000,
        })
      }
    },
    fail:(res)=>{
      this.$store.state.loading=false;
      uni.showToast({
        title:res.data.message,
				icon:"none",
				duration:2000,
      })
    }
  })
}
App.mpType = 'app'

const app = new Vue({
  ...App,
  store
})
app.$mount()
