import React from 'react';
import Header from '../Header/Header';

const Contact: React.FC<{}> = () => {
    const headingOne = "Contact Me";
    const headingFour = "Get In Touch";
    return (
        <>
            <Header headingOne={headingOne} headingFour={headingFour} />
            <div className="wrapper">
      <div className="pad">
        <div className="social-media">
          <div className="social-para">
            <h3>Github</h3>
            <p>
              See my past projects, and anything that I am currently working on.
            </p>
            <a href="https://github.com/relizabet"
              > <i className="fa fa-github" aria-hidden="true"> </i></a>
          </div>
          <div className="social-para">
            <h3>LinkedIn</h3>
            <p>
              Visit my LinkedIn profile to see my work history and job
              experience.
            </p>
            <a
              href="https://www.linkedin.com/in/rachel-elizabeth-campbell-2273a8137/"
            > 
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </div>
          <div className="social-para">
            <h3>Twitter</h3>
            <p>
              Want to keep up with me on social media? Follow me on twitter.
            </p>
            <a href="https://twitter.com/rachelizacampb1" > 
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="pad"></div>
      <div className="pad"></div>
    </div>
        </>
    );
}

export default Contact;