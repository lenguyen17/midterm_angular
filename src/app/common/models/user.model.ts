interface nameInterface {
    firstname: '',
    lastname: ''
}

interface addressInterface {
    city: '',
    street: '',
    number: 0,
    zipcode: '',
    geolocation: {
        lat: '',
        long: ''
    }
}
export class User {
    id: number = 0;
    email: string = '';
    username: string = '';
    password: string = '';
    name: nameInterface;
    address: addressInterface;
    phone: string = '';

    constructor(
        id: number = 0,
        email: string = '',
        username: string = '',
        password: string = '',
        name: nameInterface = {
            firstname: '',
            lastname: ''
        },
        address: addressInterface = {
            city: '',
            street: '',
            number: 0,
            zipcode: '',
            geolocation: {
                lat: '',
                long: ''
            }
        },
        phone: string = '',
    ) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.password = password;
        this.name = name;
        this.address = address;
        this.phone = phone;
    }
}