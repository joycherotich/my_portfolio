import React from 'react';

const Projects = () => {
  return (
    <div name="projects" className='w-full'>
      <section>
        <div className='title'>
          <h2 className='subtitle'>Projects</h2>
        </div>
        <div className='flex justify-center'>
          <p className='text-xl mb-3 dark:text-[var(--primary2)]'>Here we sample a few of my <span className='span'>projects</span></p>
        </div>
        <div className='grid grid-cols-2 w-full h-full max-w-[1000px] mx-auto'>
          <div className='relative mx-5 rounded-md'>
          <img src="/images/screenshot.png" alt="shuleni website" className='school-image' />
            <div className='project'>
              <a href="https://shuleni-client.netlify.app/" target="_blank" rel="noreferrer" className='hover:text-[var(--secondary)]'>CODE</a>
              <a href="/" target="_blank" rel="noreferrer" className='hover:text-[var(--secondary)]'>DEMO</a>
            </div>
          </div>
          <div className='relative mx-5 rounded-md'>
            <img src="/images/meme.png" alt="meme-creator" className='meme-image' />
            <div className='project'>
              <a href="https://meme-app-omega.vercel.app/" target="_blank" rel="noreferrer" className='hover:text-[var(--secondary)]'>CODE</a>
              <a href="/" target="_blank" rel="noreferrer" className='hover:text-[var(--secondary)]'>DEMO</a>
            </div>
          </div>
          <div className='relative mx-5 rounded-md'>
            <img src="/images/bakery.jpeg" alt="bakery-shop" className='animated-image' />
            <div className='project'>
              <a href="https://admirable-pie-7df123.netlify.app/" target="_blank" rel="noreferrer" className='hover:text-[var(--secondary)]'>CODE</a>
              <a href="/" target="_blank" rel="noreferrer" className='hover:text-[var(--secondary)]'>DEMO</a>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Projects;
