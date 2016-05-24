# Game Widgets Read-me

## Overview:

I really like playing games. I was at a game night recently, and realized that there's a lot of RNG-related needs. From Risk to Monopoly to various stat trackers, there's a need for a variety of RNG generation/dice simulators. I also think it'd be neat to build some of this stuff, it sounds like a fun technical challenge. I'm going to start with a Risk roller, and move on from there.

### The Risk roller

In Risk, battles are decided by rolling die. Attacker rolls up to three die if they have the requisite number of troops (troop number - 1 = max die number), while the defender chooses to roll one or two die. The defender can pick how many die she rolls after the attacker rolls, but has a maximum of two die. Defender wins ties, highest numbers compete against each other. For instance: Attacker has three armies in a territory, attacking into a defender with two armies (this is a terrible idea, don't do it!). Attacker rolls: 5, 3. Defender rolls 4, 3. Attacker wins one, defender wins one. Now we're down to two armies attacking, one defending.

#### Defender's Choice

There have been several disagreements on the order of the defender rolling, and if the defender can choose to roll one or two dice upon seeing the attackers roll. I'm going to go with Hasbro's ruling found at their manual [here](http://www.hasbro.com/common/instruct/risk.pdf), which states that both players decide how many to roll, and then roll simultaneously.

#### The Coding Plan:

I'm going to want to make visual die representations with HTML and CSS. I'll make the die animated later, for now we'll just go with changing the die to the appropriate face on roll. I also want to add some animation/delay - just changing all of the die instantly doesn't allow for any dramatic tension. I'll also order the die from largest to smallest value, and display the results of the battle.  
I'll need several sets of inputs - click on the dice to use it, click again to deselect.  
A roll button to process the request.  
