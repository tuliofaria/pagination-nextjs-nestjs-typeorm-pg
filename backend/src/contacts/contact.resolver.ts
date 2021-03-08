import { Resolver, Query } from '@nestjs/graphql'
import { ContactService } from './contact.service'
import { ContactPublic } from './dto/contact'

@Resolver(of => ContactPublic)
export class ContactResolver {
  constructor(private readonly contactService: ContactService) {}

  @Query(returns => [ContactPublic], { name: 'getAllContacts' })
  async getAllContacts(): Promise<ContactPublic[]> {
    return await this.contactService.findAll()
  }
}
