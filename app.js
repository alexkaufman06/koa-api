const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
  ctx.body = "Hello it's me... KOA" // ctx is an object that encapsulates 2 objects (node request and response objects)
});

app.listen(3000);