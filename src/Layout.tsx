import React, { useState, type ReactNode } from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import CategoriesBar from "./CategoriesBar";

type LayoutProps = {
  children: (category: string) => ReactNode;
};

function Layout({ children }: LayoutProps) {
  const [category, setCategory] = useState<string>("All");
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">

      {/* Sticky Header */}
      <div className="sticky top-0 z-50">
        <Topbar />
        <CategoriesBar
          toggleSidebar={() => setShowSidebar(!showSidebar)}
          setCategory={setCategory}
        />
      </div>

      {/* Main */}
      <div className="flex flex-1 relative">

        {/* Overlay */}
        {showSidebar && (
          <div
            className="fixed inset-0 bg-black/30 z-40"
            onClick={() => setShowSidebar(false)}
          />
        )}

        {/* Sidebar */}
        <div
          className={`fixed left-0 top-[110px] h-[calc(100%-110px)] w-64 bg-gray-200 p-4 shadow-lg z-50 transform transition-transform duration-300 ${
            showSidebar ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Sidebar />
        </div>

        {/* Content */}
        <div className="flex-1 p-4 bg-transparent">
          {children(category)}
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default Layout;FAA6-DC00