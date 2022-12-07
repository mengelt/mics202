import React from "react";

import async from "./components/Async";

// All pages that rely on 3rd party components (other than MUI) are
// loaded asynchronously, to keep the initial JS bundle to a minimum size

// Layouts
import AuthLayout from "./layouts/Auth";
import DashboardLayout from "./layouts/Dashboard";

// Auth components
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import ResetPassword from "./pages/auth/ResetPassword";
import Page404 from "./pages/auth/Page404";
import Page500 from "./pages/auth/Page500";

// Calculators
const Chinese = async(() => import("./pages/calculators/Chinese"));
const EulersTotient = async(() => import("./pages/calculators/EulersTotient"));
const QuadraticResidue = async(() => import("./pages/calculators/Residue"));
const GCD = async(() => import("./pages/calculators/GCD"));
const Factors = async(() => import("./pages/calculators/Factors"));
const MultiplicitiveInverse = async(() => import("./pages/calculators/MultiplicitiveInverse"));
const PrimeFactorization = async(() => import("./pages/calculators/PrimeFactorization"));
const Extended = async(() => import("./pages/calculators/Extended"));
const SystemOfCongruence = async(() => import("./pages/calculators/Congruence"));

// Converters
const Bases = async(() => import("./pages/calculators/Bases"));

// About
const About = async(() => import("./pages/about"));

// Dashboard components
const Default = async(() => import("./pages/calculators/Factors"));

const routes = [
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "default",
        element: <Default />,
      },      
      {
        path: "about",
        element: <About />,
      },
      {
        path: "factors",
        element: <Factors />,
      },
      {
        path: "eulerstotient",
        element: <EulersTotient />,
      },
      {
        path: "extended",
        element: <Extended />,
      },
      {
        path: "chinese",
        element: <Chinese />,
      },
      {
        path: "systemofcongruence",
        element: <SystemOfCongruence />,
      },
      {
        path: "GCD",
        element: <GCD />,
      },
      {
        path: "multiplicitiveinverse",
        element: <MultiplicitiveInverse />,
      },
      {
        path: "bases",
        element: <Bases />,
      },
      
    ]
  }, 


  {
    path: "calculators",
    element: <DashboardLayout />,
    children: [
      {
        path: "primefactorization",
        element: <PrimeFactorization />
      },
      {
        path: "chinese",
        element: <Chinese />,
      },
      {
        path: "GCD",
        element: <GCD />,
      },
      {
        path: "residue",
        element: <QuadraticResidue />,
      },
      {
        path: "eulerstotient",
        element: <EulersTotient />,
      },
      {
        path: "extended",
        element: <Extended />,
      },
      {
        path: "systemofcongruence",
        element: <SystemOfCongruence />,
      },

      {
        path: "factors",
        element: <Factors />,
      },
      {
        path: "multiplicitiveinverse",
        element: <MultiplicitiveInverse />,
      },
      {
        path: "bases",
        element: <Bases />,
      },
    ]
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        path: "404",
        element: <Page404 />,
      },
      {
        path: "500",
        element: <Page500 />,
      },
    ],
  },
  {
    path: "*",
    element: <AuthLayout />,
    children: [
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
];

export default routes;
