import express from 'express'
import './db/mongoose.js'
import chalk from 'chalk'
import cors from 'cors'
import 'dotenv/config'
import axios from "axios"
import cheerio from "cheerio"
import productRouter from './routers/product.js'

const app = express()
const port = process.env.PORT || 5000

app.use(productRouter)
app.use(cors())
app.use(express.json())


app.listen(port, () => {
    console.log(chalk.magenta.bold.underline('Server is up on port ') + chalk.blue.bold.underline(port))
})

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

// const fetchAmazonProducts = async () => {
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

// fetchAmazonProducts().then((shelves) => console.log(shelves));













// import userRouter from './routers/user.js'
// import noticeRouter from './routers/notice.js'

// app.use(subjectRouter)
// app.use(noticeRouter)








