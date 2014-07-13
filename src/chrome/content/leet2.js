(function() {
    var texin = "";
    var transtype = 1; // 1=tol33t, 2=tolame
    function walk(node) 
    {
        // I stole this function from here:
        // http://is.gd/mwZp7E
    
        var child, next;
    
        switch ( node.nodeType )  
        {
            case 1:  // Element
            case 9:  // Document
            case 11: // Document fragment
                child = node.firstChild;
                while ( child ) 
                {
                    next = child.nextSibling;
                    walk(child);
                    child = next;
                }
                break;
    
            case 3: // Text node
                handleText(node);
                break;
        }
    }
    
    function stripspaces(what) {
	what = what.replace(/^ */,"");
	what = what.replace(/ *$/,"");
	return what;
    }

    function randomcase(what) { // mAkEs it LiKE This, CAsE ALl RaNDoM
	//return "hello";
	var tr = "";
	for (i=0;i<what.length;i++) {
	    if (Math.random() > .5) tr += what.substr(i,1).toLowerCase();
	    else tr += what.substr(i,1).toUpperCase();
	}
	return tr;
    }

    function handleText(textNode)
    {
        texin =  textNode.nodeValue;
	texin = texin.toLowerCase();
	punct();
	changewords();
	changeletters();
	unpunct();
	//v = v.replace(/\bthe cloud\b/g, "my butt");
        texin = stripspaces(randomcase(texin));
	
	textNode.nodeValue = texin;
	    
	texin = "";
    }

    function change(t1,t2) {
	var tr = texin;
	var lp = 0;
	while (tr.indexOf(t1) > -1) {
	    if (++lp > 200) {
		return tr; // avoid endless loops
	    }
	    var occ = tr.indexOf(t1);
	    tr = tr.substr(0,occ) + t2 + tr.substr(occ+t1.length);
	}
	//texin = texin.replace(t1,t2);
	texin=tr;
    }
    
    
    function punct() {
	change(".","   [%]   ");
	change(",","   [@]   ");
	change("?","   [©]   ");
	change("!","   [$]   ");
	change('"',"   [&]   ");
	change("'","   [^]   "); // (
	change(")","   [~]   ");
	change("\n","   [*]   ");
	change("\r","");
    }

    function unpunct() {
	// return;
	change("   [%]   ",".");
	change("   [@]   ",",");
	change("   [a]   ",",");
	change("   [©]   ","?");
	change("   [$]   ","!");
	change("   [&]   ",'"');
	change("   [^]   ","'"); // (
	change("   [~]   ",")");
	change("   [*]   ","\n");
    } 
    
    

    function changewords() {
	change(" is good "," owns "); 
	change(" are good "," own "); 
	change(" am good "," own ");
	change(" defeated "," owned "); 
	
	

	change(" are "," r ");
	change(" am "," m ");
	change("unhack","uhaxor");
	change("hacker","haxor");
	 
	change("excellent","xellent");
	change(" are you "," ru ");
	change("hack","haxor");
	change("penis","penor");
	 
	change(" yay "," woot ");
	change(" you"," joo");
	//alert(textin);
	change("speak","speek");
	change("internet","big lan");
	change(" picture"," pixor");
	change("n   [^]   t ","   [^]   nt ");
	change(" kill"," frag");
	change(" lamer "," llama ");
	change(" newbie "," noob ");
	change(" sex "," sexor ");
	change(" technique "," tekniq ");
	change("quake","quaek"); 
	change(" rock "," roxor ");
	change(" rocks "," roxorez ");
	change("cool","kewl");
	change(" the "," teh ");
	change("ass","azz");
	change("cum","spooge");
	change("ejaculate","spooge");
	change("fuck","fuxor"); 
	change("phuck","phuxor"); 
	change("porn","pron");
	change("dude","dood");
	change(" me "," meh ");
	change(" with "," wit ");
	change(" oh my god "," omg ");
	
	change(" oh my fucking god "," omfg ");
	change(" oh my phoxoring god "," omfg ");
	change(" what the fuck "," wtf ");
	change(" laugh my ass off "," lmao ");
	change(" okay "," kk ");
	change(" thanks "," thx ");
	change("rude","rood");
	change("ness ","nees ");
	change("please","pleez");
	change("money","lewt");
	 

	
	change("qu","kw");
	change("fear","fjeer");  
	change(" because "," cuz ");

	change("more elite","eliteer");
	change(" an a"," a a");
	change(" an e"," a e");
	change(" an i"," a i");
	change(" an o"," a o");
	change(" an u"," a u"); 
	change("bitch","bizotch");
	change("suck","suxor");
	change("at ","@ ");
	change(" e@ "," eat ");
	change("elite","leet");
	change(" computers "," boxen ");
	change(" computer "," boxor ");
	change(" you "," u ");
	change(" your"," ur");
	//change("eck ","ek ");
	change(" loot "," lewt ");
	change(" stuff "," lewt ");
	change(" fool "," foo ");
	change(" yo "," jo ");
	change("ks ","x ");
	change("se ","ze ");
	change("nigga","nigzor");
	change("nigger","nigzor");
	change("negro","nigzor");
	 
	
	change("ing ","in   [^]    "); 
	change("very gay","gheyzor");
	change(" f"," ph");
	change("ash ","# ");
	change(" cu"," ku");
	change(" ca"," ka");
	change(" cat"," kat");
	change(" co"," ko");
	change("s ","z ");
	change("sz ","ss ");
	
	change("kk thx bye","kthxbye");
	
	
			
    }



    function changeletters() {
	//alert("debug:\n\n"+textin);
	

	change("a","4");
	change("b","8");
	change("e","3");
	change("g","9");
	change("i","1");
	change("o","0");
	change("s","5");
	change("t","7");
	change("z","2");


	if (transtype == 1) return;

	
	// advanced l33t:

	

	change("d","|)"); 
	change("f","|="); 
	change("h","|-|"); 
	change("ll","|_|_");
	change("u","|_|"); 
	change("l","|_");
	change("j","_|");
	change("k","|<");
	change("m","|\\/|");
	change("n","|\\|"); 
	change("v","\\/");
	change("w","\\|/");
	change("x","><");
	//alert("debug mode:\n\n"+textin);
	change("y","`/"); 
	change("p","|>");
	change("q","().");
	change("r",".-"); 
	change("c","(");

	cchange("o|o","do");
	cchange("|o","b");
	cchange("o|","d");
	
	
	// different forms of l33t:
	
	// change("a","@");
	change("t","+");
	change("g","6");
	change("w","\\/\\/");
	change("w","vv");
	change("k","/<");
	change("s","$");
	//change("h","#");
	change("m","|v|");
	change("mc","|vk");
	change("w","\\^/");
	change("c","<");
	change("i","|");
	change("y","\\-/");
	change("h","}{");
	// change("w","\\/\\/");

	// extreme l33t

	if (transtype==1) return; // don't get mad

	//Getting Mad
 
	change("t","†");
	change("u","µ");
	change("c","©");
	change("c","¢");
	change("b","ß");
	change("r","®");
	change("f","ƒ");
	change("x","><");
	change("e","3");
	change("d","Ð");
	change("d","ð");
	change("v","v");
	change("t","‡");
	change("l","£");
	change("z","ž");
	change("y","¥");
	change("n","ñ");
	change("x","×");
	change("?","¿");
	//cchange("¡","i");

	
    }


    function windowLoadHandler()
    {
        
        window.removeEventListener('load', windowLoadHandler);

        document.getElementById('appcontent').addEventListener('DOMContentLoaded', function(e) {
            walk(e.originalTarget.body);
        });
    }

    window.addEventListener('load', windowLoadHandler);
}());
