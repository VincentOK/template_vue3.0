<template>
  <div class="home">
    <div>{{tokenName}}</div>
   <div>
     <van-button type="danger" @click.native="updateToken">同步更改vuex</van-button>
   </div>
    <van-divider />
    <div>
      <van-button type="success" @click.native="asyncUpdateTokenMothods">异步更改vuex</van-button>
    </div>
    <van-divider />
    <div>
      <van-button type="primary" @click.native="requestData">请求</van-button>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import { Button,Divider } from 'vant';
import HelloWorld from '@/components/HelloWorld.vue'
import {advertisementList} from '@/api/home'
import {computed} from 'vue';
import {useStore} from 'vuex';
export default {
  name: 'Home',
  components: {
    HelloWorld,
    [Button.name]: Button,
    [Divider.name]:Divider
  },
  setup() {
    const store = useStore();
    let tokenName = computed(() => store.state.lhc.token); // 这里注意指定lhc模块
    return {
      tokenName,
      setToken: () => store.commit('lhc/SET_TOKEN', new Date().getTime() / 1000),
      asyncUpdateToken:() => store.dispatch('lhc/asyncSetToken','异步更改后的token')
      // 这里注意指定lhc模块
    }
  },
  data(){
    return{

    }
  },
  computed: {
  },
  mounted(){
    //this.requestData();
  },
  methods:{
    updateToken(){
      this.setToken();
    },
    asyncUpdateTokenMothods(){
      this.asyncUpdateToken();
    },
    requestData(){
      advertisementList({}).then(res=>{
        console.log(res);
      }).catch(err=>{
        console.log(err);
      })
    },
  }
}
</script>
