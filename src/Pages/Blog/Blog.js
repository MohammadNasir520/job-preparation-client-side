import React from "react";
import Accordion from "react-bootstrap/Accordion";
import'./blog.css'

const Blog = () => {
  return (
    <div className="blog">
    <Accordion className="container mt-5" defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header> what is cors?</Accordion.Header>
        <Accordion.Body>
          Cross-origin resource sharing (CORS) is a mechanism that allows
          restricted resources on a web page to be requested from another domain
          outside the domain from which the first resource was served.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className>
          {" "}
          Why are you using firebase? What other options do you have to
          implement authentication?
        </Accordion.Header>
        <Accordion.Body>
          We are using Firebase because The Firebase Realtime Database lets us
          build rich, collaborative applications by allowing secure access to
          the database directly from client-side code. Data is persisted
          locally, and even while offline, realtime events continue to fire,
          giving the end user a responsive experience.
          <br />
          <br />
          <span className="fw-bold">
            {" "}
            Competitors and Alternatives to Firebase Realtime Database
          </span>
          <br /> MongoDB.
          <br />Oracle Database.
          <br /> Amazon Redshift.
          <br /> DataStax Enterprise.
          <br /> Redis Enterprise Cloud.
          <br /> Cloudera Enterprise Data Hub.
          <br /> Db2.
          <br /> Couchbase Server.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header className>
          {" "}
          How does the private route work?
        </Accordion.Header>
        <Accordion.Body>
        The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header className>
          {" "}
          What is Node? How does Node work?
        </Accordion.Header>
        <Accordion.Body>
            <span className="fw-bold">What is Node?</span>
            <br />
        Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine (i.e. V8 engine) and executes JavaScript code outside a web browser, which was designed to build scalable network applications. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.
        <br /> <br />
        <span className="fw-bold">How does Node Work?</span>
       Node is  used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
};

export default Blog;
