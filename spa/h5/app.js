
import Vue from 'vue';
import App from './App.vue';

new Vue({
    el:"#app",
    data(){
        return {
            shapes: [ 
                { name: 'Square', sides: 4 }, 
                { name: 'Hexagon', sides: 6 }, 
                { name: 'Triangle', sides: 3 } 
            ],
            colors: [ 
                { name: 'Yellow', hex: '#f4d03f' }, 
                { name: 'Green', hex: '#229954' }, 
                { name: 'Purple', hex: '#9b59b6' } 
            ]
        }
    },
    components:{App}
})