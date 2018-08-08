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
    </div>
    
</template>

<script>

import SelfNav from './components/SelfNav.vue';

export default {
    props:['title','items'],
    components:{ SelfNav } ,
    computed:{
        
    },
    created:function(){
        if(__DEV__){
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
<style>

</style>


