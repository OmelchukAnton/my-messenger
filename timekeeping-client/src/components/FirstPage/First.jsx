import React from 'react';

import './StartPage.scss';

const FirstPage = () => (
  <main className="first-page">
    <article> Welcome! </article>
    <div className="glad"> Glad you are here... </div>
    <section className="fist-body">
      <div className="picture">
        <div>
          <img src="./avatars/lists.jpg" alt="example-listOfContacts" className="round1" />
          <img src="./avatars/chat.jpg" alt="example-chat" className="round2" />
        </div>
      </div>
      <div className="gotoReg">
        <h1> about SPA... </h1>
        <form action="/reg">
          <button className="submit-button">Log in</button>
        </form>
      </div>
    </section>
  </main>
);
export default FirstPage;
