<template>
    <div>
        <div class="mb">
            <div class="list" v-for="item in list">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">{{item.title}}</h5>
                    <small>{{item.created_at}}</small>
                </div>
                <p class="mb-1">
                    {{item.content}}
                </p>
                <footer class="text-right">
                    <small>赞（{{item.like_count}}）</small>
                    <small>回复（{{item.comment_count}}）</small>
                    <a href="">我要回复</a>
                </footer>
            </div>
        </div>
        <!--分页-->
        <ul class="pagination mb">
            <li class="page-item" :class="{disabled: page==1}" @click="getData(Math.max(1,page-1))">
                <span class="page-link"> &lt; </span>
            </li>

            <li class="page-item"
                v-for="n in pages"
                :class="{active: n==page}"
                @click="getData(n)"
            >
                <span class="page-link">{{n}}</span>
            </li>

            <li class="page-item" :class="{disabled: page==pages}" @click="getData(Math.min(pages,page+1))">
                <span class="page-link"> &gt; </span>
            </li>
        </ul>
    </div>

</template>

<script>
    import axios from 'axios';
    export default {
        name: "msgList",
        data(){
          return {
              page:1,
              prepages:2,
              pages:1,
              count:0,
              list:[]
          }
        },
        created(){
            this.getData();
        },
        methods:{
            getData(n){

                if(n == this.page){
                    return;
                }

                this.page = n || this.page;


                axios({
                    url:'/api',
                    methods: 'get',
                    params:{
                        page:this.page
                    }
                }).then((rs)=>{
                    if (!rs.code) {
                        this.count = rs.data.count;
                        this.prepage = rs.data.prepage;
                        this.pages = Math.ceil(this.count / this.prepage);
                        this.list = rs.data.data;
                    }
                })
            },

        }
    }
</script>

<style scoped>

</style>
