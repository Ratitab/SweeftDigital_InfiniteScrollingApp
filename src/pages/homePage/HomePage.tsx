import { useState, useEffect } from "react";
import Pagination from "../../components/Pagination";
import { getUserDataRequest } from "../../services/requests";
import { UserItem } from "../../services/types";
import "./styles.css";

const HomePage = () => {
  const [friends, setFriends] = useState<UserItem[]>([]);
  const [size, setSize] = useState(30);
  const [page, setPage] = useState(1);

  const getFriends = async () => {
    const data = await getUserDataRequest(page, size);
    setFriends(data.list);
  };

  useEffect(() => {
    getFriends();
  }, []);

  return (
    <section id="home_scroll">
      <Pagination />
    </section>
  );
};

export default HomePage;
