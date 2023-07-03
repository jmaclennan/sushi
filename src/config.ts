import { routes } from "routes";

const name = "Japanese Cuisine"
const description = "Japanese Cuisine"
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
    route: routes.home,
  },
  {
    id: 'nav2',
    name: 'Nav Item 2',
    route: routes.home,
  },
  {
    id: 'contact',
    name: 'Contact',
    route: routes.contact,
  },
]

export const hours: { days: string, hours: string }[] = [
  {
    days: "Monday" ,
    hours: "11 AM - 9 PM",
  },
  {
    days: "Tuesday" ,
    hours: "11 AM - 9 PM",
  },
  {
    days: "Wednesday" ,
    hours: "11 AM - 10 PM",
  },
  {
    days: "Thursday" ,
    hours: "11 AM - 10 PM",
  },
  {
    days: "Friday" ,
    hours: "11 AM - 10 PM",
  },
  {
    days: "Saturday" ,
    hours: "11 AM - 10 PM",
  },
  {
    days: "Sunday" ,
    hours: "11 AM - 9 PM",
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
  hours,
}