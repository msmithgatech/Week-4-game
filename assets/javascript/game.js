    //============================== 
    //   CALLED FUNCTIONS
    //==============================
         
    function setGameRan() {
        var gmin = 19;
        var gmax = 120;  
        gameRan = Math.floor(Math.random() * gmax - gmin) + 1 + gmax;
        alert("set Game Random, the GAME NUMBER is ", parseFloat(gameRan));
        ("#matchNum").text(gameRan);
        return gameRan ;
    }

    function setCrysRan() {
      var ranInt = 0
      for (var i = 0; i < 1; i++) {              //**FOR TESTING, SETTING LIMIT AT 2**
        ranInt = Math.floor(Math.random() * 12) + 1;
        switch ([i]) {
          case 0: 
            Aran = ranInt;                             // store choiceA's random value for calculations
            CrysBtns.id = ("<img");
            CrysBtns.addType("type=", "button");              // the type is a button
            CrysBtns.addTitle("title=", "choiceA");           // labels the first button
            CrysBtns.attr("src=", crysFiles[i]);              // image file for the jpg file
            CrysBtns.value = parseFloat(ranInt);              // convert and save choice A's random value
            crystalImg.append = CrysBtns;  // load Crystal Buttons div
            ranInt = 0;                                     // reset ranInt
            console.log("Aran = " + Aran);
            console.log("CrysBtns");
            return parseFloat(Aran);
            break;
          case 1:
            Bran = ranInt;
            CrysBtns.id = ("<img");
            CrysBtns.addType("type=", "button");              // the type is a button
            CrysBtns.addTitle("title=", "choiceB");           // labels the first button
            CrysBtns.attr("src=", crysFiles[i]);              // image file for the jpg file
            CrysBtns.value = parseFloat(ranInt);              // convert and save choice A's random value
            crystalBtn.append = CrysBtns;  // load Crystal Buttons div
            ranInt = 0;                                     // reset ranInt
            console.log("Bran = " + Bran);
            console.log("CrysBtns");
            return parseFloat(Bran);
            break; 
          default:
            return
        };  // END SWITCH    
      };  //  END FOR LOOP
    }  // END setCrysRandom

    function ovrLimit () {
         document.getElementbyID("prntMsg").innerHTML = 
          "Your total: ' + userTot +  ' is greater than the Random number.  You Lose"
    }

      // CLEAR VARIABLES FOR THE NEW GAME     
    function Nextgame () {
      ("#crystlBtns").empty();
      ("#choice").empty();
      gameRan = 0;
      userTot = 0;
      Aran = 0;
      Bran = 0;
      Cran = 0;
      Dran = 0;
    };  // END NEXTGAME

