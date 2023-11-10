interface rate {
    "rate":number,
    "count":number 
}
export default class Product {
    "title":string =  "" ; 
    "price":number =  0 ; 
    "description":string = "" ; 
    "category":string =  "" ;
    "image":string =  "" ;
    "rating":rate =  {
        "rate":  5,
        "count":  200
    }
};
