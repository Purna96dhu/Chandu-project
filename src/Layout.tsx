
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

import { type ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col h-screen">

      {/* Topbar */}
      <div className="bg-gray-800 text-white p-4 text-center">
        <Topbar />
      </div>

      {/* Middle Section */}
      <div className="flex flex-1">

        {/* Sidebar */}
        <div className="w-56 bg-gray-200 p-4">
          <Sidebar />
        </div>

        {/* Content */}
        <div className="flex-1 p-6 bg-gray-100">
          {children}
        </div>

      </div>

      {/* Footer */}
      <div className="bg-gray-700 text-white p-3 text-center">
        <Footer />
      </div>

    </div>
  );
}



export default Layout;