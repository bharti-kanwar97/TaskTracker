
import { Link } from "react-router-dom";


import {lazy,Suspense} from "react";

import Nav from "../dashboard/Nav.jsx";
import HeroSection from "../dashboard/HeroSection.jsx";
const FeatureSection = lazy(() => import("../dashboard/FeatureSection.jsx"));
const CTASection = lazy(() => import("../dashboard/CTASection.jsx"));

export default function Dashboard({ theme }) {
  const isDark = theme === "dark";


 
  
  return (
    <div>
     <Nav />
      <main>
       <HeroSection isDark={isDark} />
        <hr className="dark:text-gray-800 text-gray-200" />
        <Suspense fallback={<div>Loading...</div>}>
        <FeatureSection isDark={isDark} />
        <CTASection />
        </Suspense> 
      </main>
    </div>
  );
}
