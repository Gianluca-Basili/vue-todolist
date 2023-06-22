const {createApp} = Vue;

createApp({
    data(){
        return{
            title:'todolist',
            new_task:'',
            tasks: [
                {
                    Text:'comprare il latte',
                    done:true
                },
                {
                    Text:'comprare il pane',
                    done:true
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
                    done:true
                }

            ]
        }
    },
    methods:{
        changeTaskStatus(index){
            this.tasks[index].done = !this.tasks[index].done
        },
        deleteTask(index){
            this.tasks.splice(index,1);
        },

        addTask(){
            let obj = {
                text: this.new_task,
                done: false
            }
           console.log(this.tasks)
            this.tasks.push(obj);
            this.new_task ='';
            
        }
    }
}).mount('#app');