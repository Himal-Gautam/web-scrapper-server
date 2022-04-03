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

fetchAmazonProducts().then((shelves) => {
  console.log(shelves)
    try {
      Product.deleteMany({})
      Product.insertMany(shelves);
    } catch (e) {
      console.log('not inserted')
    }
  });

// const fetchFlipkartProducts = async () => {
//     try {
//         const response = await axios.get('https://www.amazon.in/s?k=electronic&crid=2RFQ12NV3CQF4&sprefix=electronic%2Caps%2C579&ref=nb_sb_noss');

//         const html = response.data;

//         const $ = cheerio.load(html);

//         const shelves = [];

//         $('div.sg-col-4-of-12.s-result-item.s-asin.sg-col-4-of-16.sg-col.s-widget-spacing-small.sg-col-4-of-20').each((_idx, el) => {
//             const shelf = $(el)
//             // const title = shelf.find('span.a-size-medium.a-color-base.a-text-normal').text()
//             // const image = shelf.find('img.s-image').attr('src')
//             // const stars = shelf.find('div.a-section.a-spacing-none.a-spacing-top-micro > div > span').attr('aria-label')

//     // const price = shelf.find('span.a-price > span.a-offscreen').text()

//             let element = {
//                 // title,
//                 // image,
//                 // stars,
//                 // price
//             }

//             shelves.push(element)
//         });

//         return shelves;
//     } catch (error) {
//         throw error;
//     }
//  };

// fetchFlipkartProducts().then((shelves) => console.log(shelves));
