const name = "business name"
const description = "business description"
const phone = 1234567890;
const email = 'email@email.email'
const address = ['123 Main Street', 'Beaumont, Alberta', 'T4X 1Z4, Canada']
const socials = {
  facebook: 'https://www.facebook.com/',
  instagram: 'https://www.instagram.com/',
}

type NavItem = {
  id: string,
  name: string,
  route: string,
}

export const nav: NavItem[] = [
  {
    id: 'nav1',
    name: 'Nav Item 1',
    route: '/',
  },
  {
    id: 'nav2',
    name: 'Nav Item 2',
    route: '/',
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