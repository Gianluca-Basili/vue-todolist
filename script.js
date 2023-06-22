const {createApp} = Vue;

createApp({
    data(){
        return{
            title:'todolist',
            tasks :[
                {
                    Text:'comprare il latte',
                    done:false
                },
                {
                    Text:'comprare il pane',
                    done:false
                },
                {
                    Text:'comprare il prezzemolo',
                    done:false
                },
                {
                    Text:'comprare la pizza',
                    done:false
                },
                {
                    Text:'comprare la nutella',
                    done:false
                },
                {
                    Text:'comprare la frutta',
                    done:false
                },
                {
                    Text:'comprare il pesce',
                    done:false
                },
                {
                    Text:'comprare la birra',
                    done:false
                }

            ]
        }
    },
    methods:{

    }
}).mount('#app');