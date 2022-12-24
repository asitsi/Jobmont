import React from 'react';
import './Home.scss';
import Navbar from 'src/components/Navbar/Navbar';
import Footer from 'src/components/Footer/Footer';
import Aboutus from 'src/components/Aboutus/Aboutus';
import Services from 'src/components/Services/Services';
import JobSolution from 'src/components/JobSolusion/JobSolution';
import Projects from 'src/components/Projects/Projects';
import Team from 'src/components/Team/Team';
import Testimonial from 'src/components/Testimonial/Testimonial';
import Blogs from 'src/components/Blogs/Blogs'

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Aboutus />
      <Services />
      <JobSolution />
      <Projects />
      <Team />
      <Testimonial />
      <Blogs />
      <Footer />
    </React.Fragment>
  )
}

export default Home;