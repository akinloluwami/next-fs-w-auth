import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Gallery</li>
        <li>Events</li>
      </ul>
      <div className="">{children}</div>
    </div>
  );
};

export default DashboardLayout;
