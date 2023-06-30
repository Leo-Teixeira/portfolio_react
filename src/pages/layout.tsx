import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Mon site One Page</h1>
        <nav>
          <ul>
            <li>
              <a href="#section1">Section 1</a>
            </li>
            <li>
              <a href="#section2">Section 2</a>
            </li>
            <li>
              <a href="#section3">Section 3</a>
            </li>
            <li>
              <a href="#section15">Section 15</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
