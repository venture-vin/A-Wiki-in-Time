# A Wiki in Time
[A Wiki in Time](http://a-wiki-in-time.herokuapp.com/) is a public web application for unearthing many of mankind's greatest conquests over humanity. From great known explorers such as [Christopher Columbus](https://en.wikipedia.org/wiki/Christopher_Columbus), to great sieges such [The Great Siege of Gibraltar](https://en.wikipedia.org/wiki/Great_Siege_of_Gibraltar), user's will be able to receive a guided trek through history with our interactive encyclopedia experience.

<image src="https://cloud.githubusercontent.com/assets/4556983/16510454/1bfb7f56-3efb-11e6-8db0-b707e039d1fa.gif" width=1249>


# Table of Contents

* [Team Members](#team-members)
* [Project Demo](#project-demo)
* [Site Architecture](#site-architecture)
* [Why an Interactive Encyclopedia?](#interactive-encyclopedia)
* [Goals](#goals)
* [Installation](#installation)
* [Instructions](#instructions)
* [Features](#features)
* [Resources Used](#resources)

# <a name="team-members"></a>Team Members
* [Chris Lamkin](https://github.com/Cjwired57)
* [Ben Goldstein](https://github.com/BenGoldstein88)
* [Olya Royall](https://github.com/venture-vin)
* [Raymond Sapida](https://github.com/raysapida)
* [Brian Mosley](https://github.com/brianlmosley)


## <a name="project-demo"></a>Project Demo

[A Wiki in Time](http://a-wiki-in-time.herokuapp.com/#/?_k=jqhwhn)

#### <a name="site-architecture"></a>Site Architecture

<image src="https://cloud.githubusercontent.com/assets/4556983/16496350/5d358cbe-3ea6-11e6-8e29-a87e0b0cce54.png" height=378 width=1249>

#### <a name="interactive-encyclopedia"></a>Why an Interactive Encyclopedia?

We wanted to build an application that would be both practical, and easy to navigate with, for non-technical users in regards to obtaining information quickly. This is where the idea of creating a "live" representation of the users search results, by populating a globe in real time, was implemented. With Wikipedia as our data source, users are able to query our database for "at-a-glance information, to be consumed in reasonable chunks quickly. If a user is not interested in any particular research result, the user can scour the globe for other events within their query dates, making "A Wiki in Time" effective at data collection.

#### <a name="goals"></a>Goals

The main focus of A Wiki in Time was to accomplish these tasks:

- [x] Build an interactive web application that responds to human input swiftly.
- [x] Categorize major historic figures and battle events, that can be placed on our globe to plot world history seamlessly.
- [x] Conduct user tests to drive our focus on user experience, in order to populate our globe with visually enriched content.
- [x] Explore inventive ways to use both React.js and Ruby on Rails to strengthen our knowledge of building a decoupled application experience.



#### <a name="installation"></a>Installation
If you haven't already, please install node.js here: [https://nodejs.org/en/](https://nodejs.org/en/).

Node.js comes with a package manager, called NPM, which you will need to work with Webpack for this project. Instructions for Webpack can be found here: [https://webpack.github.io/docs/installation.html](https://webpack.github.io/docs/installation.html).

To run the frontend portion of our application, follow this link here for the github repo, [https://github.com/venture-vin/A-Wiki-in-Time](https://github.com/venture-vin/A-Wiki-in-Time), and now this one for the backend, [https://github.com/BenGoldstein88/A-Wiki-in-Time](https://github.com/BenGoldstein88/A-Wiki-in-Time).

Then follow these instructions to run the frontend:

```bash
$ git clone https://github.com/venture-vin/A-Wiki-in-Time
$ cd A-Wiki-in-Time
$ npm install
$ npm run build
$ npm run start

```


And now this portion to run the backend:

```bash
$ git clone https://github.com/BenGoldstein88/A-Wiki-in-Time
$ cd A-Wiki-in-Time
$ gem install httparty
$ gem install nokogiri
$ bundle install
$ bundle install && rake db:drop && rake db:create && rake db:migrate && rake db:seed
$ rails s

```


#### <a name="instructions"></a>Instructions

A user's journey will begin by dragging and placing the "Search Marker" anywhere on the globe down for querying events. Then, a user will select a category from the drop down category box, and select a "Start Year", "End Year", and a "Radius" before clicking on the submit button to populate their queries around the radius of the "Search Marker". From there, a user can either click on any of the specific markers placed down by category, to either read more about their query or click on a Wikipedia link to search further.

Try out our herokuapp here:
[http://a-wiki-in-time.herokuapp.com/#/?_k=to38h4](http://a-wiki-in-time.herokuapp.com/#/?_k=to38h4)

#### <a name="features"></a>Features

##### Polygon Mode

Assassinations in the state of Florida, in the United States. These assassinations are only from the date range of 1944 to 2016, restricted by the boundaries defined by Polygon Mode.

![florida-assassinations 50 pm](https://cloud.githubusercontent.com/assets/4556983/16509791/45cae822-3ef5-11e6-83bf-019e9f8f935a.png)

Polygon Mode is another way for users to interact with our interface. Once enabled, a malleable polygon, in the shape of a triangle,  will appear on the map giving users the ability to refine their query search by the specific shape the user creates on our globe.


##### The Sidebar

Querying Archaeological Sites between the tips of Northern Africa and parts of Europe.

![side-bar](https://cloud.githubusercontent.com/assets/4556983/16509671/1a295600-3ef4-11e6-88e7-ce851d4e8996.png)

After submitting your query results, and clicking on the "Search Results" button, a user will have access to the "Side bar".The Side Bar is a left to right slide in tab that lists all of the queries returned from the search, in a bigger, scrollable, and readable page for the user to see. Displayed in the Side Bar, is a brief description of an event as well as a click-able Wikipedia link, for further data exploration by the user.

##### Event Markers

These are the event markers for each event type that can be selected.

- ![Search Marker](https://github.com/venture-vin/A-Wiki-in-Time/blob/master/app/images/search-marker.png?raw=true) Search Marker
- ![Marker 1](https://github.com/venture-vin/A-Wiki-in-Time/blob/master/app/images/event-marker-1.png?raw=true) Battles
- ![Marker 2](https://github.com/venture-vin/A-Wiki-in-Time/blob/master/app/images/event-marker-2.png?raw=true) Assassinations
- ![Marker 3](https://github.com/venture-vin/A-Wiki-in-Time/blob/master/app/images/event-marker-3.png?raw=true) Sieges
- ![Marker 4](https://github.com/venture-vin/A-Wiki-in-Time/blob/master/app/images/event-marker-4.png?raw=true) Explorers
- ![Marker 5](https://github.com/venture-vin/A-Wiki-in-Time/blob/master/app/images/event-marker-5.png?raw=true) Natural Disasters
- ![Marker 6](https://github.com/venture-vin/A-Wiki-in-Time/blob/master/app/images/event-marker-6.png?raw=true) Archaeological Sites

#### <a name="Resources"></a> Resources Used
- [Rails Api](https://github.com/rails/rails)
- [BootStrap](http://getbootstrap.com/)
- [Google Maps Api](https://developers.google.com/maps/documentation/javascript/)
- [WebPack](https://github.com/webpack/webpack)
- [Babel](https://github.com/babel/babel)
- [React.js](https://facebook.github.io/react/)
- [Axios](https://www.npmjs.com/package/axios)
- [Jquery](https://github.com/jquery/jquery)
- [HttParty](https://github.com/jnunemaker/httparty)
- [Mechanize via Nokogiri](https://github.com/sparklemotion/mechanize)
- [MediaWiki](https://www.mediawiki.org/wiki/API:Main_page)
- [WikiData Api](https://www.wikidata.org/wiki/Wikidata:Data_access)
- [GeoCoder](https://github.com/alexreisner/geocoder)
