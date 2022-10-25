import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';

@Module({
	imports: [
		BooksModule,
		UsersModule,
		MongooseModule.forRoot(
			'mongodb+srv://amedinac:BDy7T3O00ync4YfX@cluster0.eplovzw.mongodb.net/nestjs-library?retryWrites=true&w=majority'
		)
	],
	controllers: [ AppController ],
	providers: [ AppService ]
})
export class AppModule {}
