import Navbar from "./Bar";

function NavbarHandler() {
  const handleSearch = (query) => {
    alert(`🔍 Searching for: ${query}`);
  };

  const handleNavClick = (page) => {
    alert(`📌 Navigating to: ${page}`);
  };

  return <Navbar onSearch={handleSearch} onNavClick={handleNavClick} />;
}

export default NavbarHandler;
