import { allcomment,createcomment,updatecomment,removecomment, onecomment } from '@/api/CommentApi'
import {defineStore} from 'pinia'

export const useCommentStore = defineStore ('comment' ,{
    state: ()=>({
        comments:[],
        loader: null
    }),
    actions: {
        async getallcomment(){
            await allcomment().then((data)=>(this.comments = data))
        },
        async getonecomment(id){
            await onecomment(id).then((data)=>(this.comment=data))
        },
        getcomment(id){
            const comment = this.comments.filter((comment) => comment.id == id);
            return comment
        } ,
        async createcomments(content,post_id,username, parent_id = null){
            this.loader = true
            await createcomment(content,post_id,username,parent_id).then(async()=>await this.getallcomment())
            this.loader = false
        },
        createCommentStore(content,post_id,username, parent_id = null) {
          
            
            this.comments.unshift({ content: content , username: username, post_id : post_id , created_at:new Date ,parent_id:parent_id })
        },

        async updatecomments(content,id){
            await updatecomment(content,id).then(async()=>await this.getallcomment())
        },
        editComment(content, id) {
            const index = this.comments.findIndex(num => num.id === id);
            this.comments[index].content = content

        },
        async removecomments(id){
            await removecomment(id).then(async()=>await this.getallcomment())
        } ,
        deletecomment(id) {
            this.comments = this.comments.filter((comment) => comment.id != id);
        },
        getDate(newDate) {
            let date = new Date(newDate);
            const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            let formatDate = weekday[date.getDay()] + " " + date.getDate() + " " + date.toLocaleString('default', { month: 'long' }) + " " + date.getFullYear() + ", " + date.getHours() + " : " + " " + date.getMinutes();
            return formatDate;
        },

    }
})