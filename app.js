const Koa = require('koa');
const Router = require('koa-router');
const render = require('koa-ejs');
const path = require('path');
const app = new Koa();
const router = new Router();

render(app, {
  root: path.join(__dirname, "views"),
  layout: "template",
  viewExt: "html",
  cache: false,
  debug: false,
  async: true
});

const users = [
  "Joe",
  "Orin",
  "Bob",
  "Satchmo"
]

router.get('/users', async ctx => {
  await ctx.render('index', {
    users: users
  });
});

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