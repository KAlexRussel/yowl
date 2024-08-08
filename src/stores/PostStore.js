import { allpost, createpost, removepost, updatepost } from '@/api/PostApi'
import router from '@/router';
import { defineStore } from 'pinia'
import { ref } from 'vue';


export const usePostStore = defineStore('store', {
    state: () => ({
        posts: [],
        loaders:false,
        filterPosts : [],
        postsUser:[]
    }),
    persist: true,
    actions: {
        async getallpost() {
            await allpost().then((data) => (this.posts = data 

            ))

            this.loaders = false
          
        },
        getOnePost(id) {
            const post = this.posts.filter((post) => post.id == id);
            if(post.length < 1){
                router.push('/notfound')
                return
            }
            return post[0]
        },

        async createposts(url, user_id, content, category_id = null, notation = null) {
            this.loaders = true
            let datas = ref('');

            await createpost(url, user_id, content, category_id, notation).then((data)=> (datas.value = data) ).then(async () => await this.getallpost())
            this.loaders = false
            return datas
          
        },
        createPostStore(url, user_id, content, category_id, notation = null) {
            this.posts.unshift({ content: content, url: url, users: { id: user_id }, created_at: new Date, category_id: category_id, notation: notation })
        },

        async updatespost(url, content, id, category_id = null, notation) {
            await updatepost(url, content, id, category_id, notation).then(async () => await this.getallpost())
        },
        editPost(url, content, id, category_id = null) {
         
            const index = this.posts.findIndex(num => num.id === id);
            this.posts[index].content = content
            this.posts[index].url = url
            if (category_id !== null) {
                this.posts[index].category_id = category_id
            }

        },
        async removepostes(id) {
            await removepost(id).then(async () => await this.getallpost())
        },
        deletepost(id) {
            this.posts = this.posts.filter((post) => post.id != id);
        },
        getDate(newDate) {
            let date = new Date(newDate);
            const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            let formatDate = weekday[date.getDay()] + " " + date.getDate() + " " + date.toLocaleString('default', { month: 'long' }) + " " + date.getFullYear() + ", " + date.getHours() + " : " + " " + date.getMinutes();
            return formatDate;
        },
        filterStore(value) {
            
            this.posts = this.posts.filter((post) =>
                post.content.toLowerCase().includes(value.toLowerCase()) 
            );
           
           
        },
        filterCate(value) {
            
            this.posts = this.posts.filter((post) =>
                post.content.toLowerCase().includes(value.toLowerCase()) 
            );
           
           
        },
        postUser(id){

            const post_User = this.posts.filter((post) => post.user_id == id);
            this.postsUser = post_User
            return post_User
          
        }


    }

})
