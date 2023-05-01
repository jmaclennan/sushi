const name = "Radon Solutions Alberta"
const description = "Radon gas testing and mitigation solutions in Edmonton, Calgary and Alberta"
const phone = 7806522440;
const email = 'info@radonsolutionsalberta.ca'
const address = ['Edmonton, Alberta']
const socials = {
  facebook: 'https://www.facebook.com/radonsolutionsalberta/',
  instagram: 'https://www.instagram.com/radonsolutionsalberta/',
}

type NavItem = {
  id: string,
  name: string,
  route: string,
}

export const nav: NavItem[] = [
  {
    id: 'home',
    name: 'Home',
    route: '/',
  },
  {
    id: 'testing',
    name: 'Testing',
    route: '/services/testing',
  },
  {
    id: 'mitigation',
    name: 'Mitigation',
    route: '/services/mitigation',
  },
]


export const config = {
  name,
  description,
  phone,
  email,
  address,
  socials,
  nav,
}