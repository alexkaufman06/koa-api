const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
  console.log('First');
  await next();
  console.log('First done');
});

app.use(async (ctx, next) => {
  console.log('Second');
  await next();
  console.log('Second done');
});

app.use(async (ctx) => {
  ctx.body = 'Hello it\'s me... KOA!'
});

app.listen(3100);