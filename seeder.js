const faker = require('faker');
const db = require('./database/index.js');

const seedDb = () => {
  let documentLimit = 500;
  let id = 1;
  let seeds = [];

  while (documentLimit > 0) { // generate a document object (seed).
    // add image attributes data:
    let seed = {};
    let lorem7 = faker.lorem.words(7);
    let product = 'Apple iPhone 6, ' + lorem7; // <<- randomize some of the title/product info
    var keywords = product.toLowerCase().replace(/[,]+/g, "");
    keywords = keywords.split(' ');

    seed.id = id;
    seed.relatedTo = faker.random.number(99) + 1;
    seed.product = product;
    seed.keywords = keywords;
    seed.imageSrc = 'https://service-similar-products-ij.s3-us-west-1.amazonaws.com/' + (faker.random.number(99) + 1) + '.jpg';
    seed.imageAlt = product;
    seed.imageId = 'comparison-image';
    seed.description = product + '. ' + faker.lorem.sentence();
    seed.stars = faker.random.number(5); // random number 0 - 5
    seed.reviews = faker.random.number(5000);
    seed.price = faker.random.number(500);
    seed.shipping = faker.lorem.words(3);
    seed.seller = faker.company.companyName();
    seed.cameraDescription = '8 MP, ' + faker.lorem.words(3);
    seed.screenSize = '4.7 in';
    seed.dimensions = '5.44 x 0.28 x 2.64 in';
    seed.weight = '5.04 ounces';
    seed.operatingSystem = 'ios';
    // push completed seed to array of objects (seeds).
    seeds.push(seed);
    // decrement our documentLimit by 1
    documentLimit -= 1;
    id++;
  }
  // once documentLimit is === 0, call our 'save' function to add seeds to db
  db.save(seeds);
};

seedDb();
