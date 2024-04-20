import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  // Function to determine the appropriate navbar text and link based on the current route
  const getNavbarTextAndLink = () => {
    switch (location.pathname) {
      case "/Inventory":  
        return {
          title: "Inventory",
          buttonText: "Add Inventory",
          link: "/addinventory",
        };
        case   "/addinventory":
          return {
            title: "Inventory",
            buttonText: "Add Inventory",
            link: "/addinventory",
          };
      case "/Supplier":
        return {
          title: "Suppliers",
          buttonText: "Add Supplier",
          link: "/addsupplier",
        };
        case "/addsupplier":
        return {
          title: "Suppliers",
          buttonText: "Add Supplier",
          link: "/addsupplier",
        };
      case "/Item":
        return {
          title: "Items",
          buttonText: "Add Item",
          link: "/additem",
        };
        case "/additem":
          return {
            title: "Items",
            buttonText: "Add Item",
            link: "/additem",
          };
        case "/user":
        return {
          title: "Users",
          buttonText: "Add User",
          link: "/adduser",
        };

        case "/adduser":
        return {
          title: "Users",
          buttonText: "Add User",
          link: "/adduser",
        };
        case "/Order":
        return {
          title: "Orders",
          buttonText: "Add Order",
          link: "/addorder",
        };
        case "/addorder":
        return {
          title: "Orders",
          buttonText: "Add Order",
          link: "/addorder",
        };
        case "/Location":
          return {
            title: "Locations",
            buttonText: "Add Location",
            link: "/addlocation",
          };
          case "/addlocation":
            return {
              title: "Locations",
              buttonText: "Add Locations",
              link: "/addlocations",
            };
      default:
        return {
          title: "Add User",
          buttonText: "Add User",
          link: "/adduser",
        };
    }
  };

  const { title, buttonText, link } = getNavbarTextAndLink();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <Link className="btn btn-outline-light" to={link}>
            {buttonText}
          </Link>
        </div>
      </nav>
    </div>
  );
}
