const product ={
    fakeDB: [],

    init()
    {
        this.fakeDB.push({title:'1',description:'1111', price:'1.1'});
        this.fakeDB.push({title:'2',description:'2222', price:'2.2'});
        this.fakeDB.push({title:'3',description:'3333', price:'3.3'});
        this.fakeDB.push({title:'4',description:'4444', price:'4.4'});
    },

    getAllProducts()
    {
        return this.fakeDB;
    }
};



product.init();
module.exports = product;