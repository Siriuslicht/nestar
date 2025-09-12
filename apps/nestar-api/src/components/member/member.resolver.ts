import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { MemberService } from './member.service';

@Resolver()
export class MemberResolver {
   constructor( private readonly memberService: MemberService) {}

   @Mutation(()=> String)
   public async signup(): Promise<String>{
      console.log("Mutation: Signup");
      return this.memberService.signup();
   }

   @Mutation(() => String ) 
   public async login(): Promise<String>{
      console.log("Mutaton: login");
      return this.memberService.login();
   }

   @Mutation(() => String ) 
   public async updateMember(): Promise<String>{
      console.log("Mutaton: updateMember");
      return this.memberService.updateMember();
   }

   @Query(() => String)
   public async getMember(): Promise<string> {
      console.log("Query: getMember!");
      return this.memberService.getMember();
   }   
}
