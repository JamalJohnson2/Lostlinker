import React from 'react';
import './Homepage.css';
import imagePaths from '../components/imagepaths';

function Homepage() {
  return (
    <>
    <div className = "navbar">
    <div className = "left">
    <div className = "logo">
    <div className = "h1-nav">LostLinker</div>
        </div>
    </div>
    <div    className = "right">
    <a      href      = "#">Help</a>
    <a      href      = "#">Contact</a>
    <a      href      = "#">Login</a>
    <button className = "submit-button">Submit</button>
    </div>
    </div>
    <div className = "navbar-line"></div>
    <div className = "big-container">
    <div className = "column">
        <h1>Find everything you lost</h1>
        <p>Exchange information about lost or found items. Use all the tools to find lost items.</p>
    </div>
    <div className = "image-container">
    <img src       = {imagePaths.Bannerimg} alt = "Bannerimg" />
    </div>
  </div>
  <div className = "container-row">
  <h2>Featured</h2>
  <div className = "container">
  <img src       = {imagePaths.Item1} alt = "Image 1" />
  <div class     = "overlay">
      <p>Iphone 13 Promax</p>
    </div>
  </div>
  <div className = "container">
  <img src       = {imagePaths.Item2} alt = "Image 2" />
  <div class     = "overlay">
      <p>M249 Light Machine Gun Squad Automatic Weapon</p>
    </div>
  </div>
  <div className = "container">
  <img src       = {imagePaths.Item3} alt = "Image 3" />
  <div class     = "overlay">
      <p>Jamal Davis</p>
    </div>
  </div>
  <div className = "container">
  <img src       = {imagePaths.Item4} alt = "Image 4" />
  <div class     = "overlay">
      <p>AeroFalcon AF-77</p>
    </div>
  </div>
  <div className = "container">
  <img src       = {imagePaths.Item5} alt = "Image 5" />
  <div class     = "overlay">
      <p>Eggbert</p>
    </div>
  </div>
</div>
<div class = "testimonial-block">
  <h3>Get Back What's Lost</h3>
  <h1>Discover What Our Community Says</h1>
  <p>This encourages visitors to the website to take a closer look at the experiences and feedback shared by others, creating a sense of curiosity and engagement. 
    It suggests that there are valuable insights to be gained from these testimonials..</p>
  <div class = "testimonials-container">
  <div class = "testimonial">
  <img src   = {imagePaths.student1} alt = "Testimonial Image" class = "testimonial-image"/>
  <div class = "testimonial-content">
        <p>"I had almost given up hope of finding my lost laptop, which contained all my important assignments. But thanks to this incredible platform, 
          I was reunited with it within days. The service was a lifesaver, and I can't express how grateful I am. It's a must-try for all students!"</p>
        <p class = "testimonial-student">- Emily, College Student</p>
      </div>
    </div>
    <div class = "testimonial">
    <img src   = {imagePaths.student2} alt = "Testimonial Image" class = "testimonial-image"/>
    <div class = "testimonial-content">
        <p>"Finding my missing backpack, with my textbooks and personal belongings, was a huge relief. I had doubts about ever getting it back, but this website 
          made it possible. The quick response and assistance were outstanding. If you ever lose something, give this platform a shot!"</p>
        <p class = "testimonial-student">- David, High School Student</p>
      </div>
    </div>
  </div>
  <p      class = "report-text">Get Help with Your Lost Belongings</p>
</div>
<div className = "grid-container">
<div className = "right-container">
      <img src       = {imagePaths.imagehero} alt = "Hero-image" class = "hero-image"/>
      </div>
<div className = "left-container">
        <h1>Join over 20k+ users</h1>
        <p>Join our journey toward a brighter future. Help us reunite lost belongings with their owners and uncover valuable life lessons in the process. 
          Together, we create a community where finding lost items mirrors personal growth and learning. Your participation contributes to a vision of a more secure, 
          compassionate, and enlightened world.</p>
        <button class = "login-button">Log in</button>
      </div>
    </div>
    </>
  );
}

export default Homepage;
