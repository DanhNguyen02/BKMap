import { Controller, Post, Get, Put, Delete, Param, Body } from "@nestjs/common";
import { UserService } from "./user.service";
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AccountDto } from "./dto";
import { User } from "entities/user.entity";

@Controller('user')
@ApiTags('User')
export class UserController{
  constructor(private userService: UserService) {}

  @Get()
  async all_data(){
    console.log("I got it!");
    const data = await this.userService.findAll();
    console.log({data: data})
    return {data: data};
  }

	@Post('signup')
  @ApiOperation({
    summary: 'User signup',
    description: 'User create new account'
  })
  @ApiResponse({
    status: 200,
    description: 'Create account successfully',
  })
	async signUp(@Body() dto: User) {
    let num = await this.userService.getAccount(dto.username);
    if(num == 0){
      await this.userService.func(dto);
      return {success: true};
    }
    else return {success: false};
	}

	@Post('login')
  @ApiOperation({
    summary: 'User login',
    description: 'Use account to log in system'
  })
  @ApiResponse({
    status: 200,
    description: 'Log in successfully'
  })
	async logIn(@Body() dto: AccountDto) {
    // console.log("Ole!", dto.username + "ulatroi");
    // let data = {num: 0};
		// this.userService.getLogIn(dto.username, dto.password).then((value) => {
    //   console.log(value);
    //   data.num = value;
    //   console.log(data);
    // }).then(() => {return data;}).catch(console.error);
    //return data;
    let count = await this.userService.getLogIn(dto.username, dto.password);
    return {success: count != 0}
	}

  @Post('account')
  async getAccount(@Body() dto: AccountDto){
    const data = {num: 0};
    data.num = await this.userService.getAccount(dto.username);
    return data;
  }

  @Post('exist')
  async isAccountValid(@Body() dto: User){
    const num = await this.userService.getAccountExist(dto.username, dto.pet, dto.person);
    return {success: num != 0}
  }

  @Post('password')
  async newpass(@Body() dto: AccountDto){
    let success = await this.userService.getAccountChangePassword(dto.username, dto.password);
    console.log(success)
    return {success: success};
  }

  @Get('logout/:id')
  @ApiOperation({
    summary: 'User log out',
    description: 'User log out of system'
  })
  @ApiResponse({
    status: 200,
    description: 'Log out successfully'
  })
  logOut(@Param('id') id: number) {
    return "Log out";
  }

  @ApiOperation({
    summary: 'Get user information',
    description: 'Get user information by id'
  })
  @ApiResponse({
    status: 200,
    description: 'Get user successfully',
    type: User
  })
  @Get('/:id')
  getUser(@Param('id') id: number) {
    return 'Get user';
  }

  @ApiOperation({
    summary: 'Update user information',
    description: 'Update new information to user'
  })
  @ApiResponse({
    status: 200,
    description: 'Update successfully'
  })
  @Put('/:id')
  updateUser(@Param('id') id: number, @Body() user: User) {
    return 'Update user';
  }

  @ApiOperation({
    summary: 'Delete user account',
    description: "It's waste :)"
  })
  @ApiResponse({
    status: 200,
    description: 'Delete successfully'
  })
  @Delete('/:id')
  deleteUser(@Param('id') id: number) {
    return 'Delete user';
  }
}