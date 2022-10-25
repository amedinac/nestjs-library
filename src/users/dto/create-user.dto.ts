import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({ example: 'amedinac' })
    readonly _id: string;

    @ApiProperty({ example: 'John Doe' })
    readonly name: string;

    @ApiProperty({ example: 'john@mail.com'} )
    readonly email: string;

    @ApiProperty({ example: 'USA' })
    readonly country: string;

}
