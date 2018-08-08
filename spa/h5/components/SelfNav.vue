<template>
    <div class="nav"> 
        <h1>{{ntitle}}</h1>
        <div class="nlist">
            <div v-for="(n,i) in nlist" :key="i">
                <slot v-bind="n"></slot>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props:['ntitle','nlist'],
    computed:{
        
    },
    created:function(){
        console.log(this.ntitle)
        console.log(this.nlist)
    },
    data(){
		return {
            
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


