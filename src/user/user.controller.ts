/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('users')
export class UserController{
    constructor(private userService:UserService){}

    @Get()
    getAllUsers(){
        return this.userService.getAllUsers();
    }
    
    @Get(':id')
    getUserById(@Param('id') id:number){
        return this.userService.getUserById(id);
    }

    @Post()
    createUser(@Body() user:any){
        return this.userService.createUser(user);
    }

    @Put(':id')
    updateUser(@Param('id') id:number, @Body() user:any){
        return this.userService.updateUser(id,user);
    }

    @Delete(':id')
    deleteUser(@Param('id') id:number){
        return this.userService.deleteUser(id);
    }

}