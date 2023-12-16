import { Injectable } from "@nestjs/common";

@Injectable({})
export class UserService{
	getLogin(): any {
		return { msg: 'Hello' };
	}

	getSignUp(): any {
		return { msg: 'Also hello' }
	}
}