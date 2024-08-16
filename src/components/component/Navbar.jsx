// import Link from 'next/link';
// import { useRouter } from 'next/router';

// const Navbar = () => {
//   const router = useRouter();

//   // Function to get the hash part of the current URL
//   const getHashFromPath = (path) => {
//     return path.split('#')[1] || '';
//   };

//   const navItems = [
//     { name: 'Our Services', href: '#services' },
//     { name: 'Meet Our Team', href: '#team' },
//     { name: 'What Our Clients Say', href: '#testimonials' },
//     { name: 'Get in Touch', href: '#contact' },
//   ];

//   return (
//     <nav className="fixed top-0 w-full bg-background shadow-lg z-50">
//       <ul className="flex space-x-8 p-4">
//         {navItems.map((item) => (
//           <li key={item.href}>
//             <Link href={item.href} scroll={false}>
//               <a
//                 className={`${
//                   getHashFromPath(router.asPath) === getHashFromPath(item.href)
//                     ? 'font-bold text-red-500'
//                     : 'text-foreground'
//                 } hover:text-red-500 transition-colors`}
//               >
//                 {item.name}
//               </a>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
