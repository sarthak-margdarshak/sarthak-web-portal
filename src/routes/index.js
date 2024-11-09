/**
 * Written By - Ritesh Ranjan
 * Website - https://sagittariusk2.github.io/
 *
 *  /|||||\    /|||||\   |||||||\   |||||||||  |||   |||   /|||||\   ||| ///
 * |||        |||   |||  |||   |||     |||     |||   |||  |||   |||  |||///
 *  \|||||\   |||||||||  |||||||/      |||     |||||||||  |||||||||  |||||
 *       |||  |||   |||  |||  \\\      |||     |||   |||  |||   |||  |||\\\
 *  \|||||/   |||   |||  |||   \\\     |||     |||   |||  |||   |||  ||| \\\
 *
 */

// IMPORT ---------------------------------------------------------------

import { Navigate, useRoutes } from "react-router-dom";
// layouts
import MainLayout from "../layouts/main";
import CompactLayout from "../layouts/compact";
// config
//
import {
  Page500,
  Page403,
  Page404,
  Page410,
  PageMotivation,
  HomePage,
  FaqsPage,
  AboutPage,
  Contact,
  ComingSoonPage,
  MaintenancePage,
  ChangeLogPage,
  PrivacyAndPolicyPage,
  TermsAndConditionsPage,
  CancellationAndRefund,
  ShippingAndDelivery,
} from "./elements";

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    // Main Routes
    {
      element: <MainLayout />,
      children: [
        { element: <HomePage />, index: true },
        { path: "about-us", element: <AboutPage /> },
        { path: "contact-us", element: <Contact /> },
        { path: "faqs", element: <FaqsPage /> },
        { path: "changelog", element: <ChangeLogPage /> },
        { path: "terms-and-conditions", element: <TermsAndConditionsPage /> },
        { path: "privacy-policy", element: <PrivacyAndPolicyPage /> },
        { path: "cancellation-and-refund", element: <CancellationAndRefund /> },
        { path: "shipping-and-delivery", element: <ShippingAndDelivery /> },
      ],
    },

    // Compact Routes
    {
      element: <CompactLayout />,
      children: [
        { path: "coming-soon", element: <ComingSoonPage /> },
        { path: "maintenance", element: <MaintenancePage /> }, // Complete
        { path: "500", element: <Page500 /> }, // Complete
        { path: "404", element: <Page404 /> }, // Complete
        { path: "403", element: <Page403 /> }, // Complete
        { path: "410", element: <Page410 /> }, // Complete
        { path: "success", element: <PageMotivation /> },
      ],
    },

    // Other Routes
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
