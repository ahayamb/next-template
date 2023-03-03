import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { Controller, Get, Req, Res, UseGuards } from "@nestjs/common";
import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { getServerSession } from "next-auth/next";
import { AuthGuard } from "../guard/auth.guard";

@Controller('example')
export class ExampleController {
  @Get("/jwt")
  async jwt(@Req() req: NextApiRequest) {
    const secret = process.env.SECRET;
    const token = await getToken({ req, secret })
    
    return JSON.stringify(token, null, 2);
  }

  @Get("/protected")
  @UseGuards(AuthGuard)
  protected() {
    return {
      content: "[From NestJS] This is protected content. You can access this content because you are signed in."
    };
  }

  @Get("/session")
  async session(@Req() req: NextApiRequest, @Res() res: NextApiResponse) {
    const xs = await getServerSession(req, res, authOptions);
    res.send(JSON.stringify(xs, null, 2));
  }
}
