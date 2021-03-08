import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ContactController } from './contact.controller'
import { Contact } from './contact.entity'
import { ContactResolver } from './contact.resolver'
import { ContactService } from './contact.service'

@Module({
  imports: [TypeOrmModule.forFeature([Contact])],
  providers: [ContactService, ContactResolver],
  controllers: [ContactController],
})
export class ContactModule {}
