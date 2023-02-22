# Dexter's Portfolio

Hello, this is my personal portfolio which I created in January 2022 during the _nology course!

## View

You can view my portfolio via github pages using this link: [https://dexterfreeman.github.io/Portfolio](https://dexterfreeman.github.io/Portfolio). 

[!gif of portfolio](/images/portfolio.gif)

## Animations
There are two animations on the page. If hardware acceleration is not enabled in your browser these animations will have a low frame-rate which may affect your experience. 

- On scroll: Some elements will animate on scroll; this is done using an intersection observer in vanilla javascript and some CSS animations. This is achieved using an intersection Observer in vanilla Javascript which dynamically adds and removes classes to the elements currently visible on screen. 

- Follow mouse: There is a div which follows the mouse's pointer position using document.onpointermove. With some css animations to rotate and transform.  The keyframes and styling for this can be seen in the _components.scss partial and the logic used to follow the mouse is in main.js. Which uses the onpointermove event listener to ajust it's top and left elements depending on the page X and Y values. 

## Accessability 
This website was built was accessability in mind. By default the website does have on-scroll animations: if you wish to disable these please use the preferes reduced motion setting within your operating system. 
Light house score: 

![lighthouse score](https://i.ibb.co/hHJGcPC/lighthouse-score.jpg)


(If you don't disable the on scroll animations using preferes reduced motion, the lighthouse test will fail)

![css media query](https://i.ibb.co/brYj5TT/carbon.png)
