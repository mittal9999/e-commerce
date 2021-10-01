import  { products } from './constants/product.js';
import  product from './model/productSchema.js';



const DefaultData =  async() => {
     try {
       await product.deleteMany({});
       await  product.insertMany(products);
        console.log('Data imported successfully');

     }catch (error) {
         console.log('Error:', error.message);
     }
}

export  default DefaultData;