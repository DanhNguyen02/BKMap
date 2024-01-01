import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "entities/user.entity";
import { Model } from "mongoose";
import { AccountDto } from "./dto";

@Injectable({})
export class UserService{
  constructor(
    @InjectModel('users') private readonly usersModel: Model<UserDocument>
  ) {}

	async getLogIn(username, password){
		return this.usersModel.countDocuments({username: username, password: password}).exec();
	}
  async getAccount(username){
		return this.usersModel.countDocuments({username: username}).exec();
	}

  async getAccountExist(username, pet, person){
		return this.usersModel.countDocuments({username: username, pet: pet, person: person}).exec();
	}

  async getAccountChangePassword(username, password){
    try{
      await this.usersModel.updateOne({username: username}, {password: password}).exec()
      console.log("it happen!");
      return true;
    }
    catch{
      console.log("something happen");
      return false;
    }
		
	}

	getSignUp(): any {
		return { msg: 'Also hello' }
	}

  async func(dto: User): Promise<any> {
    const newUser = new this.usersModel(dto);
    return newUser.save();
  }

  async findAll(){
    return this.usersModel.find().exec();
  }
} 