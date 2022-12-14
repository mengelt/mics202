import {
  BookOpen,
  Briefcase,
  Calendar,
  CheckSquare,
  CreditCard,
  Grid,
  Heart,
  Info,
  Layout,
  List,
  Map,
  ShoppingCart,
  PieChart,
  Divide,
  Shuffle,
  HelpCircle,
  Users,
} from "react-feather";

const pagesSection = [
  {
    href: "/calculators",
    icon: Divide,
    title: "Calculators",
    children: [
      {
        href: "/calculators/factors",
        title: "Find Factors",
      },
      {
        href: "/calculators/primefactorization",
        title: "Prime Factorization",
      },
      {
        href: "/calculators/eulerstotient",
        title: "Euler's Totient Function",
      },
      {
        href: "/calculators/residue",
        title: "Modular Square Root",
      },
      {
        href: "/calculators/multiplicitiveinverse",
        title: "Multiplicitive Inverse",
      },
      {
        href: "/calculators/extended",
        title: "Extended Euclidean",
      },
      {
        href: "/calculators/chinese",
        title: "CRT",
      },
      {
        href: "/calculators/systemofcongruence",
        title: "System of Congruence",
      },
      {
        href: "/calculators/Bases",
        title: "Numerical Bases",
      },
    ],
  }
];

const pagesSection2 = [
      {
        href: "/calculators/factors",
        title: "Find Factors",
      },
      {
        href: "/calculators/primefactorization",
        title: "Prime Factorization",
      },
      {
        href: "/calculators/eulerstotient",
        title: "Euler's Totient Function",
      },
      {
        href: "/calculators/residue",
        title: "Modular Square Root",
      },
      {
        href: "/calculators/multiplicitiveinverse",
        title: "Multiplicitive Inverse",
      },
      {
        href: "/calculators/extended",
        title: "Extended Euclidean",
      },
      {
        href: "/calculators/chinese",
        title: "CRT",
      },
      {
        href: "/calculators/systemofcongruence",
        title: "System of Congruence",
      },
      {
        href: "/calculators/Bases",
        title: "Numerical Bases",
      }
];


const aboutSection = [
  {
    href: "/about",
    icon: HelpCircle,
    title: "About this Site"
  },
  {
    href: "/future",
    icon: Info,
    title: "What's Next?"
  },
];



const navItems = [
  {
    title: "Tools",
    pages: pagesSection2,
  },

  {
    title: "Miscellaneous",
    pages: aboutSection,
  },  
];

export default navItems;
