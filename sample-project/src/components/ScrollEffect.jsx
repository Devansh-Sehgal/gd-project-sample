import React from 'react';
import ServicesSection from './ServicesSection.jsx';
import SolutionsSection from './SolutionsSection.jsx';
import ProductsSection from './ProductsSection.jsx';

const ScrollEffect = () => {
  return (
    <div className='px-10'>

      <div className="md:h-[890px] overflow-y-scroll scrollbar-hide relative w-full items-center">
        {/* Services Section */}
        <div className="sticky top-0 rounded-3xl w-full bg-white h-fit">
          <ServicesSection />
        </div>

        {/* Solutions Section */}
        <div className="sticky top-20 rounded-3xl w-full bg-white h-fit">
          <SolutionsSection />
        </div>

        {/* Products Section */}
        <div className="sticky top-30 rounded-3xl w-full bg-white h-fit">
          <ProductsSection />
        </div>
      </div>
    </div>
  );
};

export default ScrollEffect;
