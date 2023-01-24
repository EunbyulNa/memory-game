# Memory game

# 0. Reference
I watched a youtube tutorial, However, In this tutorial, he used the arrow function which I didn't fully understand about the concept. <br>
And I want to add a new feature restart the game button, rather than just restarting the game once the user finished it like a tutorial video. 

I found another article to figure out how to make a function(not an arrow function). <br>
Basically, I mix two references and add my idea(restart the game button).

- https://www.youtube.com/watch?v=-tlb4tv4mC4&t=1582s <br>
- https://dev.to/fakorededamilola/create-a-memory-game-with-js-1l9j 


# 1. How it works
You have six chances to play. When a user clicks the card, a card is tunning around to show images. <br>
If they are matching pairs, cards stay in the front, with no deduction of chances. <br>
However, If they are not matching pairs, the card turns around it to the back side, and you are losing your one chance. <br>

When you won the game, there's a congrats message with a play again button. <br>
If you wish to play the game again, click the button then the new game will restart.<br>
When you lose the game, there's a message with the try again button, also all the cards you clicked are turning around to the backside.<br>
Before you click the restart game button, you are not able to click cards again.<br>


# 2. What I learned 
 * Render the data onto the webpage
   - I stored card data in JS object, each data has imgsrc, and name. <br>
   I wanted to display random cards every time users open the page or click the restart button. <br>
   So I made a random() function which randomly sorts out card data. After that, execute displayCard() function.<br>
   In displayCard() function, I created new three elements (card div, face img, back div), added a class list to each element. <br>
   Attach the image to the face div. Attach the name in each card. So I can find that which one is a matching pair. <br>
   Finally, append the child elements to the parent element. 
   
 * setAttribute / getAttribute
   - Sets a new value to an attribute. In this project, I set a name attribute from the card data name. 
   - The getAttribute() method returns the value of an element's attribute. When check cards are matching or not, <br>
     get card attribute, if the first card attribute is the same second card attribute, it means they are matching pairs.<br>
