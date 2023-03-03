import { Module } from "@nestjs/common"
import { ExampleController } from "../example/example.controller"
import { AppController } from "./app.controller"

@Module({
  controllers: [AppController, ExampleController],
  imports: [],
})
export class AppModule {}
