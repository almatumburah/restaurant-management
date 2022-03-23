<template>
<PageHeader/>
<h1>Add New Restaurant</h1>
<form class="add">
<input type="text" v-model="restaurant.name" placeholder="Enter Name" required>
<input type="url" v-model="restaurant.image" placeholder="Enter Image Url" required>
<textarea v-model="restaurant.description" placeholder="Restaurant Description..." cols="30" rows="10"></textarea>
<button type="button" v-on:click="addRestaurant">Add Restaurant</button>
</form>
</template>
<script>
import axios from 'axios'
import PageHeader from './PageHeader.vue';
export default {
    name:'AddRestaurant',
    components:{
        PageHeader
    },
    data() {
        return {
            restaurant :{
                name:'',
                image:'',
                description:''
            }
        }
    },
    methods: {
        async addRestaurant()
        {
            let result = await axios.post("http://localhost:3000/restaurants", {
                name:this.restaurant.name,
                description:this.restaurant.description,
                image:this.restaurant.image
            });

            if(result.status==201)
            {
                this.$router.push({name:'MainPage'});
            }
            console.log(result);
        }
    },
     mounted() {
        let user = localStorage.getItem('user-reg');
        if(!user)
        {
            this.$router.push({name:'SignUp'});
        }
    },
}
</script>
<style>
    
</style>