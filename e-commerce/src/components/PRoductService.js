import axios from 'axios';

const API_URL = 'https://api.example.com/products';

const ProductService = {
  getAllProducts: async () => {
    const response = await axios.get(API_URL);
    return response.data;
  },
};

export default ProductService;
