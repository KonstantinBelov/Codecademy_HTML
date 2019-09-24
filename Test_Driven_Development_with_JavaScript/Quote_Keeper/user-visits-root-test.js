const {assert} = require('chai');

describe('User visits root', () => {
  describe('posting a quote', () => {
    it('saves quote and metadata submitted by user', () => {
      // Setup:
      const quote = "Don't fear failure. — Not failure, but low aim, is the crime. In great attempts it is glorious even to fail.";
      const attributed = 'Bruce Lee';
      const source = "Striking Thoughts: Bruce Lee's Wisdom for Daily Living";
      // Exersice:
      browser.url('/');
      browser.setValue('textarea[id=quote]', quote);
      browser.setValue('input[id=attributed]', attributed);
      browser.setValue('input[id=source]', source);
      browser.click('input[type=submit]');
      // Verify:
      assert.include(browser.getText('#quote'), quote);
      assert.include(browser.getText('#quote'), attributed);
      assert.include(browser.getText('#quote'), source);
    })
  })
})