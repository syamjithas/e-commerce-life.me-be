import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: any): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOneByEmail(email: string): Promise<User[]> {
    return this.userModel.find({ email }).exec();
  }
  async comparePassword(password: string, passwordIn: string) {
    const data = await this.userModel.find({ password }).exec();
    return data[0].password == passwordIn;
  }

  // Implement other methods as needed
}
