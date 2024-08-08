const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    p_name: { type: String  },
    category: { type: String  },
    p_desc: { type: String  },
    p_price: { type: Number  },
    status: { type: String  },
    p_qty: { type: Number  },
    rate: { type: Number  },
    image: { type: String  }
},{ collection: 'Product' });

const productModel = mongoose.model('Product', productSchema);

module.exports = productModel;

