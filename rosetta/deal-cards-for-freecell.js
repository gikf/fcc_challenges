function dealFreeCell(seed) {
  function addCard(card, cardsLeft) {
    const row = Math.floor((51 - cardsLeft) / 8)
    result[row].push(card);
  }

  const cards = [
    'AC', 'AD', 'AH', 'AS',
    '2C', '2D', '2H', '2S',
    '3C', '3D', '3H', '3S',
    '4C', '4D', '4H', '4S',
    '5C', '5D', '5H', '5S',
    '6C', '6D', '6H', '6S',
    '7C', '7D', '7H', '7S',
    '8C', '8D', '8H', '8S',
    '9C', '9D', '9H', '9S',
    'TC', 'TD', 'TH', 'TS',
    'JC', 'JD', 'JH', 'JS',
    'QC', 'QD', 'QH', 'QS',
    'KC', 'KD', 'KH', 'KS',
  ];
  const result = new Array();
  for (let i = 0; i < 7; i++) {
    result.push([])
  }

  let state = seed;
  while (cards.length > 0) {
    state = (214013 * state + 2531011) % 2**31;
    let random_index = Math.floor((state / 2**16) % cards.length);

    [cards[random_index], cards[cards.length - 1]] = [cards[cards.length - 1], cards[random_index]];

    addCard(cards.pop(), cards.length);
  }

  return result;
}
