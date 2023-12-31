import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TicketServiceBase } from "./base/ticket.service.base";

@Injectable()
export class TicketService extends TicketServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
