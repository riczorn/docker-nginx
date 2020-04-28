/**
 * Quattropedoni.it
 * Interfaccia di gioco lichess.
 */

class Quattro {
  playersDiv;
  online=false;
  players = [
    {
      name: 'Marco RENZI',
      nick: 'chessgenius71'
    },
    {
      name: 'Mauro ROSSETTI',
      nick: 'ammazzasomari'
    },
    {
      name: 'Flaviano BRANDI',
      nick: 'fb0172'
    },
    {
      name: 'Miragha AGHAYEV',
      nick: 'pipita09',
      badge: 'ext',
    },
    {
      name: 'Marco CORVI',
      nick: 'cormarc',
      badge: 'ext',
    },
    {
      name: 'Giulio SIMEONE',
      nick: 'mattointre'
    },
    {
      name: 'Alessandro CONFLITTI',
      nick: 'neveda'
    },
    {
      name: 'Domenico ZIBELLINI',
      nick: 'Borisdom'
    },
    {
      name: 'Gaspare RALLO',
      nick: 'ghippi'
    },
    {
      name: 'Riccardo ZORN',
      nick: 'RicZik'
    },
    {
      name: 'Roberto CONDORELLI',
      nick: 'Kondorchess'
    },
    {
      name: 'Fausto PAOLOCCI',
      nick: 'faustozann'
    },
    {
      name: 'Fabio NINI',
      nick: 'chess131969'
    },
    {
      name: 'Tommaso BILOTTI',
      nick: 'Tom1954'
    },
    {
      name: 'Daniel BERGLUND',
      nick: 'ullinyllerrittomma'
    },
    {
      name: 'Yuri PICCIOTTI',
      nick: 'ottomaggio'
    },
    {
      name: 'Filippo RALLO',
      nick: 'pippo96'
    },
    {
      name: 'Marco VITTORIETTI',
      nick: 'mcrmk2'
    },
    {
      name: 'Vincenzo CANNADA BARTOLI',
      nick: 'balaustrata'
    },

    {
      name: 'Antonio FORTE',
      nick: 'roftna'
    },
  ];

  constructor() {
    console.log('quattropedoni welcome!');
  }

  getUserListHtml() {
    let html = [];

    this.players.forEach(player => {
      let challenge = `
      <button data-nick="${player.nick}" data-side="white">Bianco</button>
      <button data-nick="${player.nick}" data-side="black">Nero</button>
      `;
      let className = player.badge?`badge_${player.badge}`:'';
      html.push(`<a target="_blank" class="${className}" href="https://lichess.org/@/${player.nick}">
          <div>${player.name}</div>
          <div>${player.last}</div>
          <div>${player.nick}</div>
          <div id="player_${player.nick}"></div></a>`);
    });
    return html.join('');
  }

  getUserDetails(nick) {
    	$.get("https://en.lichess.org/api/user/" + nick,
      data=>{
        console.log('lichess user info ', player);

          let onlineClass = player.online?'online':'offline';
        $('#player_'+player.name).html(`
            <div class="${onlineClass}">
              <img src="assets/lichess-favicon-32.png" alt="lichess" />
              <i class="status"></i>

            </div>
            `);
          });


          /*
          completionRate: 90
          count: {…}
          	ai: 0
          	all: 1071
          	bookmark: 0
          	draw: 92
          	drawH: 92
          	import: 8
          	loss: 426
          	lossH: 426
          	me: 0
          	playing: 0
          	rated: 1061
          	win: 553
          	winH: 553
          createdAt: 1471683442481
          id: "mattointre"
          language: "it-IT"
          nbFollowers: 18
          nbFollowing: 16
          online: false
          perfs: {…}
          	blitz: Object { games: 36, rating: 1801, rd: 71, … }
          	bullet: Object { games: 0, rating: 1500, rd: 350, … }
          	classical: Object { games: 13, rating: 1972, rd: 112, … }
          	correspondence: Object { games: 1, rating: 1662, rd: 293, … }
          	puzzle: Object { games: 15, rating: 2108, rd: 119, … }
          	rapid: Object { games: 1011, rating: 2052, rd: 47, … }
          playTime: Object { total: 1097789, tv: 11581 }
          seenAt: 1587936422618
          url: "https://lichess.org/@/mattointre"
          username: "mattointre"
          */

  }

/**
 *  invoke https://lichess.org/api/users/status?ids=mattointre,RicZik to retrieve the actual status.
 */
  async getStatus() {
    let self = this;
    let playerNames = [];
    this.players.forEach(player=>{
      playerNames.push(player.nick);
    })
    $.get('https://lichess.org/api/users/status?ids='+playerNames.join(','),
      data=>{
        console.log('lichess replied ', data);
        data.forEach((player)=>{
          let onlineClass = player.online?'online':'offline';
          let title = '';
          if ( player.title) {
            title = `<span class='title ${player.title}'>${player.title}</span>`;
          }
          console.log('t',title,player);

          $('#player_'+player.name).html(`
            <div class="playerStatus ${onlineClass}">
              <img src="assets/lichess-favicon-32.png" alt="lichess" />
              <i class="status"></i>
              ${title}
            </div>
            `);
          });
      });
  }

  sort(key) {
    console.log('sort',key);
    switch (key)
    {
      case 'name':
        this.players.sort((a,b)=> {return a.name.localeCompare(b.name);});
      break;
      case 'last':
        // this.sortByLast();
        this.players.sort((a,b)=> {return a.last.localeCompare(b.last);});
      break;
      case 'nick':
        this.players.sort((a,b)=> {return a.nick.localeCompare(b.nick);});
      break;
    }
    this.paint();
  }

  paint() {
    this.playersDiv.innerHTML = this.getUserListHtml();
    this.getStatus();
  }

/**
  * sort by the second part of the name after the space.
  */

  sortByLast() {
    this.players.sort((a,b)=> {
      let aLast = a.name.replace(/^[^ ]+ /,'');
      let bLast = b.name.replace(/^[^ ]+ /,'');


      return aLast.localeCompare(bLast);
    });
  }

  getPlayerStats() {
    /*
    completionRate: 90
    count: {…}
    	ai: 0
    	all: 1071
    	bookmark: 0
    	draw: 92
    	drawH: 92
    	import: 8
    	loss: 426
    	lossH: 426
    	me: 0
    	playing: 0
    	rated: 1061
    	win: 553
    	winH: 553
    createdAt: 1471683442481
    id: "mattointre"
    language: "it-IT"
    nbFollowers: 18
    nbFollowing: 16
    online: false
    perfs: {…}
    	blitz: Object { games: 36, rating: 1801, rd: 71, … }
    	bullet: Object { games: 0, rating: 1500, rd: 350, … }
    	classical: Object { games: 13, rating: 1972, rd: 112, … }
    	correspondence: Object { games: 1, rating: 1662, rd: 293, … }
    	puzzle: Object { games: 15, rating: 2108, rd: 119, … }
    	rapid: Object { games: 1011, rating: 2052, rd: 47, … }
    playTime: Object { total: 1097789, tv: 11581 }
    seenAt: 1587936422618
    url: "https://lichess.org/@/mattointre"
    username: "mattointre"
    */
  }

  init(elementId, online) {
    let self = this;
    self.online = online;
    this.playersDiv = document.getElementById(elementId);
    // create last name if it's not already specified
    this.players.forEach(player => {
      if (!player.last) {
          player.last = player.name.replace(/^[^ ]+ /,'');
          player.name = player.name.replace(/^([^ ]+) .*$/,'$1', 'gm');
      }
    });
    this.sort('last');
    // sort invokes paint! this.paint();
    let buttons = players.getElementsByTagName('button');
    console.log('buttons', buttons);
    for (let button of buttons) {
      button.addEventListener('click', self.handleClick);
    };
  }

  handleClick(event) {
    let b = event.target;
    let nick = b.getAttribute('data-nick')
    if (typeof nick === 'string') {
      let side = b.getAttribute('data-side');
      quattro.posts(nick, side);
    }
  }

  posts(nick, side) {
    // let url = `https://lichess.org/setup/friend?user=${nick}`
    //let url = `https://lichess.org/@/${nick}`;
    let url = `https://lichess.org/api/challenge/${nick}`;
    $('[name="color"]').val(side);
    $('#lichess').attr('action',url);
    console.log($('#lichess'));
    $('#lichess').submit();

    // let data1 = {
    //   variant:1,
    //   fen:null,
    //   timeMode:1,
    //   time:25,
    //   increment:15,
    //   days:2,
    //   mode:0,
    //   color:side
    // }

    // let data = 'variant=1&fen=&timeMode=1&time=25.0&increment=15&days=2&mode=0&color=black'
    // $.post(url, data, (response)=>{
    //   console.log('post response', response);
    // });
  }
}
