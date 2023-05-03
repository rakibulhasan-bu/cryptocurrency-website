import React from 'react';
import CalcForm from './CalcForm';

const Calculate = () => {
  return <section className='section'>
    <div className="container mx-auto">
      {/* Calculate text  */}
      <div className='text-center'>
        <h2 className='section-title' data-aos='fade-up' data-aos-offset='400'>Check how much you can earn</h2>
        <p className='section-subtitle text-lg mb-16 max-w-2xl mx-auto' data-aos='fade-up' data-aos-offset='450'>Let’s check your hash rate to see how much you will earn today, Exercitation venial consequent sung nostrum amen.</p>
      </div>
      {/* Calculate form  */}
      <CalcForm />
    </div>
  </section>;
};

export default Calculate;
