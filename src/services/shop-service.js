
export default class ShopStoreService {

    data = [
    {
        id: 1,
        title: 'Apple iPhone 12 Pro 128GB Graphite',
        price: 689900,
        coverImage: 'https://www.zigzag.am/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/w/w/wwru_iphone12pro_q121_pacificblue_pdp-image-1b.jpg'
    },
      {
        id: 2,
        title: 'Apple iPhone 12 Pro 512GB Gold',
        price: 850900,
        coverImage: 'https://www.mobilecentre.am/img/prodpic/114244.jpg'
    },
    {
        id: 3,
        title: 'Apple iPhone 12 64GB (PRODUCT)RED',
        price: 55490,
        coverImage: 'https://www.mobilecentre.am/img/prodpic/114220.jpg'
    }
    ];

  
    getData() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.floor(Math.random() * 25) > 5) {
            reject(new Error('Something bad happened'));
          } else {
            resolve(this.data);
          }
        }, 700);
      });
    }
  }