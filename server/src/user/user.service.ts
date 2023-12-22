import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "entities/user.entity";
import { Model } from "mongoose";
import { AccountDto } from "./dto";

@Injectable({})
export class UserService{
  constructor(
    @InjectModel('users') private readonly userModel: Model<UserDocument>
  ) {}

	getLogIn(): any {
		return { msg: 'Hello' };
	}

	getSignUp(): any {
		return { msg: 'Also hello' }
	}

  async func(dto: AccountDto): Promise<any> {
    const newUser = new this.userModel(dto);
    return newUser.save();
  }
}