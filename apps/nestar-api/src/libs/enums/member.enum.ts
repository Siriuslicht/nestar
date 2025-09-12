// enumlarni bevosita graphqlni ichida ishlatib bomaydi.
// enumlarni royxatga oladigan import kerak:
import { registerEnumType } from "@nestjs/graphql";

export enum MemberType {
   USER = "USER",
   AGENT = "AGENT",
   ADMIN = "ADMIN",
}
registerEnumType(MemberType, {name: "MemberType"})
// endi enum MemberType enum graphqlda ishlaydi.

export enum MemberStatus {
  ACTIVE = "ACTIVE",
  BLOCK = "BLOCK",
  DELETE = "DELETE",
}
registerEnumType(MemberStatus, {name: "MemberStatus"})

export enum MemberAuthType {
   PHONE = "PHONE",
   EMAIL = "EMAIL",
   TELEGRAM = "TELEGRAM",
}
registerEnumType(MemberAuthType, {name: "MemberAuthType"})
