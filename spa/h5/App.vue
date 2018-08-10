<template>
    <div>
        <self-nav :ntitle="ntitle" :nlist="nlist">
            <template slot-scope="nav">
                <div>{{nav.name}} {{nav.sides}}</div>
            </template>
        </self-nav>
        <div class="my-list"> 
            <div class="title">{{ title }}</div> 
            <div class="list"> 
                <div class="list-item" v-for="(item, index) in items" :key="index"> 
                    <slot v-bind="item"></slot>
                </div>
            </div> 
        </div>
        <div><button class="button">button <i class="iconfont">&#xe6c3;</i></button></div>
    </div>
    
</template>

<script>

import SelfNav from './components/SelfNav.vue';

export default {
    props:['title', 'items'],
    components:{ SelfNav } ,
    computed:{
        
    },
    created:function(){
        if(__DEV__){//判断是否是开发环境，是，则打印调试代码，否则不打印
            console.log("........");
        }
    },
    data(){
		return {
            ntitle:"test",
            nlist: [ 
                { name: 'Square', sides: 4 }, 
                { name: 'Hexagon', sides: 6 }, 
                { name: 'Triangle', sides: 3 } 
            ]
        }	
    },
    mounted:function(){
       
    },
    activated: function(){
        
    },
    methods:{
        
    }
}
</script>
<style scoped lang="scss">
@import './resource/scss/components/_button.scss';
@import './resource/scss/test.scss';

.title{
    color: $def-color;
    font-size: 15px;
}
</style>


