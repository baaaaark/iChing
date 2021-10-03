addEventListener("load", function(){
    var hexagramArray = [
              
        [2, "Receptive Earth/Receptive Power", "䷁"],
        [24, "Returning", "䷗"],
        [7, "The Army/Organized Discipline", "䷆"],
        [19, "Approach (of Spring)", "䷒"],
        [15, "Modesty/Humility", "䷎"],
        [36, "Darkening Of The Light", "䷣"],
        [46, "Pushing Upward", "䷭"],
        [11, "Peace/Harmony", "䷊"],
        [16, "Enthusiasm", "䷏"],
        [51, "The Arousing Thunder/Shock", "䷲"],
        [40, "Deliverance", "䷧"],
        [54, "Marrying Maiden/Careful Affection", "䷵"],
        [62, "Small Preponderance/Attention To Detail", "䷽"],
        [55, "(Great) Abundance", "䷶"],
        [32, "Duration/Endurance", "䷟"],
        [34, "Great Power/Great Vigor", "䷡"],
        [8, "Holding Together", "䷇"],
        [3, "Difficulty At The Beginning", "䷂"],
        [29, "Abysmal Water/Dangerous Depths", "䷜"],
        [60, "Limitations and Connections", "䷻"],
        [39, "Destruction/Temporary Obstacles", "䷦"],
        [63, "After Completion", "䷾"],
        [48, "The Well", "䷯"],
        [5, "Waiting/Patience", "䷄"],
        [45, "Gathering Together", "䷬"],
        [17, "Following", "䷐"],
        [47, "Opression", "䷮"],
        [58, "The Joyous Lake/Joy", "䷹"],
        [31, "Influence/Mutual Attraction", "䷞"],
        [49, "Revolution", "䷰"],
        [28, "Great Preponderance/Excessive Pressure", "䷛"],
        [43, "Breakthrough/Determination", "䷪"],
        [23, "Splitting Apart", "䷖"],
        [27, "Mouth Corners/Nourishment", "䷚"],
        [4, "Youthful Folly", "䷃"],
        [41, "Decrease", "䷨"],
        [52, "The Keeping Still Mountain/Keeping Still", "䷳"],
        [22, "Grace (and Beauty)", "䷕"],
        [18, "Work On The Decayed/Repairing The Damage", "䷑"],
        [26, "Great Taming/Containment Of Potential", "䷙"],
        [35, "(Easy) Progress", "䷢"],
        [21, "Biting Through/Cutting Through", "䷔"],
        [64, "Before Completion", "䷿"],
        [38, "Opposition/Diverging Interests", "䷥"],
        [56, "The Wanderer", "䷷"],
        [30, "Clinging (Like) Fire", "䷝"],
        [50, "The Cauldron", "䷱"],
        [14, "Great Posession/Affluence", "䷍"],
        [20, "Contemplation/Overview", "䷓"],
        [42, "Increase", "䷩"],
        [59, "Dispersion", "䷺"],
        [61, "Inner Truth/Centering In Truth", "䷼"],
        [53, "Development/A Steady Pace", "䷴"],
        [37, "(Extended) Family", "䷤"],
        [57, "The Gentle Wind/Gentle Penetration", "䷸"],
        [9, "Small Taming/Small Influences", "䷈"],
        [12, "Standstill", "䷋"],
        [25, "Innocence", "䷘"],
        [6, "Conflict", "䷅"],
        [10, "Treading Carefully", "䷉"],
        [33, "Retreat", "䷠"],
        [13, "Fellowship", "䷌"],
        [44, "Coming To Meet/Liason", "䷫"],
        [1, "Creative Heaven/Creative Power", "䷀"],
    ];

    let coinResults = document.getElementById("coinresults");
    let presentHex = document.getElementById("presenthex");
    let futureHex = document.getElementById("futurehex");
    let presentDivination = document.getElementById("presentdivination");
    let presentGoogle = document.getElementById("presentgoogle");
    let futureDivination = document.getElementById("futuredivination");
    let futureGoogle = document.getElementById("futuregoogle");
    let test = document.getElementById("test");
    
    let hexagramCounter1 = [0, 0, 0, 0, 0, 0];
    let hexagramCounter2 = [0, 0, 0, 0, 0, 0];

    let readyBox = document.getElementById("readybox");
   
    readyBox.addEventListener("click", function() {
        let hexagramTotal1 = 0;
        let hexagramTotal2 = 0;
        coinResults.innerHTML = "";
        presentHex.innerHTML = "";
        futureHex.innerHTML = "";

        for (x = 5; x >= 0; x--) { //deciphers the coin flips into their respective symbols.  Each of the eight numbers is a possible tri-coin flip.
            
            let coin = Math.floor(Math.random() * 8);

            if (coin === 0) {
            coinResults.innerHTML += "[Tails, Tails, Tails] - - (yin)  changing to --- (yang) <br>";
            hexagramCounter1[x] = 0;
            hexagramCounter2[x] = 1;
            } else if (coin === 1) {
            coinResults.innerHTML += "[Heads, Tails, Tails] --- (yang) changing to --- (yang) <br>";
            hexagramCounter1[x] = 1;
            hexagramCounter2[x] = 1;
            } else if (coin === 2) {
            coinResults.innerHTML += "[Tails, Heads, Tails] --- (yang) changing to --- (yang) <br>";
            hexagramCounter1[x] = 1;
            hexagramCounter2[x] = 1;
            } else if (coin === 3) {
            coinResults.innerHTML += "[Tails, Tails, Heads] --- (yang) changing to --- (yang) <br>";
            hexagramCounter1[x] = 1;
            hexagramCounter2[x] = 1;
            } else if (coin === 4) {
            coinResults.innerHTML += "[Tails, Heads, Heads] - - (yin)  changing to - - (yin) <br>";
            hexagramCounter1[x] = 0;
            hexagramCounter2[x] = 0;
            } else if (coin === 5) {
            coinResults.innerHTML += "[Heads, Tails, Heads] - - (yin)  changing to - - (yin) <br>";
            hexagramCounter1[x] = 0;
            hexagramCounter2[x] = 0;
            } else if (coin === 6) {
            coinResults.innerHTML += "[Heads, Heads, Tails] - - (yin)  changing to - - (yin) <br>";
            hexagramCounter1[x] = 0;
            hexagramCounter2[x] = 0;
            } else if (coin === 7) {
            coinResults.innerHTML += "[Heads, Heads, Heads] --- (yang) changing to - - (yin) <br>";
            hexagramCounter1[x] = 1;
            hexagramCounter2[x] = 0;
            }
        }
            
        for (let x = 0; x < 6; x++) {
            hexagramTotal1 += (hexagramCounter1[x] * (2 ** (x + 1) / 2));
        }
        
        for (let x = 0; x < 6; x++) {
            hexagramTotal2 += (hexagramCounter2[x] * (2 ** (x + 1) / 2));
        }

        test.innerHTML = `[${hexagramTotal1}]      [${hexagramTotal2}]         [${hexagramCounter1}]        [${hexagramCounter2}]`;

        let hexNumberPresent = hexagramArray[hexagramTotal1][0];
        let hexNumberFuture = hexagramArray[hexagramTotal2][0];
        let hexNamePresent = hexagramArray[hexagramTotal1][1];
        let hexNameFuture = hexagramArray[hexagramTotal2][1];
        let hexSymbolPresent = hexagramArray[hexagramTotal1][2];
        let hexSymbolFuture = hexagramArray[hexagramTotal2][2];

        presentHex.innerHTML = `${hexNumberPresent} ${hexNamePresent} (${hexSymbolPresent})`;
        futureHex.innerHTML = `${hexNumberFuture} ${hexNameFuture} (${hexSymbolFuture})`;
        presentDivination.innerHTML += `<a href="https://divination.com/iching/lookup/${hexNumberPresent}-2/">Present Divination.com Results</a>`;
        presentGoogle.innerHTML += `<a href="https://www.google.com/search?q=hexagram+${hexNumberPresent}">Present Google Search</a>`;
        futureDivination.innerHTML += `<a href="https://divination.com/iching/lookup/${hexNumberFuture}-2/">Future Divination.com Results</a>`;
        futureGoogle.innerHTML += `<a href="https://www.google.com/search?q=hexagram+${hexNumberFuture}">Future Google Search</a>`;
    });    
}); 

/*let hexagramTradObj = {
[63, "Creative Heaven/Creative Power"],
[0, "Receptive Earth/Receptive Power"],
[17, "Difficulty At The Beginning"],
[34, "Youthful Folly"],
[23, "Waiting/Patience"],
[58, "Conflict"],
[2, "The Army/Organized Discipline"],
[16, "Holding Together"],
[55, "Small Taming/Small Influences"],
  [59, "Treading Carefully"],
  [7, "Peace/Harmony"],
  [56, "Standstill"],
  [61, "Fellowship"],
  [47, "Great Posession/Affluence"],
  [4, "Modesty/Humility"],
  [8, "Enthusiasm"],
  [25, "Following"],
  [38, "Work On The Decayed/Repairing The Damage"],
  [3, "Approach (of Spring)"],
  [48, "Contemplation/Overview"],
  [41, "Biting Through/Cutting Through"],
  [37, "Grace (and Beauty)"],
  [32, "Splitting Apart"],
  [1, "Returning"],
  [57, "Innocence"],
  [39, "Great Taming/Containment Of Potential"],
  [33, "Mouth Corners/Nourishment"],
  [30, "Great Preponderance/Excessive Pressure"],
  [18, "Abysmal Water/Dangerous Depths"],
  [45, "Clinging (Like) Fire"],
  [28, "Influence/Mutual Attraction"],
  [14, "Duration/Endurance"],
  [60, "Retreat"],
  [15, "Great Power/Great Vigor"],
  [40, "(Easy) Progress"],
  [5, "Darkening Of The Light"],
  [53, "(Extended) Family"],
  [43, "Opposition/Diverging Interests"],
  [20, "Destruction/Temporary Obstacles"],
  [10, "Deliverance"],
  [35, "Decrease"],
  [49, "Increase"],
  [31, "Breakthrough/Determination"],
  [62, "Coming To Meet/Liason"],
  [24, "Gathering Together"],
  [6, "Pushing Upward"],
  [26, "Opression"],
  [22, "The Well"],
  [29, "Revolution"],
  [46, "The Cauldron"],
  [9, "The Arousing Thunder/Shock"],
  [36, "The Keeping Still Mountain/Keeping Still"],
  [52, "Development/A Steady Pace"],
  [11, "Marrying Maiden/Careful Affection"],
  [13, "(Great) Abundance"],
  [44, "The Wanderer"],
  [54, "The Gentle Wind/Gentle Penetration"],
  [27, "The Joyous Lake/Joy"],
  [50, "Dispersion"],
  [19, "Limitations and Connections"],
  [51, "Inner Truth/Centering In Truth"],
  [12, "Small Preponderance/Attention To Detail"],
  [21, "After Completion"],
  [42, "Before Completion"]
  }*/