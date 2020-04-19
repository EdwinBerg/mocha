/**
 * Creating a deck of cards
 * @module createdDeck 
 */

module.exports = {
  createDeck() {
    const deck = [],
      suits = ['HEARTS', 'SPADES', 'DIAMONDS', 'CLUBS']

    for (let i = 0; i < suits.length; i++) {

      for (let a = 1; a <= 13; a++) {
        deck.push({ suit: suits[i], value: a })
      }
    }
    let unShuffled = deck
    return deck, unShuffled
  },

  /**
   * Takes the deck and shuffles it.
   * @param {Array} deck - The deck to be shuffled.
   */

  shuffle(deck) {
    let rNumber
    for (let i = 0; i < deck.length; i++) {
      rNumber = Math.floor(Math.random() * 52);
      [deck[i], deck[rNumber]] = [deck[rNumber], deck[i]]
    }
    return deck
  }
}
