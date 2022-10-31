export class Geo {
    Lat: number = 0;
    Lng: number = 0;
}

export class Address {
    Street: string = "";
    Suite: string = "";
    City: string = "";
    State: string = "";
    ZipCode: string = "";
    Geo: Geo = new Geo();
}

export class Company {
    Name: string = '';
    CatchPhrase: string = '';
    Bs: string = '';
}
   
export class JPHUser {
    Id: number = 0;
    UserName: string = "";
    Email: string = '';
    Address: Address = new Address();
    Password: string = '';
    FirstName: string = '';
    MI: string = '';
    LastName: string = '';
    Suffix: string = '';
    Phone: string = '';
    Website: string = '';
    Company: Company = new Company;
    Role: string = '';
}
