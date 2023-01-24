# Memory game

# 0. Reference
I watched a youtube tutorial, However, In this tutorial, he used the arrow function a concept which I didnt fully understand. <br>
I wanted to add a new feature or button to restart the game, rather than just restarting the game once the user finished it like a tutorial video. 

I found another article to figure out how to make a different function (not the arrow function). <br>
Basically, I mix the two references and add my restart the game button.

- https://www.youtube.com/watch?v=-tlb4tv4mC4&t=1582s <br>
- https://dev.to/fakorededamilola/create-a-memory-game-with-js-1l9j 


# 1. How it works
You have six chances to play. When a user clicks the card, a card is tunning around to show images. <br>
If they are matching pairs, the cards stay turned with the images showing, with no deduction of chances. <br>
However, If they are not matching pairs, the card turns around it to the back side, and you are lose a life. <br>

When you win, there's a congrats message with a play again button. <br>
If you wish to play the game again, click the button then the new game will restart.<br>
When you lose the game, there's a message with the try again button. The cards will then reset with the back of the cards facing the user.<br>
You wont be able to click the cards until you press the restart button.<br>


# 2. What I learned 
 * Render the data onto the webpage
   - I stored card data in JS objects, each data has imgsrc, and name. <br>
   I wanted to display random cards every time users open the page or click the restart button. <br>
   So I made a random() function which randomly sorts card data. After that, it will execute the displayCard() function.<br>
   In the displayCard() function, I created three new elements (card div, face img, back div), and added a class list to each element. <br>
   I then attach the images to the face div and attached the name in each card so I can find that which one is a matching pair. <br>
   Finally, I appended the child elements to the parent element. 
   
 * setAttribute / getAttribute
   - Sets a new value to an attribute. In this project, I set a name attribute from the card data name. 
   - The getAttribute() method returns the value of an element's attribute. When the user checks the cards the <br>
     get card attribute is run. If the first card attribute is the same as the second card attribute, it means they are matching pairs.<br>
