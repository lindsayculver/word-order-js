describe('wordOrder', function() {
  it('return the count of one word', function() {
    expect(wordOrder("phoenix")).to.eql({'phoenix': 1});
  });

  it('return the count of each entered word in a sentence', function() {
    expect(wordOrder("this is a phoenix")).to.eql({'this': 1, 'is': 1, 'a': 1, 'phoenix': 1});
  });

  it('return the count of a word that appears twice in a phrase', function() {
    expect(wordOrder("this phoenix is a phoenix")).to.eql({'this': 1, 'is': 1, 'a': 1, 'phoenix': 2});
  });

  it('return the count of words that appear twice', function() {
    expect(wordOrder("the phoenix is the best phoenix")).to.eql({'the': 2, 'is': 1, 'best': 1, 'phoenix': 2});
  })
});
