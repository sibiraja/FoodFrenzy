import React from "react";

import "./Aboutpage.css";

const Aboutpage = () => {
    return(
        <React.Fragment>
            <div className="about">
                <h1>About FoodFrenzy!</h1>
                <p>FoodFrenzy! is a application that allows users to keep track of personal dining experiences, share reviews and notes of restaurants with other users, and get restaurant recommendations from others </p>
                <p>To get started, click on the "Login or Signup button" located on the top right corner of the website to create an account and start posting restaurant reviews!</p>
            </div>
            <div className="faq">
                <h1>Frequently Asked Questions</h1>
                <h3>How do I view my previous posts?</h3>
                <li>Click on the "Restaurants You've Reviewed" Button on the navigation bar</li>
                <h3>How do I view my other people's reviews?</h3>
                <li>Click on the "Food Ethusiasts" Button on the navigation bar and then click on a user's profile that has visited 1 or more restaurants to see their reviews</li>
                <h3>Who can post a review?</h3>
                <li>Anyone can post a review. All they need to do is create an account!</li>
                <h3>Can I be brutally honest?</h3>
                <li>Yes, but no profanity please. Both children and adults use this application, so keep it family-friendly!</li>
            </div>
        </React.Fragment>
    );
};

export default Aboutpage;