import { useContext } from "react";
import { CrumbContext } from "../../context/BreadCrumbContext";
import { NavLink } from "react-router-dom";
import "./styles.css";

interface Props {
  customCallback?: () => void
  name: string;
  imageUrl: string;
  prefix: string;
  lastName: string;
  title: string;
  id: number;
}

const UserCard = ({ customCallback, name, imageUrl, prefix, lastName, title, id }: Props) => {
  const { handleSetArr } = useContext(CrumbContext);
  
  const handleNavClick = () => {
    if(customCallback) customCallback()

    handleSetArr({id: id, fullName: `${prefix} ${name} ${lastName}`})
  }
  return (
    <NavLink to={`/user/${id}`} onClick={handleNavClick}>
      <div className="user-card">
        <img
          src={`${imageUrl}?v=${id}`}
          alt={`${name}, ${lastName}`}
          className="user-card-img"
        />
        <div className="user-details">
          <div className="name-surname">
            {prefix} {name} {lastName}
          </div>
          <div className="title"> {title} </div>
        </div>
      </div>
    </NavLink>
  );
};

export default UserCard;
