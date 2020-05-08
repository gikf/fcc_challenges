function monopolyOdds() {
  // CH cards
  function chance() {
    chancePos = (chancePos + 1) % 16;
    if (chancePos < 6) {
      pos = chanceCards[chancePos];
    }
    // go to next R
    if (chancePos == 6 || chancePos == 7) {
      if (pos == 7) {
        pos = 15;
      } else if (pos == 22) {
        pos = 25;
      } else if (pos == 36) {
        pos = 5;
      }
    }
    // go to next U
    if (chancePos == 8) {
      if (pos == 7 || pos == 36) {
        pos = 12;
      } else if (pos == 22) {
        pos = 28;
      }
    }
    // back up 3 squares
    if (chancePos == 9) {
      pos -= 3;
    }
  }
  // CC community chest cards
  function chest() {
    chestPos = (chestPos + 1) % 16;
    if (chestPos < 2) {
      pos = chestCards[chestPos];
    }
  }
  // dice rolling
  function roll() {
    return Math.floor(Math.random() * 4) + 1;
  }

  // Setup variables
  const chanceCards = [0, 10, 11, 24, 39, 5];
  const chestCards = [0, 10]
  const board = new Array(40).fill(0);
  const TRIES = 100000;

  // base
  let double_count = 0;
  let pos = 0;
  let chestPos = 0;
  let chancePos = 0;


  for (let i = 0; i < TRIES; i++) {
    let dice1 = roll();
    let dice2 = roll();
    // Check for doubles and double counter
    if (dice1 == dice2) {
      double_count++;
    } else {
      double_count = 0;
    }

    if (double_count > 2) {
      pos = 10;
      double_count = 0;
    } else {
      pos = (pos + dice1 + dice2) % 40;

      // CH chance squares
      if (pos == 7 || pos == 22 || pos == 36) {
        chance();
      }
      // CC community chest squares
      if (pos == 2 || pos == 17 || pos == 33) {
        chest();
      }
      // go to jail square (G2J)
      if (pos == 30) {
        pos = 10;
      }
    }
    board[pos]++;
  }
  // Sort descending by most hits
  const ranks = board.map((element, index) => [index, element])
                     .sort((a, b) => a[1] - b[1])
                     .reverse();
  // Top three with zero padding when needed
  const top_three = parseInt(ranks.slice(0, 3).map((elem) => elem[0]).join(''));
  // Good luck!
  return parseInt(top_three);
}

monopolyOdds();
