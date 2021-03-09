import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Contact } from './contact.entity'

interface PaginatedOptions {
  pageSize: number
  currentPage: number
}
@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>,
  ) {}

  async findAll(): Promise<Contact[]> {
    return this.contactRepository.find({})
  }

  async findAllPaginated(
    options: PaginatedOptions,
  ): Promise<[Contact[], number]> {
    let query = this.contactRepository
      .createQueryBuilder('contact')
      .offset(options.currentPage * options.pageSize)
      .limit(options.pageSize)

    return [await query.getMany(), await query.getCount()]
  }

  async create(contact: Contact): Promise<boolean> {
    await this.contactRepository.save(contact)
    return true
  }
}
