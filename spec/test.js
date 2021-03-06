const functions = require('./functions');

// ToDo: add tests for 'seeder.js'
// eg:
// check db connection
// check for db
//   if db exists, 
//     drop db
//   else,
//     run seeder and check for
//   - instance of db name
//   - collection name
//   - number of 'items' compared with 'documentLimit' count 

describe('`similaritems` API calls by ID', () => {

  test('Should fetch `relatedTo` from DB by ID', () => {
    return functions.fetchItems()
      .then(data => expect(data.items.length).toBeGreaterThan(0))
  });

  test('Items fetched from DB should number <= to 6', () => {
    return functions.fetchItems()
      .then(data => expect(data.items.length).toBeLessThanOrEqual(6))
  });

  test('return data from api call should be type of `object`', () => {
    return functions.dataType()
      .then(data => expect(data).toMatch('object'))
  });

  test('return `items` from api call should be type of `array`', () => {
    return functions.itemsType()
      .then(data => expect(data).toMatch('array'))
  });

  test('return item from api call should have relatedTo ID that matches call', () => {
    return functions.fetchItems()
      .then(data => {
        expect(data.items[0].relatedTo).toBe(46)
      })
  });

});