import React from "react";
import Header from "./Header";
import SearchWidget from "./SearchWidget";

const Navbar: React.FC = () => {
  return (
    <div>
      <Header backgroundColor={"#073590"} />
      <SearchWidget />
    </div>
  );
};

export default Navbar;
