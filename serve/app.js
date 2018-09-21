(async function(){
    const Koa = require('koa');
    const router = require('koa-router')();
    const md5 = require('md5');
    const bodrParser = require('koa-bodyparser');
    const static = require('koa-static-cache');
    const Model = require('./models');

    const app = new Koa();
    //bodrParser
    app.use(bodrParser());
    //static
    app.use( static('./public', {
        prefix: 'public',
        gzip: true
    }) );

    router.get('/',async (ctx)=>{

        let page = ctx.query.page || 1;
        let prepage = ctx.query.prepage || 2;
        let offset = (page - 1) * prepage;

        let rs = await Model.Contents.findAndCountAll({
            limit: 2,
            offset,
            include: {
                model: Model.Users
            }
        });

        ctx.body = {
            code: 0,
            count: rs.count,
            prepage,
            data: rs.rows.map( d => {
                return {
                    id: d.id,
                    title: d.title,
                    content: d.content,
                    user_id: d.user_id,
                    username: d.User.username,
                    created_at: d.createdAt,
                    like_count: d.like_count,
                    comment_count: d.comment_count
                }
            } )
        };

    })

    app.use(router.routes());
    app.listen(80);
})()
