import { Controller, Get, Param, Query } from '@nestjs/common'
import { Contact } from './contact.entity'
import { ContactService } from './contact.service'

interface PaginatedContacts {
  data: Contact[]
  pagination: {
    total: number
    pageSize: number
    currentPage: number
  }
}
@Controller('contacts')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Get()
  async getAll(): Promise<Contact[]> {
    const contacts = await this.contactService.findAll()
    return contacts
  }

  @Get('paginated')
  async getPaginated(
    @Query('pageSize') pageSize: number = 10,
    @Query('currentPage') currentPage: number = 0,
  ): Promise<PaginatedContacts> {
    const [contacts, total] = await this.contactService.findAllPaginated({
      pageSize,
      currentPage,
    })
    const result: PaginatedContacts = {
      data: contacts,
      pagination: {
        total,
        pageSize,
        currentPage,
      },
    }
    return result
  }

  @Get('generate-db')
  async generateDB(): Promise<string> {
    const data = [
      { name: 'Angelle Bolsover', email: 'abolsover0@wordpress.org' },
      { name: 'Pansie Glazer', email: 'pglazer1@webnode.com' },
      { name: 'Blondell Makinson', email: 'bmakinson2@google.it' },
      { name: 'Eugenie Dressel', email: 'edressel3@163.com' },
      { name: 'Shanna Spadoni', email: 'sspadoni4@clickbank.net' },
      { name: 'Yolande Giacomucci', email: 'ygiacomucci5@mac.com' },
      { name: 'Bernardina Antonetti', email: 'bantonetti6@flavors.me' },
      { name: 'Debbie Drains', email: 'ddrains7@psu.edu' },
      { name: 'Nikolaus Barbe', email: 'nbarbe8@nature.com' },
      { name: 'Renelle Shrubshall', email: 'rshrubshall9@admin.ch' },
      { name: 'Jamison Willford', email: 'jwillforda@elegantthemes.com' },
      { name: 'De Zamora', email: 'dzamorab@scientificamerican.com' },
      { name: 'Gilberto Bowen', email: 'gbowenc@zimbio.com' },
      { name: 'Vanda McIlenna', email: 'vmcilennad@yelp.com' },
      { name: 'Hersh Capron', email: 'hcaprone@discovery.com' },
      { name: 'Madalena Lambis', email: 'mlambisf@indiatimes.com' },
      { name: 'Karyl Joplin', email: 'kjopling@hp.com' },
      { name: 'Conny Ormshaw', email: 'cormshawh@mozilla.com' },
      { name: 'Desi Annott', email: 'dannotti@kickstarter.com' },
      { name: 'Cynthea Freke', email: 'cfrekej@utexas.edu' },
      { name: 'Anson Weightman', email: 'aweightmank@cdbaby.com' },
      { name: 'Claudell Stratton', email: 'cstrattonl@amazon.co.jp' },
      { name: 'Gabey Slimm', email: 'gslimmm@diigo.com' },
      { name: 'Kimberlee Beceril', email: 'kbeceriln@ning.com' },
      { name: 'Enrico Thaine', email: 'ethaineo@gmpg.org' },
      { name: 'Shell Adlam', email: 'sadlamp@1688.com' },
      { name: 'Kimmi Noades', email: 'knoadesq@51.la' },
      { name: 'Olympe Harron', email: 'oharronr@yellowpages.com' },
      { name: 'Stanly Wadworth', email: 'swadworths@qq.com' },
      { name: 'Suzann Edlyn', email: 'sedlynt@google.fr' },
      { name: 'Axel Crank', email: 'acranku@example.com' },
      { name: 'Matti Canizares', email: 'mcanizaresv@earthlink.net' },
      { name: 'My Moger', email: 'mmogerw@state.gov' },
      { name: 'Tremayne Bresnen', email: 'tbresnenx@marketwatch.com' },
      { name: 'Erskine Minkin', email: 'eminkiny@themeforest.net' },
      { name: 'Merrielle Bowra', email: 'mbowraz@wix.com' },
      { name: 'Dennet Normanton', email: 'dnormanton10@disqus.com' },
      { name: 'Damara Danforth', email: 'ddanforth11@artisteer.com' },
      { name: 'Odelle Thresher', email: 'othresher12@abc.net.au' },
      { name: 'Brook Salters', email: 'bsalters13@imgur.com' },
      { name: 'Marci Bettenson', email: 'mbettenson14@ihg.com' },
      { name: 'Connie Schwandt', email: 'cschwandt15@cnbc.com' },
      { name: 'Roze Banaszewski', email: 'rbanaszewski16@histats.com' },
      { name: 'Teressa Heckney', email: 'theckney17@yelp.com' },
      { name: 'Min Wintour', email: 'mwintour18@prnewswire.com' },
      { name: 'Chandler Bendare', email: 'cbendare19@sciencedaily.com' },
      { name: 'Harman Cornthwaite', email: 'hcornthwaite1a@freewebs.com' },
      { name: 'Bastian Jobke', email: 'bjobke1b@vimeo.com' },
      { name: 'Rhianna Branno', email: 'rbranno1c@hibu.com' },
      { name: 'Stacee Schaffler', email: 'sschaffler1d@google.ru' },
      { name: 'Domingo Edgecumbe', email: 'dedgecumbe1e@epa.gov' },
      { name: 'Farand Dowsey', email: 'fdowsey1f@myspace.com' },
      { name: 'Martin Storton', email: 'mstorton1g@wsj.com' },
      { name: 'Othella Ruberry', email: 'oruberry1h@163.com' },
      { name: 'Petrina Ingleston', email: 'pingleston1i@usa.gov' },
      { name: 'Moritz Garces', email: 'mgarces1j@tinyurl.com' },
      { name: 'Hugo Bartlet', email: 'hbartlet1k@craigslist.org' },
      { name: 'Margo Greenlies', email: 'mgreenlies1l@dell.com' },
      { name: 'Luther Fosdyke', email: 'lfosdyke1m@ed.gov' },
      { name: 'Tadeo Otham', email: 'totham1n@google.com.au' },
      { name: 'Gigi Oven', email: 'goven1o@ibm.com' },
      { name: 'Alasdair Barthelme', email: 'abarthelme1p@bbc.co.uk' },
      { name: 'Hobard Isaac', email: 'hisaac1q@google.fr' },
      { name: 'Rennie Ayers', email: 'rayers1r@earthlink.net' },
      { name: 'Laurette Ramalho', email: 'lramalho1s@seattletimes.com' },
      { name: 'Shellysheldon Georgeon', email: 'sgeorgeon1t@clickbank.net' },
      { name: 'Delcine Hayman', email: 'dhayman1u@symantec.com' },
      { name: 'Rhody Tolan', email: 'rtolan1v@reference.com' },
      { name: 'Meade Physick', email: 'mphysick1w@google.com.hk' },
      { name: 'Vinny Shrigley', email: 'vshrigley1x@newsvine.com' },
      { name: 'Kariotta Godsal', email: 'kgodsal1y@huffingtonpost.com' },
      { name: 'Lina Wetter', email: 'lwetter1z@fotki.com' },
      { name: 'Malvin Kirkpatrick', email: 'mkirkpatrick20@cyberchimps.com' },
      { name: 'Kennedy Bausmann', email: 'kbausmann21@guardian.co.uk' },
      { name: 'Michal Craigheid', email: 'mcraigheid22@webs.com' },
      { name: 'Rooney Gutteridge', email: 'rgutteridge23@google.com.au' },
      { name: 'Dilly Basso', email: 'dbasso24@jalbum.net' },
      { name: 'Parrnell Braid', email: 'pbraid25@blogger.com' },
      { name: 'Aristotle Ebbotts', email: 'aebbotts26@linkedin.com' },
      { name: 'Sherwin Vigers', email: 'svigers27@etsy.com' },
      { name: 'Tome Galiford', email: 'tgaliford28@oracle.com' },
      { name: 'Faun Laister', email: 'flaister29@godaddy.com' },
      { name: 'Kelci Doohan', email: 'kdoohan2a@indiatimes.com' },
      { name: 'Lyn Oliva', email: 'loliva2b@nsw.gov.au' },
      { name: 'Agatha Rolph', email: 'arolph2c@discovery.com' },
      { name: 'Isidora Witherop', email: 'iwitherop2d@wikipedia.org' },
      { name: 'Jillane Harm', email: 'jharm2e@sciencedaily.com' },
      { name: 'Gustave Baine', email: 'gbaine2f@sciencedirect.com' },
      { name: 'Say Malacrida', email: 'smalacrida2g@wordpress.org' },
      { name: 'Augustina Lehrer', email: 'alehrer2h@jimdo.com' },
      { name: 'Arabela Ibbs', email: 'aibbs2i@amazon.com' },
      { name: 'Abeu Stenyng', email: 'astenyng2j@163.com' },
      { name: 'Tristam Biddleston', email: 'tbiddleston2k@goo.ne.jp' },
      { name: 'Nickolas Ayre', email: 'nayre2l@goo.gl' },
      { name: 'Stacia Warrener', email: 'swarrener2m@guardian.co.uk' },
      { name: 'Claudetta Snook', email: 'csnook2n@psu.edu' },
      { name: 'Brande Connichie', email: 'bconnichie2o@wired.com' },
      { name: 'Georgina Matitiaho', email: 'gmatitiaho2p@ycombinator.com' },
      { name: 'Cookie Neal', email: 'cneal2q@newsvine.com' },
      { name: 'Tamarra Dowling', email: 'tdowling2r@tinypic.com' },
      { name: 'Nanete Stit', email: 'nstit2s@bloomberg.com' },
      { name: 'Jobey Havercroft', email: 'jhavercroft2t@moonfruit.com' },
      { name: 'Siobhan Demsey', email: 'sdemsey2u@vkontakte.ru' },
      { name: 'Marwin Honsch', email: 'mhonsch2v@vistaprint.com' },
      { name: 'Jermaine Ogelsby', email: 'jogelsby2w@nba.com' },
      { name: 'Beryle Matuschek', email: 'bmatuschek2x@umn.edu' },
      { name: 'Gaylene Spyvye', email: 'gspyvye2y@umn.edu' },
      { name: 'Wandie Slyme', email: 'wslyme2z@mozilla.com' },
      { name: 'Wiatt Claricoates', email: 'wclaricoates30@smh.com.au' },
      { name: 'Dalt Dowderswell', email: 'ddowderswell31@chron.com' },
      { name: 'Arny Gascard', email: 'agascard32@adobe.com' },
      { name: 'Kiah Stigger', email: 'kstigger33@ox.ac.uk' },
      { name: 'Lillis Mechell', email: 'lmechell34@merriam-webster.com' },
      { name: 'Halsey Domelaw', email: 'hdomelaw35@census.gov' },
      { name: 'Bald McKniely', email: 'bmckniely36@tiny.cc' },
      { name: 'Antony Mangon', email: 'amangon37@java.com' },
      { name: 'Daphene Burtonshaw', email: 'dburtonshaw38@tuttocitta.it' },
      { name: 'Sallyanne Plumbley', email: 'splumbley39@google.co.jp' },
      { name: 'Major Malster', email: 'mmalster3a@acquirethisname.com' },
      { name: 'Shannon Drust', email: 'sdrust3b@google.co.jp' },
      { name: 'Constantia Scutching', email: 'cscutching3c@auda.org.au' },
      { name: 'Sheela Hincks', email: 'shincks3d@nbcnews.com' },
      { name: 'Dorris Croshaw', email: 'dcroshaw3e@europa.eu' },
      { name: 'Morlee Maynard', email: 'mmaynard3f@usatoday.com' },
      { name: 'Giorgia Costanza', email: 'gcostanza3g@dyndns.org' },
      { name: 'Austen Prin', email: 'aprin3h@miibeian.gov.cn' },
      { name: 'Carlynne Baudon', email: 'cbaudon3i@reference.com' },
      { name: 'Brodie McErlaine', email: 'bmcerlaine3j@eepurl.com' },
      { name: 'Carmine Whiting', email: 'cwhiting3k@163.com' },
      { name: 'Francois MacGorrie', email: 'fmacgorrie3l@livejournal.com' },
      { name: 'Zahara Dobbison', email: 'zdobbison3m@blogger.com' },
      { name: 'Ashby Pettigrew', email: 'apettigrew3n@mozilla.org' },
      { name: 'Pammie Donaghy', email: 'pdonaghy3o@quantcast.com' },
      { name: 'Bailey Aujean', email: 'baujean3p@domainmarket.com' },
      { name: 'Timoteo Casaroli', email: 'tcasaroli3q@theatlantic.com' },
      { name: 'Quentin Obispo', email: 'qobispo3r@tmall.com' },
      { name: 'Roxana Cornelis', email: 'rcornelis3s@bigcartel.com' },
    ]
    for await (const contact of data) {
      const newContact = new Contact()
      newContact.name = contact.name
      newContact.email = contact.email
      await this.contactService.create(newContact)
    }
    return 'DB generated!'
  }
}
