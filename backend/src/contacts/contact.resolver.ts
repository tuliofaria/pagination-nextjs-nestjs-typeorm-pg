import { Resolver, Query, Args } from '@nestjs/graphql'
import { ContactService } from './contact.service'
import { ContactPaginated, ContactPublic } from './dto/contact'
import { ContactPaginationInput } from './dto/contact.pagination.input'

@Resolver(of => ContactPublic)
export class ContactResolver {
  constructor(private readonly contactService: ContactService) {}

  @Query(returns => [ContactPublic], { name: 'getAllContacts' })
  async getAllContacts(): Promise<ContactPublic[]> {
    return await this.contactService.findAll()
  }

  @Query(returns => ContactPaginated, { name: 'getAllContactsPaginated' })
  async getAllContactsPaginated(
    @Args('paginationOptions', { nullable: true })
    paginationOptions?: ContactPaginationInput,
  ): Promise<ContactPaginated> {
    const pageSize =
      paginationOptions && paginationOptions.pageSize
        ? paginationOptions.pageSize
        : 10
    const currentPage =
      paginationOptions && paginationOptions.currentPage
        ? paginationOptions.currentPage
        : 0
    const [contacts, total] = await this.contactService.findAllPaginated({
      currentPage,
      pageSize,
    })

    const contactPaginated: ContactPaginated = {
      data: contacts,
      total,
    }
    return contactPaginated
  }
}
