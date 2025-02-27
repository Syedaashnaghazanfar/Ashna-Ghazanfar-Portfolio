// import Image from 'next/image';
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';

// // export default function Portfolio({ projects: }) {
//   return (
//     <div className="container py-16 md:py-20" id="portfolio">
//       <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
//         Check out my Portfolio
//       </h2>
//       <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
//         Here is what I have done in the past
//       </h3>
      
//       <div className="mx-auto w-full px-4 pt-12 sm:w-3/4 lg:w-full lg:px-8">
//         {/* Best Project on Top */}
//         {projects.find(project => project.best) && (
//           <div className="relative overflow-hidden rounded-lg shadow-lg p-6 border-4 border-yellow-500 mb-8">
//             <Badge className="absolute top-4 right-4 bg-yellow-500 text-white">Best of All</Badge>
//             <Image src={projects.find(project => project.best).img} alt={projects.find(project => project.best).title} width={700} height={400} className="w-full rounded-md" />
//             <h3 className="pt-4 text-xl font-semibold uppercase text-primary">{projects.find(project => project.best).title}</h3>
//             <p className="pt-2 text-gray-700 text-sm md:text-base">{projects.find(project => project.best).desc}</p>
//             <Link href={projects.find(project => project.best).link} className="inline-block mt-4">
//               <Button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white">View Project</Button>
//             </Link>
//           </div>
//         )}

//         {/* Remaining Projects in Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
//           {projects.filter(project => !project.best).map((project, index) => (
//             <div key={index} className="relative overflow-hidden rounded-lg shadow-lg p-6 border-2 border-yellow-400 transition-all duration-500 hover:scale-105">
//               <Image src={project.img} alt={project.title} width={500} height={300} className="w-full rounded-md" />
//               <h3 className="pt-4 text-xl font-semibold uppercase text-primary">{project.title}</h3>
//               <p className="pt-2 text-gray-700 text-sm md:text-base">{project.desc}</p>
//               <Link href={project.link} className="inline-block mt-4">
//                 <Button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white">View Project</Button>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
