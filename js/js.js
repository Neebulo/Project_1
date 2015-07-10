//var numberOfImages = 20;

//Randomize image locations
var images = [ {name:"https://i.ytimg.com/vi/yyXAjGf5xoc/hqdefault.jpg",category: 'bad'}, //bloody 'bad'
              {name:"http://i4.ytimg.com/vi/Bw17Ehgislo/hqdefault.jpg",category: 'bad'}, // stab 'bad'
              {name:"http://2.bp.blogspot.com/-ZeRCnqd8Y9c/VXcdmmw3b2I/AAAAAAAABq0/SeMTnrTs1kQ/s640/archer%2Bstab.gif",category: 'bad'},//stab knife gif 'bad'
              {name:"http://1.bp.blogspot.com/-JtW1NPU1QOE/VMkjVYwsQTI/AAAAAAAABG8/rJ8W14CI6Ak/s1600/vlcsnap-2014-10-06-16h24m06s61-620x348.png", category: 'good'}, //block 'good'
              {name:"http://i1.ytimg.com/vi/th7ve2sYxn8/mqdefault.jpg",category: 'bad'}, //heart rip 'bad'
              {name:"http://pre08.deviantart.net/af37/th/pre/i/2007/261/c/9/blood_of_saber_by_wasgoed.jpg",category: 'bad'}, // bleed 'bad'
					  {name:"http://wanabrar.com/blog/wp-content/uploads/2015/04/tumblr_nmbt72MLAD1u9lneoo2_500.gif", category: 'good'}, //green light 'good'
              {name:"http://pa1.narvii.com/5737/85b5a73b460611f18b08b0d868f2360a7257fea2_hq.gif",category: 'bad'}, // splash blood gif bad
              {name:"http://i1.ytimg.com/vi/th7ve2sYxn8/mqdefault.jpg",category: 'bad'}, //heart rip 'bad'
              {name:"http://2.bp.blogspot.com/-ZeRCnqd8Y9c/VXcdmmw3b2I/AAAAAAAABq0/SeMTnrTs1kQ/s640/archer%2Bstab.gif",category: 'bad'},//stab knife gif 'bad'
              {name:"https://i.ytimg.com/vi/yyXAjGf5xoc/hqdefault.jpg",category: 'bad'}, //bloody 'bad'
						{name:"http://pre08.deviantart.net/af37/th/pre/i/2007/261/c/9/blood_of_saber_by_wasgoed.jpg",category: 'bad'}, // bleed 'bad'
              {name:"https://38.media.tumblr.com/a741d25554e701a079438294a066d361/tumblr_n6zz2egJ4z1ry576bo3_500.gif", category: 'good'}, //clash gif 'good'
              {name:"http://i4.ytimg.com/vi/Bw17Ehgislo/hqdefault.jpg",category: 'bad'}, // stab 'bad'
              {name:"http://1.bp.blogspot.com/-JtW1NPU1QOE/VMkjVYwsQTI/AAAAAAAABG8/rJ8W14CI6Ak/s1600/vlcsnap-2014-10-06-16h24m06s61-620x348.png", category: 'good'}, //block 'good'
						{name:"https://38.media.tumblr.com/a741d25554e701a079438294a066d361/tumblr_n6zz2egJ4z1ry576bo3_500.gif", category: 'good'}, //clash gif 'good'
              {name:"http://pa1.narvii.com/5737/85b5a73b460611f18b08b0d868f2360a7257fea2_hq.gif",category: 'bad'}, // splash blood gif bad
              {name:"http://wanabrar.com/blog/wp-content/uploads/2015/04/tumblr_nmbt72MLAD1u9lneoo2_500.gif", category: 'good'}, //green light 'good'
              {name:"http://i.ytimg.com/vi/JU_uEdrrhXM/maxresdefault.jpg", category: 'good'}, // blue 'good'
              {name:"http://i.ytimg.com/vi/JU_uEdrrhXM/maxresdefault.jpg", category: 'good'}
              ]; // blue 'good'

// var images = [ "https://i.ytimg.com/vi/yyXAjGf5xoc/hqdefault.jpg", //bloody 'bad'
//               "http://i4.ytimg.com/vi/Bw17Ehgislo/hqdefault.jpg", // stab 'bad'
//               "http://2.bp.blogspot.com/-ZeRCnqd8Y9c/VXcdmmw3b2I/AAAAAAAABq0/SeMTnrTs1kQ/s640/archer%2Bstab.gif",//stab knife gif 'bad'
//               "http://1.bp.blogspot.com/-JtW1NPU1QOE/VMkjVYwsQTI/AAAAAAAABG8/rJ8W14CI6Ak/s1600/vlcsnap-2014-10-06-16h24m06s61-620x348.png", //block 'good'
//               "http://i1.ytimg.com/vi/th7ve2sYxn8/mqdefault.jpg", //heart rip 'bad'
//               "http://pre08.deviantart.net/af37/th/pre/i/2007/261/c/9/blood_of_saber_by_wasgoed.jpg", // bleed 'bad'
// 					  "http://wanabrar.com/blog/wp-content/uploads/2015/04/tumblr_nmbt72MLAD1u9lneoo2_500.gif", //green light 'good'
//               "http://pa1.narvii.com/5737/85b5a73b460611f18b08b0d868f2360a7257fea2_hq.gif", // splash blood gif bad
//               "http://i1.ytimg.com/vi/th7ve2sYxn8/mqdefault.jpg", //heart rip 'bad'
//               "http://2.bp.blogspot.com/-ZeRCnqd8Y9c/VXcdmmw3b2I/AAAAAAAABq0/SeMTnrTs1kQ/s640/archer%2Bstab.gif",//stab knife gif 'bad'
//               "https://i.ytimg.com/vi/yyXAjGf5xoc/hqdefault.jpg", //bloody 'bad'
// 						"http://2.bp.blogspot.com/_2Y8Jt06ep-s/TK1oNVSoNyI/AAAAAAAABTI/gQqBS6L5rwM/s1600/Archer's+Noble+Phantasm+UBW.JPG", //swords 'good'
//               "https://38.media.tumblr.com/a741d25554e701a079438294a066d361/tumblr_n6zz2egJ4z1ry576bo3_500.gif", //clash gif 'good'
//               "http://i4.ytimg.com/vi/Bw17Ehgislo/hqdefault.jpg", // stab 'bad'
//               "http://1.bp.blogspot.com/-JtW1NPU1QOE/VMkjVYwsQTI/AAAAAAAABG8/rJ8W14CI6Ak/s1600/vlcsnap-2014-10-06-16h24m06s61-620x348.png", //block 'good'
// 						"https://38.media.tumblr.com/a741d25554e701a079438294a066d361/tumblr_n6zz2egJ4z1ry576bo3_500.gif", //clash gif 'good'
//               "http://pa1.narvii.com/5737/85b5a73b460611f18b08b0d868f2360a7257fea2_hq.gif", // splash blood gif bad
//               "http://wanabrar.com/blog/wp-content/uploads/2015/04/tumblr_nmbt72MLAD1u9lneoo2_500.gif", //green light 'good'
//               "http://i.ytimg.com/vi/JU_uEdrrhXM/maxresdefault.jpg", // blue 'good'
//               "http://i.ytimg.com/vi/JU_uEdrrhXM/maxresdefault.jpg"]; // blue 'good'

for(var i=0;i<20;i++){ //setting for tiles 0-19
 $('img')[i].isClicked=false;
} // jquery form to set variable isClicked to click listener on 'img' as false

////////                  STARTER FUNCTION             /////////////////////////
  function starter(){
    $('img').click(function(){ //at 'img' click
   if(this.isClicked ==false){ //if tile is default(false) at click ************* /allows for only 1 click to prevent image shuffle
     this.isClicked =true;// make tile true and run shuffle() to change image**** /on a single card*******

//////********* Categorize images to 'bad' and 'good'*************///////////////
      //creates variable 'result' to be shuffle() to be used to split between category 'good' and 'bad'
      var result=shuffle(); //also invokes shuffle() method
  //assigns for image name
      $(this).attr('src', result.name);
  //'this' signifies current tile rather than all tiles at once with class 'img'
  // adds class category to img name
      $(this).addClass(result.category);
//////*****************************************************////////////
      checkWin();
   }
    });
}
/////////////            STARTER FUNCTION END             /////////////////////
    $(starter) // Game Initializer

function checkWin(){
  for (var i = 0; i <20; ++i){ //loops through board
    for (var j = 0; j < 20; j++){ // another loop through board to find a match
      var firstTileToCompare = "#tile" + i; //"#tile0" // 'tileMachine1'
      var secondTileToCompare = "#tile" + j; //"#tile1" // 'tileMachine2'
      if ($(firstTileToCompare).attr('src') !== "assets/fate.png") { //excludes default tile from comparison
        if (i !== j) { // dont compare single card found by 2 machines as a win
          if ($(secondTileToCompare).attr('src') !== "assets/fate.png") {// 2nd exclude default tile
            if ($(firstTileToCompare).attr('src') === $(secondTileToCompare).attr('src')) { //checks for match by img src
              console.log('tileMachine1');
              console.log('tileMachine2');
              //if tile has an class attribute of 'bad'
              if($(secondTileToCompare).attr('class') === "bad"){
// invoke 'bad' alert
                $( "#gallery" ).dialog({
                  modal: true,
                  buttons: {
                    Ok: function() {
                      $( this ).dialog( "close" );
                    }
                  }
                });
                alert('Seems like you lost your life, Try again.');
              } else {
// otherwise invoke 'good' alert
                $( "#gallery2" ).dialog({
                  modal: true,
                  buttons: {
                    Ok: function() {
                      $( this ).dialog( "close" );
                    }
                  }
                });
                alert("Looks like you get to Live!");
              }
              resetBoard();
            }
          }
        }
      }
    }
  }
}
//shuffles images array to place on #tile position
    function shuffle(){
         var randomNumber = Math.floor(Math.random()*19); // *randomize number 0-19
         var url = images[randomNumber]; //returns image from array position randomized
         return url;
    }
    function resetBoard(){ //resets the board
      for(var i = 0; i < 20; ++i){ //loops through all tiles
        $('img')[i].isClicked=false; // added to include img value as 'false' again to enable clicking
        var firstTileToReset = "#tile" + i; // variable firstTileToReset to count tile position
        $(firstTileToReset).attr('src', 'assets/fate.png');//sets tile to default img
      }
    }
