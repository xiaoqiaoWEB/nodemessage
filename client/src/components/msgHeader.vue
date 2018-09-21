<template>
    <div>
        <div class="py-5 text-center">
            <img class="d-block mx-auto mb-4" src="@/assets/images/sequelize.jpg" />
            <p class="lead">
                爱就好比骑马和学法语，如果不趁年轻时学会，以后想学会就难了。
            </p>
            <p class="lead">
                Love is like riding or speaking French,if you don not learn it young, it's hard to get the trick of it
                later.
            </p>
        </div>

        <div class="heading text-right mb">
            <a href="">注册</a>
            <span> | </span>
            <a href="">登录</a>
        </div>
        <!-- 注册 -->
        <model title="注册">
            <!-- 注册 -->
            <form>
                <div class="form-group row">
                    <label for="username" class="col-md-3 col-form-label">用户名</label>
                    <div class="col-md-9">
                        <input type="text" class="form-control" id="username" placeholder="用户名" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="password" class="col-md-3 col-form-label">密码</label>
                    <div class="col-md-9">
                        <input type="password" class="form-control" id="password" placeholder="密码" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="repassword" class="col-md-3 col-form-label">重复密码</label>
                    <div class="col-md-9">
                        <input type="password" class="form-control" id="repassword" placeholder="重复密码" />
                    </div>
                </div>
            </form>
            <template slot="foot">
                <button type="button" class="btn btn-primary">注册</button>
                <button type="button" class="btn btn-secondary">取消</button>
                <a href="">我有账号，立即登录</a>
            </template>
        </model>

        <!-- 登录 -->
        <model title="登录">
            <form>
                <div class="form-group row">
                    <label for="username" class="col-md-3 col-form-label">用户名</label>
                    <div class="col-md-9">
                        <input type="text" class="form-control" id="username" placeholder="用户名"" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="password" class="col-md-3 col-form-label">密码</label>
                    <div class="col-md-9">
                        <input type="password" class="form-control" id="password" placeholder="密码" />
                    </div>
                </div>
            </form>

            <template slot="footer">
                <button type="button" class="btn btn-primary">登录</button>
                <button type="button" class="btn btn-secondary">取消</button>
                <a href="">我有账号，立即登录</a>
            </template>
        </model>
    </div>
</template>

<script>
    import Model from './model';
    export default {
        name: "msgHeader",
        components:{
            Model
        }
    }
</script>

<style scoped>

</style>
