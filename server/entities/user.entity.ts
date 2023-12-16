import { ApiProperty } from "@nestjs/swagger";

export class User {
  @ApiProperty({
    example: 'whattimeisit',
    description: 'Username of user account'
  })
  username: string;

  @ApiProperty({
    example: 'baygiokemmuoi',
    description: "Account password"
  })
  password: string;

  @ApiProperty({
    example: 'Lionel',
    description: "User's first name"
  })
  firstName: string;

  @ApiProperty({
    example: 'Messi',
    description: "User's last name"
  })
  lastName: string;

  @ApiProperty({
    example: 'lionelmessi@argentina.com',
    description: "User's email"
  })
  email: string;

  @ApiProperty({
    example: '0123456789',
    description: "User's phone number"
  })
  phone: string;

  @ApiProperty({
    example: '/images/messi_trophy.png',
    description: "User's avatar link"
  })
  avatar: string;
}