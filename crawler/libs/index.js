const targ = {
  to: 'http://www.ixawiki.com/index.php',
  bushosIndex: {
    ten: 'http://www.ixawiki.com/index.php?Busho%2F%C9%F0%BE%AD%A5%AB%A1%BC%A5%C9%B0%EC%CD%F7%28%C5%B7%29',
    kiwame: 'http://www.ixawiki.com/index.php?Busho%2F%C9%F0%BE%AD%A5%AB%A1%BC%A5%C9%B0%EC%CD%F7%28%B6%CB%29',
    toku: 'http://www.ixawiki.com/index.php?Busho%2F%C9%F0%BE%AD%A5%AB%A1%BC%A5%C9%B0%EC%CD%F7%28%C6%C3%29',
    jou: 'http://www.ixawiki.com/index.php?Busho%2F%C9%F0%BE%AD%A5%AB%A1%BC%A5%C9%B0%EC%CD%F7%28%BE%E5%29',
    jo: 'http://www.ixawiki.com/index.php?Busho%2F%C9%F0%BE%AD%A5%AB%A1%BC%A5%C9%B0%EC%CD%F7%28%BD%F8%29',
    others: 'http://www.ixawiki.com/index.php?Busho%2F%C9%F0%BE%AD%A5%AB%A1%BC%A5%C9%B0%EC%CD%F7%28%C2%BE%29',
  },
  bushosIndexTable: {
    xpath: '',
    xpathFull: ''
  }
}

// procedure
// first startup puppeteer
// second stdin -> select rarelity
// -> get td elems and the count
// -> page to the elems get texts
// -> 