# nflawren.github.io

Nicole Lawrence personal website created for a Web Development course at
Boston University, in pursuit of a graduate certificate in Web Application
Development.

Assignment information:

How would you describe the website design?  Does it use a color theme?
* I used a color theme generated from https://coolors.co/ that I modified to
include an additional light color. I like the shades of green and the tone
they give the site, and I used the dark purple instead of black to bring some more
warmth to the site.

How would you describe the website layout?  Does it flow when resizing the window?
* The main focus for the website layout was for it to look kind of static in the middle.
With more time or ideas for design, I think adding a background picture would really
bring the site together. It does flow when resizing to keep the white area on the sides.


How would you describe the text?  Is it readable?
* The text is readable in size, and where I used a darker background, I used a lighter
font color to maintain readability.


How would you describe the navigation?  Is it consistent across all pages?
* The navigation is the same vue component across all pages, so it is consistent. The
only time it changes is when it's been resized, and that's to condense. The navigation
also clearly highlights the page that you're currently on.

Have you included an image on every page?  Do they have Alt, Height, Width attributes?
* There are images on 4/6 pages. I didn't want to arbitrarily add images to the pages where
images didn't make sense. They have alt and height attributes. Most of them don't contain
a width attribute because only the height was relevant to the design, and the width rescaled
appropriately


Does the site have any broken links?  Does it work in every browser?
* There are no broken links, there is an external link on the About Me page. Of the browsers
I was able to test, it works in every browser.

Does the site use 5 – 7 new HTML5 semantic elements?  Does it use a good variety of HTML elements, bold, italics, highlighting, etc….?
* Yes, the site uses `<figure>`, `<header>`, `<main>`, `<nav>`, and `<section>`. The site also 
uses a variety of other HTML tags as well.

On what pages does the site use JavaScript?  Do you think it shows mastery of the topic?
* The site uses JavaScript on the Fun Facts page. It is used to create an interactive game of two
truths and a lie, it detects which option was clicked, whether it was correct, and returns a message.
It reacts from the DOM, performs logic, then modifies the DOM, which I think shows mastery.

On what pages does the site use Vue.js?  Given more time do you think you would use Vue on every page?
* Every page uses Vue.js in the Nav component. I think that anywhere a page is taking or modifying data would
be a place I would want to use Vue. With more time, I think that my fun facts page would have been a good place
to implement a Vue component.

How does the site update the DOM?  What pages show examples of updating the DOM?
* The site updates the DOM on the Fun Facts page. After the user clicks an answer, a div underneath displays
with text indicating the correct answer and is a different message if it was wrong or right.

Does the site include extra credit, including: PHP, Database, Flexbox, Grid, CSS Media Queries or AJAX.  Please explain.
* The site uses CSS Grid on the Fun Facts Page and the Resume page to help organize the items in specific areas.
