 import { Resolver } from '@nestjs/graphql';
import { PropertyService } from './property.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Resolver()
export class PropertyResolver {
   constructor(
       @InjectModel("Property") private readonly propertyModel: Model<null>
   ){}
      

}
