# Assignment2
Git on the 2nd CS1032 Assignment

REPORT:

In this assignment, I tried to make the HTML aspect as simple as possible as it is arguably the easiest part (I'll get more into strugggles later). 
I started off with a simple layout using a colour scheme similar to Apple's (https://apple.com). In doing the index.html page (Home Page), I used a google image as
a reference (https://bit.ly/3rUlClS) for how an eye catching intro should look like. Nothing too loud but not dull either, to invoke a sort of "Oh okayyy lets see what he's got"
reaction when viewing for the first time. Depending on the device, browser, or aspect ratio of your device, the CSS layout may heavily differ thought I tried as hard as possible
to make sure it looks decent on most (by the use of '%' for sizing instead of 'px'). If you read line 52 in my index.html code, you will realise I put 2 dots inbetween the 'h' 
and the 'D' of my surname. This was simply to space them out as the image of myself would block that part of the text out otherwise. I could just put the text a layer above the 
picture but it would not have the same effect. 

The images i used were either shot by myself or created in photoshop to avoid licesning issues (excluding the frame of the macbook which i got from literally googling 'Macbook 
frame'. Not too much going on with the Home page or about page as they are not the star of the show. However the about page was strictly designed in photoshop and alligned with
CSS. I did this because i simply could not get the font i wanted to work in the html codes. Aside that, the 'user.html' file is a hidden file i created and linked to the 'Chat'
section on the navigation bar. This html is responsible for taking input from the user (Username), sending it to the server, and after you click 'Join Chat' it tells the server
to display the username they previously entered on the side bar and as their username when they send messages using the chat. Both that chat UI and log in UI were designed in 
photoshop, however, the chat UI is heavily carried by the CSS. I went for an iMessage sort of theme instead of a discord or regular bland online chat forum approach.

In terms of functionality, the buttons and tabs are very responsivee. I added animations to the buttons for a smoother appearance/feeling when using them. For example, the 
navigation bar buttons, the leave chat and join chat buttons aswell. The log in page successfully takes the user's username and puts it in the url when the 'Join Chat' button is pressed. The chat page then takes the username from the url and displays it in the Active Users panel, and sends it with any message that it sent by the user. The enter button on the side of the textbox works, but you can also press the enter key to submit your input. 'Leave chat' button is responsible for bringing up a prompt which asks the User to confirm if they want to leave the chat or not. If they decide to leave the chat, then their username is taken out of the Active user panel. 

I faced several challenges and difficulties during this assignement, one of them being the chat UI. Alligning the texts and setting a fixed width, so when multiple long messages are sent, the message history does not move all over the place. I included examples of such occurances in the challenged folder of my GitHub. I managed to fix this issue. Due to the method in which the username is obtained and stored, i could not manage to establish separate usernames for the sender and the recipient. For example, if John sends a message to Stacy, the message on John's screen will display John's username, he message he typed and the time, However, on Stacy's screen, it shows the message John typed, the time he sent it BUT Stacy's username. This is an error caused by which i programmed the server to obstract the username from the url so instead of sending the message with the username as a string to be displayed, it shows the username as the recipients current username. I have tried countless attempts to fix this but when i make a change to one aspect, it negatively affects the rest of the codes functionality such as messages not being sent, or a username not even being displayed at all. BUT I MANAGED TO CRACK IT EVENTUALLY!!! . The last challenge i was met with was separating the messages delivered by displaying each one in a new div. A lot of research was done to try and fix this but it got to a point where I would have to change the code to be more like the Solution Source's code which in that case i would be plagiarising, I was in too deep to just throw it all away, i hope to learn from these mistakes in this assignment. After i submit this assignment i will still go back and research ways to fix this or try a different approach towards it, to better my work production in future assignments and hopfully score perfect marks. :)

Tip: To view in chrome, disable your bookmarks bar (the thing below your URL) this way the page will be. how its meant to look.
