const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

router.get('/test/:id', (ctx) => {
  ctx.body = {
    name: 'Hello',
    id: ctx.params.id
  };
});

router.post('/', (ctx) => {
  ctx.body = ctx.request.req;
  return (ctx.status = 201);
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3100);

// https://www.youtube.com/watch?v=LWP5j4NR-XI 21:44 ish