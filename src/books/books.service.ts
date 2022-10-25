import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book, BookDocument } from './schemas/book.schema';
import { Request } from 'express';

@Injectable()
export class BooksService {

  constructor(@InjectModel(Book.name) private readonly bookModel: Model<BookDocument>) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    return this.bookModel.create(createBookDto);
  }

  async findAll(request: Request): Promise<Book[]> {
    return this.bookModel
    .find(request.query)
    .setOptions({ sanitizeFilter: true })
    .exec();
  }

  async findOne(id: string): Promise<Book> {
  return this.bookModel.findById(id).exec();
}

  async update(id: string, updateBookDto: UpdateBookDto): Promise<Book> {
    return this.bookModel.findByIdAndUpdate(id, updateBookDto, { new: true });
  }

  async remove(id: string): Promise<Book> {
    return this.bookModel.findByIdAndDelete(id).exec();
  }
}
