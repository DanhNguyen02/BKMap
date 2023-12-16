import { ApiProperty } from "@nestjs/swagger";

export class Comment {
  @ApiProperty({
    example: 2,
    description: "Id of user who comment"
  })
  userId: number;

  @ApiProperty({
    example: 'Messi là GOAT',
    description: "Comment content"
  })
  content: string;
}