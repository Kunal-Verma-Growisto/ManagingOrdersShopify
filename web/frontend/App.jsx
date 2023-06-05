import { BrowserRouter } from "react-router-dom";
import { NavigationMenu } from "@shopify/app-bridge-react";
import Routes from "./Routes";
import { AppProvider } from "./context/AppContext";
import "./css/index.css";
import {
  AppBridgeProvider,
  QueryProvider,
  PolarisProvider,
} from "./components";
import Sidebar from "./components/Homepage/SideBar";

export default function App() {
  const pages = import.meta.globEager("./pages/**/!(*.test.[jt]sx)*.([jt]sx)");

  return (
    <PolarisProvider>
      <BrowserRouter>
        <AppBridgeProvider>
          <QueryProvider>
            <AppProvider>
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
            </AppProvider>
          </QueryProvider>
        </AppBridgeProvider>
      </BrowserRouter>
    </PolarisProvider>
  );
}
