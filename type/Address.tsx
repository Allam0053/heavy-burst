import Geo from './Geo'

type Address = {
  street?: String;
  suite?: String;
  city?: String;
  zipcode?: String;
  geo?: Geo;
}

export default Address;