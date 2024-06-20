import { Body, Controller, Get,Post,Request } from "@nestjs/common";
import { AidService } from "./aid.service";
import { Roles } from "src/user/roles/roles.decorator";
import { ROLES } from "src/user/roles/roles.enum";
import { CreateAidDto } from "./dto/aid.dto";

@Controller("aid")
export class AidController {
  constructor(private aidService: AidService) {}

  @Roles(ROLES.Applicant)
@Post("new")
async requestAid(@Request() req, @Body() createAidDto: CreateAidDto) {
  const { wardId, service } = createAidDto;
  return await this.aidService.createAidRequest(req.user.userId, wardId, service);
}

  @Roles(ROLES.Ward)
  @Get("ward/pending")
  async getPendingAids(@Request() req) {
    const pendingAids = await this.aidService.findPendingAidsForWard(req.user.userId);
    return { success: true, pendingAids };
  }
  catch(error) {
    return {
      success: false,
      error: error.message || "Failed to fetch pending aids",
    };
  }
}
