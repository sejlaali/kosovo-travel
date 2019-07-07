# Project Overview

You are responsible for scheduling time with your squad to seek approval for each deliverable by the end of the day

Day | Deliverable | Status
--- | --- | ---
Day 1	|Project Description |Complete
Day 2	|Wireframes / Priority Matrix / Functional Components |Incomplete
Day 3	|Core Application Structure (HTML, React setup, etc.) |Incomplete
Day 4	|Pseudocode / actual code |Incomplete
Day 5	|Initial Clickable Model |Incomplete
Day 6	|MVP |Incomplete
Day 7	|Present |Incomplete

## Project Description
For my final project I would like to create an official website for Kosovo. I am planning on building out a homepage, "About Kosovo", "Things to do" and "Plan your trip." I will also incorporate a login where users can write a review under the things to do component.

## Wireframes
Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.

i.e
https://www.france.fr/en/holiday-prep
https://denmark.dk/society-and-business

## Priority Matrix
Include a full list of features that have been prioritized based on the Time and Importance Matix.

#### MVP
Different routes rendering
User able to log in/signup/log out
Ability to write reviews
Profile with user's information

#### PostMVP
When user writes a review on the activity, it shows up on their 'profile page'
Ability to 'like' a review

## ERD
https://res.cloudinary.com/dfzjh0dui/image/upload/v1562437998/Screen_Shot_2019-07-06_at_2.32.18_PM.png

## UI Components
https://res.cloudinary.com/dfzjh0dui/image/upload/v1562513412/Screen_Shot_2019-07-07_at_11.29.33_AM.png

#### SAMPLE.....
Component |	Description
--- | --- 
App.js |This will render the nav and homepage component
Homepage| This will render positive news articles for the country
Login | This will handle the login and redirect user to profile
Signup | This will handle the signup and redirect user to profile
Logout | This will handle the logout and redirect user to homepage
Profile | Will render reviews written by user and user info
About us | Informational component that renders info
Things to do | Will render activities that user can do, planning on map over and linking each to one activity component
One Activity | This will specify what will be rendered from each activitiy and will show reviews
Review form | This will be rendered on one activity


Time frames are also key in the development cycle. You have limited time to code all phases of the game. Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

#### SAMPLE.....
Component	| Priority |	Estimated Time | Actual Time
--- | ---| --- | ---
Setting up auth on backend (login, logout signup)| H	|8hrs|	hrs
Setting up relationship/database | H	|5hrs|	hrs
Setting up auth on frontend (login, logout signup)| H |7hrs| hrs
Functionality to submit and show reviews for all users |H |6hrs |hrs
Total |	H | 26hrs	|hrs

Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

#### SAMPLE.....
Function	Description
Capitalize	This will capitalize the first letter in a string of text
Additional Libraries
Use this section to list all supporting libraries and thier role in the project.

#### External Libraries/Packages
Library	| What it Does
--- | --- 
Devise	|Used for authentication
React responsive | Allows for react app to be responsive

Code Snippet
Use this section to include a brief code snippet of functionality that you are proud of an a brief description

#### SAMPLE.....
function reverse(string) {
	// here is the code to reverse a string of text
}
Change Log
Use this section to document what changes were made and the reasoning behind those changes.

#### SAMPLE.....
Original Plan	Outcome
Have one Book component	Split that component into BookInfo and BookInteraction as the component grew too complicated
Issues and Resolutions
Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
ERROR: app.js:34 Uncaught SyntaxError: Unexpected identifier
RESOLUTION: Missing comma after first object in sources {} object
