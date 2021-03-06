const CustomerModel = require('../../models/Customer.model.js');

class Customer extends CustomerModel{

      migration = 1;

     constructor(){ 
         super(); 
         var me = this; 
         me.int('id') 
         me.string('name'); 
         return me; 
     }

     trigger = async () =>{ 
         var me = this; 
         await me.struct(); 
         process.exit(1);
     }

}

(new Customer()).trigger();