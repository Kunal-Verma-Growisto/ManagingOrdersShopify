import React from "react";
import "./Sidebar.css"; // Import CSS for styling
import logo from "../../assets/download.png";
import { Frame, Navigation } from "@shopify/polaris";

import {
  HomeMajor,
  OrdersMajor,
  ProductsMajor,
  CustomersMajor,
  AnalyticsMinor,
  MarketingMajor,
  SettingsMajor,
  QuestionMarkInverseMajor,
} from "@shopify/polaris-icons";

function Sidebar() {
  return (
    <Frame>
      <Navigation location="/">
        <SideBar />
      </Navigation>
    </Frame>
  );
}

export default Sidebar;

const SideBar = () => {
  return (
    <div className="sidebar">
      <img className="logo" src={logo} />
      <div className="menu">
        <NavigationMenu />
      </div>
      <div className="bottom-icons">
        <NavigationFooter />
      </div>
    </div>
  );
};

function NavigationMenu() {
  return (
    <Navigation.Section
      items={[
        {
          url: "/Dashbord",
          label: "Dashbord",
          icon: HomeMajor,
        },
        {
          url: "/Customers",
          excludePaths: ["#"],
          label: "Customers",
          icon: CustomersMajor,
          badge: "15",
        },
        {
          url: "/Orders",
          excludePaths: ["#"],
          label: "Orders",
          icon: OrdersMajor,
        },
        {
          url: "/Products",
          excludePaths: ["#"],
          label: "Products",
          icon: ProductsMajor,
        },
        {
          url: "/Analytics",
          excludePaths: ["#"],
          label: "Analytics",
          icon: AnalyticsMinor,
        },
        {
          url: "/Marketing",
          excludePaths: ["#"],
          label: "Marketing",
          icon: MarketingMajor,
        },
      ]}
    />
  );
}

function NavigationFooter() {
  return (
    <Navigation.Section
      items={[
        {
          url: "/Settings",
          label: "Settings",
          icon: SettingsMajor,
        },
        {
          url: "/GetHelp",
          excludePaths: ["#"],
          label: "Get Help",
          icon: QuestionMarkInverseMajor,
          badge: "15",
        },
      ]}
    />
  );
}
