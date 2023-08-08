import { Transform } from "class-transformer"
import { IsNotEmpty } from "class-validator"

export class CreateBlogDto {

    @IsNotEmpty()
    readonly id_author: number

    @IsNotEmpty()
    @Transform(({value}) => value?.toString().trim())
    readonly name: string

    @IsNotEmpty()
    readonly categoryid: number

    @IsNotEmpty()
    @Transform(({value}) => value?.toString().trim())
    readonly content: string

    readonly image?: string[]

    @IsNotEmpty()
    readonly datetime: Date

}