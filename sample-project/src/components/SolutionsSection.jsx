
// import { useRef } from 'react';
// import { ShoppingBag, ShoppingCart, Package, Store, ShirtIcon, Loader } from 'lucide-react';

// const SolutionsSection = () => {
//   const solutions = [
//     {
//       icon: ShirtIcon,
//       title: 'Fashion Distribution',
//       description: 'Streamline your fashion supply chain with real-time inventory tracking across warehouses and distribution centers.'
//     },
//     {
//       icon: ShoppingBag,
//       title: 'Lifestyle Brands',
//       description: 'Unified inventory management for multi-category lifestyle products with seasonal demand forecasting.'
//     },
//     {
//       icon: Store,
//       title: 'Fashion Retail',
//       description: 'Size/color matrix management, style-level analytics, and omnichannel inventory optimization for fashion retailers.'
//     },
//     {
//       icon: ShoppingCart,
//       title: 'Supermarkets',
//       description: 'Fresh inventory management with shelf-life tracking, auto-replenishment, and waste reduction analytics.'
//     },
//     {
//       icon: Package,
//       title: 'D2C Brands',
//       description: 'Direct-to-consumer inventory solutions with integrated fulfillment, returns management, and customer insights.'
//     },
//     {
//       icon: Loader,
//       title: 'Product Management',
//       description: 'Comprehensive product lifecycle management from concept to retirement with full visibility.'
//     }
//   ];

//   const containerRef = useRef(null);

//   return (
//     <section id="solutions" className="py-20">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="text-center mb-16 max-w-3xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Solutions</h2>
//           <p className="text-lg text-muted-foreground">
//             Specialized inventory solutions for different retail segments, designed to address unique industry challenges.
//           </p>
//         </div>
        
//         <div 
//           ref={containerRef}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           {solutions.map((solution, index) => (
//             <div 
//               key={index}
//               className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-border group hover:shadow-xl transition-all duration-300 relative overflow-hidden service-card"
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
//               <div className="relative z-10">
//                 <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
//                   <solution.icon size={24} />
//                 </div>
                
//                 <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
//                 <p className="text-muted-foreground">{solution.description}</p>
                
//                 <div className="h-1 w-0 bg-primary mt-6 transition-all duration-300 group-hover:w-full"></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SolutionsSection;



// import { ShirtIcon, ShoppingBag, Store, ShoppingCart, Package, Loader } from 'lucide-react';

// const SolutionsSection = () => {
//   const solutions = [
//     {
//       icon: ShirtIcon,
//       title: 'Fashion Distribution',
//       description: 'Streamline your fashion supply chain with real-time inventory tracking across warehouses and distribution centers.'
//     },
//     {
//       icon: ShoppingBag,
//       title: 'Lifestyle Brands',
//       description: 'Unified inventory management for multi-category lifestyle products with seasonal demand forecasting.'
//     },
//     {
//       icon: Store,
//       title: 'Fashion Retail',
//       description: 'Size/color matrix management, style-level analytics, and omnichannel inventory optimization for fashion retailers.'
//     },
//     {
//       icon: ShoppingCart,
//       title: 'Supermarkets',
//       description: 'Fresh inventory management with shelf-life tracking, auto-replenishment, and waste reduction analytics.'
//     },
//     {
//       icon: Package,
//       title: 'D2C Brands',
//       description: 'Direct-to-consumer inventory solutions with integrated fulfillment, returns management, and customer insights.'
//     },
//     {
//       icon: Loader,
//       title: 'Product Management',
//       description: 'Comprehensive product lifecycle management from concept to retirement with full visibility.'
//     }
//   ];

//   return (
//     <section id="solutions" className="py-6 bg-muted/50">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="text-center mb-8 max-w-3xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Solutions</h2>
//           <p className="text-lg text-muted-foreground">
//             Specialized inventory solutions for different retail segments, designed to address unique industry challenges.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {solutions.map((solution, index) => (
//             <div 
//               key={index}
//               className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
//               style={{ height: '250px' }}
//             >
//               <div className="flex items-center justify-center w-14 h-14 mb-4 bg-primary/10 rounded-full">
//                 <solution.icon size={24} />
//               </div>
//               <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
//               <p className="text-muted-foreground">{solution.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SolutionsSection;
import { ShirtIcon, ShoppingBag, Store, ShoppingCart, Package, Loader } from 'lucide-react';

const SolutionsSection = () => {
  const solutions = [
    {
      icon: ShirtIcon,
      title: 'Fashion Distribution',
      description: 'Streamline your fashion supply chain with real-time inventory tracking across warehouses and distribution centers.'
    },
    {
      icon: ShoppingBag,
      title: 'Lifestyle Brands',
      description: 'Unified inventory management for multi-category lifestyle products with seasonal demand forecasting.'
    },
    {
      icon: Store,
      title: 'Fashion Retail',
      description: 'Size/color matrix management, style-level analytics, and omnichannel inventory optimization for fashion retailers.'
    },
    {
      icon: ShoppingCart,
      title: 'Supermarkets',
      description: 'Fresh inventory management with shelf-life tracking, auto-replenishment, and waste reduction analytics.'
    },
    {
      icon: Package,
      title: 'D2C Brands',
      description: 'Direct-to-consumer inventory solutions with integrated fulfillment, returns management, and customer insights.'
    },
    {
      icon: Loader,
      title: 'Product Management',
      description: 'Comprehensive product lifecycle management from concept to retirement with full visibility.'
    }
  ];

  return (
    <section id="solutions" className="py-10 cursor-pointer h-full">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Solutions</h2>
          <p className="text-lg text-muted-foreground">
            Specialized inventory solutions for different retail segments, designed to address unique industry challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-border group hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              {/* Gradient Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <solution.icon size={24} />
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                <p className="text-muted-foreground">{solution.description}</p>

                {/* Hover Effect Line */}
                <div className="h-1 w-0 bg-primary mt-6 transition-all duration-300 group-hover:w-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
