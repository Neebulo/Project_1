//var numberOfImages = 20;

//Randomize image locations
var images = [ {name:"https://i.ytimg.com/vi/yyXAjGf5xoc/hqdefault.jpg",category: 'bad'}, //bloody 'bad'
              {name:"http://i4.ytimg.com/vi/Bw17Ehgislo/hqdefault.jpg",category: 'bad'}, // stab 'bad'
              {name:"http://2.bp.blogspot.com/-ZeRCnqd8Y9c/VXcdmmw3b2I/AAAAAAAABq0/SeMTnrTs1kQ/s640/archer%2Bstab.gif",category: 'bad'},//stab knife gif 'bad'
              {name:"http://1.bp.blogspot.com/-JtW1NPU1QOE/VMkjVYwsQTI/AAAAAAAABG8/rJ8W14CI6Ak/s1600/vlcsnap-2014-10-06-16h24m06s61-620x348.png"}, //block 'good'
              {name:"http://i1.ytimg.com/vi/th7ve2sYxn8/mqdefault.jpg",category: 'bad'}, //heart rip 'bad'
              {name:"http://pre08.deviantart.net/af37/th/pre/i/2007/261/c/9/blood_of_saber_by_wasgoed.jpg",category: 'bad'}, // bleed 'bad'
					  {name:"http://wanabrar.com/blog/wp-content/uploads/2015/04/tumblr_nmbt72MLAD1u9lneoo2_500.gif"}, //green light 'good'
              {name:"http://pa1.narvii.com/5737/85b5a73b460611f18b08b0d868f2360a7257fea2_hq.gif",category: 'bad'}, // splash blood gif bad
              {name:"http://i1.ytimg.com/vi/th7ve2sYxn8/mqdefault.jpg",category: 'bad'}, //heart rip 'bad'
              {name:"http://2.bp.blogspot.com/-ZeRCnqd8Y9c/VXcdmmw3b2I/AAAAAAAABq0/SeMTnrTs1kQ/s640/archer%2Bstab.gif",category: 'bad'},//stab knife gif 'bad'
              {name:"https://i.ytimg.com/vi/yyXAjGf5xoc/hqdefault.jpg",category: 'bad'}, //bloody 'bad'
						{name:"http://2.bp.blogspot.com/_2Y8Jt06ep-s/TK1oNVSoNyI/AAAAAAAABTI/gQqBS6L5rwM/s1600/Archer's+Noble+Phantasm+UBW.JPG"}, //swords 'good'
              {name:"https://38.media.tumblr.com/a741d25554e701a079438294a066d361/tumblr_n6zz2egJ4z1ry576bo3_500.gif"}, //clash gif 'good'
              {name:"http://i4.ytimg.com/vi/Bw17Ehgislo/hqdefault.jpg",category: 'bad'}, // stab 'bad'
              {name:"http://1.bp.blogspot.com/-JtW1NPU1QOE/VMkjVYwsQTI/AAAAAAAABG8/rJ8W14CI6Ak/s1600/vlcsnap-2014-10-06-16h24m06s61-620x348.png"}, //block 'good'
						{name:"https://38.media.tumblr.com/a741d25554e701a079438294a066d361/tumblr_n6zz2egJ4z1ry576bo3_500.gif"}, //clash gif 'good'
              {name:"http://pa1.narvii.com/5737/85b5a73b460611f18b08b0d868f2360a7257fea2_hq.gif",category: 'bad'}, // splash blood gif bad
              {name:"http://wanabrar.com/blog/wp-content/uploads/2015/04/tumblr_nmbt72MLAD1u9lneoo2_500.gif"}, //green light 'good'
              {name:"http://i.ytimg.com/vi/JU_uEdrrhXM/maxresdefault.jpg"}, // blue 'good'
              {name:"http://i.ytimg.com/vi/JU_uEdrrhXM/maxresdefault.jpg"}
              ]; // blue 'good'




//  var images = shuffle(images);
//
// for(var i = 0; i <= numberOfImages; ++i)
// {
// 	$('img' + i).attr("src", images[ i - 1]);
// }

// function at img click, flips card over to show img
$('img').click(function(){
    //console.log('image clicked')
    var result = shuffle(); //{name: "httpjkjlja", category: "good"}
    $(this).attr('src', result.name); //'this' signifies a single div rather than all divs with tile class
    $(this).addClass(result.category);
    $(this).show().unbind(); // jquery to show img

    checkWin(); // does comparison
});


function checkWin(){

  for (var i = 0; i <20; ++i){ //loops through board
    for (var j = 0; j < 20; j++){ // another loop through board to find a match
      var firstTileToCompare = "#tile" + i; //"#tile0" //
      var secondTileToCompare = "#tile" + j; //"#tile1"
      if ($(firstTileToCompare).attr('src') !== "assets/fate.png") { //excludes default tile from comparison
        if (i !== j) {
          if ($(secondTileToCompare).attr('src') !== "assets/fate.png") {// 2nd exclude default tile
            if ($(firstTileToCompare).attr('src') === $(secondTileToCompare).attr('src')) { //checks for match by img src
              console.log(tile1);
              console.log(tile2);
              console.log('you won!');
              alert(' Team, You are up');
              resetBoard();
            }
          }
        }
      }
    }
  }
}

//shuffles images array but still keeps its array value from var
    function shuffle(){
         var randomNumber = Math.floor(Math.random()*20); // *randomize number 0-20
         var url = images[randomNumber]; //returns image from array position randomized
         return url;
    };


    function resetBoard(){ //resets the board
      for(var i = 0; i < 20; ++i){ //loops through all tiles
        var firstTileToReset = "#tile" + i; //
        $(firstTileToReset).attr('src', 'assets/fate.png'); //resets to default img
      }
    }
