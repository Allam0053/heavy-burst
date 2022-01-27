import { Key } from 'react'
import Address from './Address'
import Company from './Company'

type Blog = {
  id?: Key;
  name?: String;
  username?: String;
  email?: String;
  address?: Address;
  phone?: String;
  website?: String;
  company?: Company;
}

export default Blog;