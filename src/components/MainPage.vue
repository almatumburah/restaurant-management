<template>
<PageHeader/>
<h1>Welcome Home</h1>
<h4>{{name}}</h4>
<h5>Here is a list of fast food restaurants you should try:</h5>
<div class="cards">
    <div class="card" v-for="item in restaurants" :key="item.id">
        <img  v-bind:src="item.image" alt="" class="card_image">
        <div class="card_content">
            <h4>{{item.name}}</h4>
            <p>{{item.description}}</p>
        </div>
        <div class="card_info">
            <div>
                5 stars
            </div>
            <div>
                <a href="#" class="card_link">More</a>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import PageHeader from './PageHeader.vue';
import axios from 'axios';
export default {
    name:'MainPage',
    data(){
        return {
            name:'',
            restaurants:[],
        }
    },
    components:{
        PageHeader
    },
    async mounted() {
        let user = localStorage.getItem('user-reg');
        this.name = JSON.parse(user).name;
        if(!user)
        {
            this.$router.push({name:'SignUp'});
        }

        let result = await axios.get("http://localhost:3000/restaurants");
        console.log(result);
        this.restaurants = result.data;
    },
}
</script>
<style>
    .cards{
        margin: 0 auto;
        max-width: 1000px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
        gap: 20px;
        font-family: sans-serif;
    }
    .card{
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
    }
    .card_image{
        width: 100%;
        height: 180px;
        display: block;
    }
    .card_content{
        line-height: 1.5;
        font-size: 0.9em;
        padding: 15px;
        background: #fafafa;
    }
    .card_content h4{
        margin-top: 0;
    }
    .card_content p{
        margin-top: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* number of lines to show */
                line-clamp: 2; 
        -webkit-box-orient: vertical;
    }
    .card_info{
        padding: 15px;
        display: flex;
        justify-content: space-between;
        background: #eeeeee;
        font-size: 0.8em;
        color: #555555;
        border-bottom: 2px solid #cccccc;
    }
    .card_link{
        color: turquoise;
        text-decoration: none;
        font-weight: 300;
    }
    
    .card_link:hover{
        color: turquoise;
    }
</style>