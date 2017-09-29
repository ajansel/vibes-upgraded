# Vibes
## Description
Vibes is a social media app that let's users express themselves via lyrics,
rather than their own words. It's as simple as searching for a song,
highlighting a snippet of lyrics from that song, and clicking post.

## Project Design
Vibe was designed over a two week period in September of 2017. Prior to
being designed a list of Minimum Viable Products (MVPs) along with sample
component hierarchy, routes, sample state, schema, and wireframes were
created in order to demonstrate the planning process before development and
to have as resources through the development process. These MVPs were then carefully tracked via GitHub issues and regular check-ins with our Project Advisor to ensure we were meeting deadlines and on track to finish by the
final deadline.

## Technologies
Vibes is built using Ruby on Rails 5.0 as its backend and PostgreSQL for
database management. jQuery AJAX requests were used to communicate with
the backend and all responses render JSON back to the front-end that uses [React](https://reactjs.org/), a JavaScript library for building
user interfaces developed by Facebook.

React was used on the front-end in combination with the state management
library/pattern, Redux, to create a singe-page web application
that does not need to render the entire page every time something changes
but rather renders certain components on the page that changed, leading to
a much better UX.

## Key Features
  + User accounts and authentication using BCrypt to ensure protection
  + User dashboard and profiles
  + Live asynchronous user search
  + Real, searchable, seed data using the top 10 songs from the top 50 current artists
  + Post creation tool using user highlighted text

## Future Plans
  + O-Auth implementation, which would allow:
    + Sign in through Google/Facebook
    + Use of lyric/song APIs to expand the database to every existing song
    + Posting to Facebook, Twitter, Tumblr, and/or Instagram in addition to Vibes
  + Additional responsive Design
    + Ensure compatibility on all browsers
    + Touch screen highlighting ability
    + Use React Native to develop Vibes as an app in the App store
  + Further polished User Interface
    + Review from a design specialist
    + Create official logo
    + Survey users on how it could improve / be easier to use
