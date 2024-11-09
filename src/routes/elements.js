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

import { Suspense, lazy } from "react";
import LoadingScreen from "../components/loading-screen";

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// MAIN
export const Page500 = Loadable(lazy(() => import("../pages/Page500")));
export const Page403 = Loadable(lazy(() => import("../pages/Page403")));
export const Page404 = Loadable(lazy(() => import("../pages/Page404")));
export const Page410 = Loadable(lazy(() => import("../pages/Page410")));
export const PageMotivation = Loadable(
  lazy(() => import("../pages/PageMotivation"))
);
export const HomePage = Loadable(lazy(() => import("../pages/HomePage")));
export const FaqsPage = Loadable(lazy(() => import("../pages/FaqsPage")));
export const AboutPage = Loadable(lazy(() => import("../pages/AboutPage")));
export const Contact = Loadable(lazy(() => import("../pages/ContactPage")));
export const ComingSoonPage = Loadable(
  lazy(() => import("../pages/ComingSoonPage"))
);
export const MaintenancePage = Loadable(
  lazy(() => import("../pages/MaintenancePage"))
);
export const ChangeLogPage = Loadable(
  lazy(() => import("../pages/ChangeLogPage"))
);
export const PrivacyAndPolicyPage = Loadable(
  lazy(() => import("../pages/PrivacyAndPolicyPage"))
);
export const TermsAndConditionsPage = Loadable(
  lazy(() => import("../pages/TermsAndConditionsPage"))
);
export const CancellationAndRefund = Loadable(
  lazy(() => import("../pages/CancellationAndRefund"))
);
export const ShippingAndDelivery = Loadable(
  lazy(() => import("../pages/ShippingAndDelivery"))
);
