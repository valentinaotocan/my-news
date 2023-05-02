# My News

### 📰 About
My News is a news website with articles from different categories sorted chronologically. 
<br />
Homepage also contains the latest news widget which has infinite scroll functionality. <br />
The user can also click on a category in the sidebar which will take them to the category page containing articles from that category. <br />
The search component is always present, so the user can search for articles by their title. <br />
The app has a feature to mark articles as favorites and save them to the favorites page. 
<br />
<hr />

### 🕒 Timeline
I worked on this project for 18 days. <br>
I didn't want to leave any of the requirements out and when I was looking for a solution I didn't just copy and paste what I found, but rather adjust it as well as understand it. <br />
The project was very interesting and a good practice.
<hr />

### 🛠️ Technology
In this project I used:
* Vite - build tool
* Vite Plugin Svgr - converts SVG into React components
* React.js - building UI
* React Router - routing and navigation
* React Infinite Scroller - component for scrolling
* React Viewport Height - calculating the height of the viewport in React
* TypeScript - logic creation
* SCSS - styling
* BEM Metodology - naming convention
<hr />

###  🤖 API
I fetch data from https://newsapi.org/. It is straightforward to use and has a easily readable documentation. <br /> 
NewsAPI developer plan allows for local-only use, therefore I have pushed .env to Github so you don't have to register to get an API key. <br />
I know it's not correct to make your API keys public, but I wanted to save your time.
<br />
☢️ On the topic what is not correct, I know that useEffect might not be the most ideal approach for this project, for example React Query library would be much better because it would reduce the number of API requests, but I'm not confident with it <b>yet</b>.
<hr />

### 🖌️ Design choices
The favorites functionality button was discreetly placed in the top left corner of the article card to keep the focus on the article card content but still be visible to the user if they wish to mark the article as favorite. <br />
I've chosen the star icon as users will immediately know what that button is for. <br />
As for the link to reach the favorited articles, I've decided to place it at the bottom of the sidebar (or the end of the list on smaller screens) so it's easily spotted and to have all the pages links in one place. <br />
For articles which don't have an image, I have design a defaul image.
<hr />

### 🚀 Installation and usage
1. git clone https://github.com/valentinaotocan/my-news
2. cd my-news
3. npm install
4. npm run dev
