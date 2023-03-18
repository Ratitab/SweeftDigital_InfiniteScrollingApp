import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";
import Pagination from "../../components/Pagination";
import UserInfoCard from "../../components/UserInfoCard";

import { getSingleUserInfo, getUserFrindsList } from "../../services/requests";
import { User, UserItem } from "../../services/types";

import "./styles.css";

const UserPage = () => {
  const location = useLocation();

  const [userInfo, setUserInfo] = useState<User>();
  const [userId, setUserId] = useState(Number(location.pathname.split("/")[2]));
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(20);

  const [friends, setFriends] = useState<UserItem[]>([]);

  useEffect(() => {
    setUserId(Number(location.pathname.split("/")[2]));
  }, [location.pathname]);

  useEffect(() => {
    getUserInfo();
    getUsersFriendsList();
  }, [userId]);

  const getUserInfo = async () => {
    const data = await getSingleUserInfo(userId);
    setUserInfo(data);
  };

  const getUsersFriendsList = async () => {
    const friendsData = await getUserFrindsList(userId, page, size);
    setFriends(friendsData.list);
  };

  return (
    <div className="user-page-container" id="userPage_scroll">
      {userInfo && (
        <UserInfoCard
          id={userInfo?.id}
          imageUrl={userInfo?.imageUrl}
          prefix={userInfo?.prefix}
          name={userInfo?.name}
          lastName={userInfo?.lastName}
          title={userInfo?.title}
          email={userInfo.email}
          jobArea={userInfo.jobArea}
          jobType={userInfo.jobType}
          ipAddress={userInfo.ipAddress}
          company={{
            name: userInfo.company.name,
            suffix: userInfo.company.suffix,
          }}
          address={{
            zipCode: userInfo.address.zipCode,
            city: userInfo.address.city,
            streetAddress: userInfo.address.streetAddress,
            country: userInfo.address.country,
            state: userInfo.address.state,
          }}
        />
      )}
      {userInfo && <Breadcrumbs />}
      <h2>Friends:</h2>
      {/* <div className="friends-list">
        {friends?.map((user: UserItem) => (
          <UserCard
            imageUrl={user.imageUrl}
            prefix={user.prefix}
            name={user.name}
            lastName={user.lastName}
            title={user.title}
            key={user.id}
            id={user.id}
          />
        ))}
      </div> */}
      <Pagination userId={userId} />
    </div>
  );
};

export default UserPage;
