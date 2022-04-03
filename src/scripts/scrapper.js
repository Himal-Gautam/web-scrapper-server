import axios from "axios";
import cheerio from "cheerio";
import Product from "../models/product.js";

const fetchAmazonProducts = async () => {
  try {
    const response = await axios.get(
      "https://www.amazon.in/s?k=electronic&crid=2RFQ12NV3CQF4&sprefix=electronic%2Caps%2C579&ref=nb_sb_noss"
    );

    const html = response.data;

    const $ = cheerio.load(html);

    const products = [];

    $(
      "div.sg-col-4-of-12.s-result-item.s-asin.sg-col-4-of-16.sg-col.s-widget-spacing-small.sg-col-4-of-20"
    ).each((_idx, el) => {
      const item = $(el);
      const title = item.find('span.a-size-base-plus.a-color-base.a-text-normal').text()
      const image = item.find('img.s-image').attr('src')
      const rating = parseInt(item.find('div.a-section.a-spacing-none.a-spacing-top-micro > div > span').attr('aria-label'))
      const price = item.find('span.a-price.a-text-price > span.a-offscreen').text()
      const finalPrice = item.find('span.a-price-whole').text()

      console.log(isNaN(rating))

      let element = {
        title,
        image,
        rating,
        price,
        finalPrice
      };

      products.push(element);
    });

    return products.filter((item) => !isNaN(item.rating));
  } catch (error) {
    throw error;
  }
};

fetchAmazonProducts().then((products) => {
  console.log(products)
    try {
      Product.deleteMany({})
      Product.insertMany(products);
    } catch (e) {
      console.log('not inserted')
    }
  });

  // const fetchFlipkartProducts = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://www.amazon.in/s?k=electronic&crid=2RFQ12NV3CQF4&sprefix=electronic%2Caps%2C579&ref=nb_sb_noss"
  //     );
  
  //     const html = response.data;
  
  //     const $ = cheerio.load(html);
  
  //     const products = [];
  
  //     $(
  //       "div._4ddWPX"
  //     ).each((_idx, el) => {
  //       const item = $(el);
  //       const title = item.find('span.a-size-base-plus.a-color-base.a-text-normal').text()
  //       const image = item.find('img._396cs4._3exPp9').attr('src')
  //       const rating = parseInt(item.find('div._3LWZlK').attr('aria-label'))
  //       const price = item.find('div._3Ay6Sb').text()
  //       const finalPrice = item.find('div._30jeq3').text()
  
  //       console.log(isNaN(rating))
  
  //       let element = {
  //         title,
  //         image,
  //         rating,
  //         price,
  //         finalPrice
  //       };
  
  //       products.push(element);
  //     });
  
  //     return products.filter((item) => !isNaN(item.rating));
  //   } catch (error) {
  //     throw error;
  //   }
  // };
  
  // fetchFlipkartProducts().then((products) => {
  //   console.log("FLIPKART")
  //   console.log(products)
  //     try {
  //       Product.deleteMany({})
  //       Product.insertMany(products);
  //     } catch (e) {
  //       console.log('not inserted')
  //     }
  //   });