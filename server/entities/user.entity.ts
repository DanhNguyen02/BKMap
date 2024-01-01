import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from "mongoose";

export type UserDocument = User & Document

@Schema()
export class User {
  @ApiProperty({
    example: 'whattimeisit',
    description: 'Username of user account'
  })
  @Prop()
  username: string;

  @ApiProperty({
    example: 'baygiokemmuoi',
    description: "Account password"
  })
  @Prop()
  password: string;

  @ApiProperty({
    example: 'Lionel',
    description: "User's first name"
  })
  @Prop()
  firstName: string;

  @ApiProperty({
    example: 'Messi',
    description: "User's last name"
  })
  @Prop()
  lastName: string;

  @ApiProperty({
    example: 'lionelmessi@argentina.com',
    description: "User's email"
  })
  @Prop()
  email: string;

  @ApiProperty({
    example: '0123456789',
    description: "User's phone number"
  })
  @Prop()
  phone: string;

  @ApiProperty({
    example: 'cat',
    description: "Security question: favourite animal"
  })
  @Prop()
  pet: string;

  @ApiProperty({
    example: 'zaniolo',
    description: "Security question: favourite person"
  })
  @Prop()
  person: string;

  @ApiProperty({
    example: '/images/messi_trophy.png',
    description: "User's avatar link"
  })
  @Prop()
  avatar: string;
}

export const UserSchema = SchemaFactory.createForClass(User);