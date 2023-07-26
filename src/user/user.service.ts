/* eslint-disable prettier/prettier */

import { Injectable } from "@nestjs/common";
import axios from "axios";

@Injectable()
export class UserService{
    private readonly jsonServerUrl = 'http://localhost:3001';

    async getAllUsers(): Promise<any[]> {
        const response = axios.get(`${this.jsonServerUrl}/users`);
        const data = (await response).data;
        return data;
    }

    async getUserById(id: number): Promise<any>{
        const response = axios.get(`${this.jsonServerUrl}/users/${id}`);
        const data = (await response).data;
        return data;
    }

    async createUser(user: any): Promise<any> {
        const response = await axios.post(`${this.jsonServerUrl}/users`, user);
        const data = response.data;
        return data;
    }

    async deleteUser(id: number): Promise<void> {
        await axios.delete(`${this.jsonServerUrl}/users/${id}`);
    }

    async updateUser(id:number , user: any):Promise<any>{
        const response = await axios.put(`${this.jsonServerUrl}/users/${id}`,user);
        const data = response.data;
        return data;
    }

}