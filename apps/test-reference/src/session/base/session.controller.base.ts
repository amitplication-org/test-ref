/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { SessionService } from "../session.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SessionCreateInput } from "./SessionCreateInput";
import { SessionWhereInput } from "./SessionWhereInput";
import { SessionWhereUniqueInput } from "./SessionWhereUniqueInput";
import { SessionFindManyArgs } from "./SessionFindManyArgs";
import { SessionUpdateInput } from "./SessionUpdateInput";
import { Session } from "./Session";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SessionControllerBase {
  constructor(
    protected readonly service: SessionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Session })
  @nestAccessControl.UseRoles({
    resource: "Session",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: SessionCreateInput): Promise<Session> {
    return await this.service.create({
      data: {
        ...data,

        event: {
          connect: data.event,
        },
      },
      select: {
        id: true,
        name: true,
        speaker: true,
        time: true,

        event: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Session] })
  @ApiNestedQuery(SessionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Session",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Session[]> {
    const args = plainToClass(SessionFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        name: true,
        speaker: true,
        time: true,

        event: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Session })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Session",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: SessionWhereUniqueInput
  ): Promise<Session | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        name: true,
        speaker: true,
        time: true,

        event: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Session })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Session",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: SessionWhereUniqueInput,
    @common.Body() data: SessionUpdateInput
  ): Promise<Session | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          event: {
            connect: data.event,
          },
        },
        select: {
          id: true,
          name: true,
          speaker: true,
          time: true,

          event: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Session })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Session",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: SessionWhereUniqueInput
  ): Promise<Session | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          name: true,
          speaker: true,
          time: true,

          event: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}