export interface User {
  id: number;
  imageUrl: string;
  prefix: string;
  name: string;
  lastName: string;
  title: string;
  email: string;
  ipAddress: string;
  jobArea: string;
  jobType: string;
  company: {
    name: string;
    suffix: string;
  };
  address: {
    zipCode: string;
    city: string;
    streetAddress: string;
    country: string;
    state: string;
  };
}

export interface UserItem {
  name: string;
  imageUrl: string;
  prefix: string;
  lastName: string;
  title: string;
  id: number;
}
