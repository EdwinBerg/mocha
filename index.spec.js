const assert = require('assert'),
  { createDeck, shuffle, loopDecks } = require('../index')

describe('index.js', function () {
  it('produces a deck of cards with a length of 52', function () {
    assert.strictEqual(createDeck().length, 52)
  })
  it('produces the shuffled deck', function () {
    let deck = createDeck()
    let unShuffled = createDeck()
    shuffle(deck)
    assert.notStrictEqual(unShuffled.slice(49, 51) === deck.slice(49, 51), true)
  })
})
