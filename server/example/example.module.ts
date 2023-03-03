import { Module } from "@nestjs/common";
import { ExampleController } from "./example.controller";

@Module({
  controllers: [ExampleController],
  imports: []
})
export class ExampleModule {}
