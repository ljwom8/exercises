let quotes = ['The greatest healing therapy is friendship and love. \n-Hubert H. Humphrey',
  'Friends show their love in times of trouble, not in happiness. \n-Euripides',
  'It is one of the blessings of old friends that you can afford to be stupid with them. \n-Ralph Waldo Emerson',
  'There is nothing on this earth more to be prized than true friendship. \n-Thomas Aquinas',
  'Walking with a friend in the dark is better than walking alone in the light. \n-Helen Keller',
  'Beans beans the musical fruit; the more you eat themore you toot.'];
let rand = quotes[Math.floor(Math.random() * quotes.length)];
process.stdout.write(rand + "\n")
