import { Controller, Post, Get, Put, Delete, Param, Body } from "@nestjs/common";
import { UserService } from "./user.service";
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AccountDto } from "./dto";
import { User } from "entities/user.entity";

@Controller('user')
@ApiTags('User')
export class UserController{
  constructor(private userService: UserService) {}

	@Post('/signup')
  @ApiOperation({
    summary: 'User signup',
    description: 'User create new account'
  })
  @ApiResponse({
    status: 200,
    description: 'Create account successfully',
  })
	signUp(@Body() dto: AccountDto) {
		return this.userService.func(dto);
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
	logIn(@Body() dto: AccountDto) {
		return this.userService.getLogIn();
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