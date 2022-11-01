import {
  BookOpen,
  Briefcase,
  Calendar,
  CheckSquare,
  CreditCard,
  Grid,
  Heart,
  Layout,
  List,
  Map,
  ShoppingCart,
  PieChart,
  Divide,
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
        href: "/calculators/chinese",
        title: "CRT",
      },
      {
        href: "/calculators/eulerstotient",
        title: "Euler's Totient Function",
      },
      {
        href: "/calculators/gcd",
        title: "GCD",
      },
    ],
  },
];



const navItems = [
  {
    title: "Pages",
    pages: pagesSection,
  }
];

export default navItems;
