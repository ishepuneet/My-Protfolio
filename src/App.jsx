import React, { useEffect, useRef } from 'react'
import Footer from './Common/Footer'
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Background from './Background';

export default function App() {

  const typingRef = useRef(null);


  useEffect(() => {
    const textElement = typingRef.current;

    const roles = [
      'Web Developer',
      // 'UI Designer',
      'Freelancer',
      'Coder',
      'Back-end Dev',
      'Front-end Dev',
    ];

    let roleIndex = 0;
    const speed = 100;

    function typeText(text, callback) {
      textElement.innerHTML = 'I am a <br><span class="roled"></span>..';
      const roleSpan = textElement.querySelector('.roled');
      let index = 0;

      function typeChar() {
        if (index < text.length) {
          roleSpan.textContent += text.charAt(index);
          index++;
          setTimeout(typeChar, speed);
        } else {
          setTimeout(callback, 1000);
        }
      }

      typeChar();
    }

    function loopRoles() {
      typeText(roles[roleIndex], () => {
        roleIndex = (roleIndex + 1) % roles.length;
        loopRoles();
      });
    }

    loopRoles();
  }, []);



  return (
    <div className=''>

      <Background />
      <div className="max-w-screen-2xl m-auto pt-20">

        <section className="typing md:my-0 h-screen py-40">
          {/* Typing Text */}
          <h1
            ref={typingRef}
            className="typing-text text-white lg:text-9xl md:text-8xl text-center"
          ></h1>
        </section>

        <About />
        <Skills />
        <Projects />
        <Footer />

      </div>

    </div >


  )
}
