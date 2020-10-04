import { browser } from 'protractor';

describe('Angular-Gulp App', function() {
  it('should have a title', function() {
    browser.get('http://localhost:3000/');

    browser.getTitle().then((title) => {
      expect(title).toEqual('Untitled Document');
    })
  });
});
