import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { CrumbContext } from "../../context/BreadCrumbContext";


const Breadcrumbs = () => {
  const location = useLocation();
  const { breadCrumbsArr } = useContext(CrumbContext);

  return (
    <nav>
      {breadCrumbsArr.map((navItem) => (
        <Link
          key={navItem.id}
          to={`/user/${navItem.id}`}
          className={
            location.pathname === "/"
              ? "breadcrumb-active"
              : "breadcrumb-not-active"
          }
        >
          {navItem.fullName} {" > "}
        </Link>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
