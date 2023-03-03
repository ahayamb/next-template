import { Controller, Get, UseGuards } from "@nestjs/common"
import { AuthGuard } from "../guard/auth.guard"

@Controller("app")
export class AppController {
  @Get("/hello")
  helloWorld() {
    return "Hello, wanderer"
  }

  @Get("/protected")
  @UseGuards(AuthGuard)
  protected() {
    return "I am protected!"
  }
}
