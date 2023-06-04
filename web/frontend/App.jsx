import { BrowserRouter } from "react-router-dom";
import { NavigationMenu } from "@shopify/app-bridge-react";
import Routes from "./Routes";
import "./css/index.css";
import {
  AppBridgeProvider,
  QueryProvider,
  PolarisProvider,
} from "./components";
import Sidebar from "./components/Homepage/SideBar";

export default function App() {
  // Any .tsx or .jsx files in /pages will become a route
  // See documentation for <Routes /> for more info
  const pages = import.meta.globEager("./pages/**/!(*.test.[jt]sx)*.([jt]sx)");

  return (
    <PolarisProvider>
      <BrowserRouter>
        <AppBridgeProvider>
          <QueryProvider>
            <NavigationMenu
              navigationLinks={[
                {
                  label: "Page name",
                  destination: "/pagename",
                },
              ]}
            />
            <div class="grid-container">
              <div class="fixed-width">
                <Sidebar />
              </div>
              <div class="remaining-width">
                <Routes pages={pages} />
              </div>
            </div>
          </QueryProvider>
        </AppBridgeProvider>
      </BrowserRouter>
    </PolarisProvider>
  );
}
