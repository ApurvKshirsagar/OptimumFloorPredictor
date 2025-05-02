import React from 'react';
import './AboutUs.css';

// Import images from assets folder
import member1 from '../../assets/shivendra.jpg';
import member2 from '../../assets/apurv.jpg';
import member3 from '../../assets/aditya.jpg';
import member4 from '../../assets/aayush.jpg';
import member5 from '../../assets/radha.jpg';

const teamMembers = [
  {
    name: 'Shivendra Kumar Gupta',
    role: 'Project Lead',
    img: member1,
    desc: 'Shivendra specializes in crafting innovative methodologies that turn bold concepts into cutting-edge products—navigating like a skilled captain, steering each idea to successful realization.',
  },
  {
    name: 'Apurv Kshirsagar',
    role: 'Software Developer',
    img: member2,
    desc: "Apurv writes code so clean, you could eat off it. A bug's worst nightmare and a meme lord by night, he’s always ready to squash errors",
  },
  {
    name: 'Aditya Aggarwal',
    role: 'Researcher',
    img: member3,
    desc: 'Aditya dives into data like a detective on a mission, unearthing insights others miss. He’s the team’s secret weapon for turning wild ideas into actionable strategies-and can quote more sci-fi than you’d think possible.',
  },
  {
    name: 'Aayush Anuj Chodhary',
    role: 'Researcher',
    img: member4,
    desc: 'Aayush brings Sherlock-level curiosity to every project, always asking ‘why not?’ instead of just ‘why.’ He’s the master of deep dives, late-night brainstorms, and the occasional philosophical debate over chai.',
  },
  {
    name: 'Radha Agrawal',
    role: 'UI/UX Developer',
    img: member5,
    desc: 'Radha turns pixels into pure magic. With an eye for detail and a knack for making the complex look simple, she crafts interfaces that users fall in love with-while keeping the team’s playlist on point.',
  },
];

export default function AboutUs() {
  return (
    <div className='about-section'>
      <h1 className='about-title'>About Us</h1>
      <p className='about-description'>
        Meet the team behind SkyCost Dashboard. Our diverse group of experts is
        dedicated to delivering powerful analytics and intuitive tools for
        high-rise project planning.
      </p>
      <div className='team-cards-container'>
        {teamMembers.map((member, idx) => (
          <div key={idx} className='team-card'>
            <img src={member.img} alt={member.name} className='team-card-img' />
            <div className='team-card-info'>
              <h2 className='team-card-name'>{member.name}</h2>
              <p className='team-card-role'>{member.role}</p>
              <p className='team-card-desc'>{member.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
