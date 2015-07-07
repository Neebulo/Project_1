var numberOfImages = 20;

//Randomize image locations
var images = [ "https://i.ytimg.com/vi/yyXAjGf5xoc/hqdefault.jpg", //bloody 'bad'
              "http://i4.ytimg.com/vi/Bw17Ehgislo/hqdefault.jpg", // stab 'bad'
              "http://2.bp.blogspot.com/-ZeRCnqd8Y9c/VXcdmmw3b2I/AAAAAAAABq0/SeMTnrTs1kQ/s640/archer%2Bstab.gif",//stab knife gif 'bad'
              "http://1.bp.blogspot.com/-JtW1NPU1QOE/VMkjVYwsQTI/AAAAAAAABG8/rJ8W14CI6Ak/s1600/vlcsnap-2014-10-06-16h24m06s61-620x348.png", //block 'good'
              "http://i1.ytimg.com/vi/th7ve2sYxn8/mqdefault.jpg", //heart rip 'bad'
              "http://pre08.deviantart.net/af37/th/pre/i/2007/261/c/9/blood_of_saber_by_wasgoed.jpg", // bleed 'bad'
					  "http://wanabrar.com/blog/wp-content/uploads/2015/04/tumblr_nmbt72MLAD1u9lneoo2_500.gif", //green light 'good'
              "http://pa1.narvii.com/5737/85b5a73b460611f18b08b0d868f2360a7257fea2_hq.gif", // splash blood gif bad
              "http://i1.ytimg.com/vi/th7ve2sYxn8/mqdefault.jpg", //heart rip 'bad'
              "http://2.bp.blogspot.com/-ZeRCnqd8Y9c/VXcdmmw3b2I/AAAAAAAABq0/SeMTnrTs1kQ/s640/archer%2Bstab.gif",//stab knife gif 'bad'
              "https://i.ytimg.com/vi/yyXAjGf5xoc/hqdefault.jpg", //bloody 'bad'
						"http://2.bp.blogspot.com/_2Y8Jt06ep-s/TK1oNVSoNyI/AAAAAAAABTI/gQqBS6L5rwM/s1600/Archer's+Noble+Phantasm+UBW.JPG", //swords 'good'
              "https://38.media.tumblr.com/a741d25554e701a079438294a066d361/tumblr_n6zz2egJ4z1ry576bo3_500.gif", //clash gif 'good'
              "http://i4.ytimg.com/vi/Bw17Ehgislo/hqdefault.jpg", // stab 'bad'
              "http://1.bp.blogspot.com/-JtW1NPU1QOE/VMkjVYwsQTI/AAAAAAAABG8/rJ8W14CI6Ak/s1600/vlcsnap-2014-10-06-16h24m06s61-620x348.png", //block 'good'
						"https://38.media.tumblr.com/a741d25554e701a079438294a066d361/tumblr_n6zz2egJ4z1ry576bo3_500.gif", //clash gif 'good'
              "http://pa1.narvii.com/5737/85b5a73b460611f18b08b0d868f2360a7257fea2_hq.gif", // splash blood gif bad
              "http://wanabrar.com/blog/wp-content/uploads/2015/04/tumblr_nmbt72MLAD1u9lneoo2_500.gif", //green light 'good'
              "http://i.ytimg.com/vi/JU_uEdrrhXM/maxresdefault.jpg", // blue 'good'
              "http://i.ytimg.com/vi/JU_uEdrrhXM/maxresdefault.jpg",]; // blue 'good'

 var images = shuffle(images);

for(var i = 0; i <= numberOfImages; ++i)
{
	$('img' + i).attr("src", images[ i - 1]);
}
//randomizes picture but only once and applies to all squares
images.sort(function() { return 0.5 - Math.random() });

// function at img click, flips card over
$('img').click(function(){
    //console.log('image clicked')
    $(this).attr('src', images[0]); //'this' signifies a single div rather than all divs with tile class
    $('img').show();
    });

    function shuffle(o){
        for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };
