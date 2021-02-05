import 'reflect-metadata';
import dotenv from 'dotenv';
import Koa from 'koa';
import {
  RoutingControllersOptions,
  useContainer,
  useKoaServer,
} from 'routing-controllers';
import Container from 'typedi';

useContainer(Container);

dotenv.config();

const PORT = process.env.PORT;
const app = new Koa();

const routingControllersOptions: RoutingControllersOptions = {
  defaultErrorHandler: false,
  controllers: [`${__dirname}/**/*.controller.ts`],
};
useKoaServer(app, routingControllersOptions);

app.listen(PORT);

console.log(`Server is running at port:${PORT}`);
