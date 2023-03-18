import React, { useEffect, useState } from "react";
import { getUserDataRequest, getUserFrindsList } from "../../services/requests";
import UserCard from "../UserCard";
import { UserItem } from "../../services/types";

type Props = {
  userId?: number;
};

export default function Pagination({ userId }: Props) {
  const [dataList, setDataList] = useState<any>([]);
  const [pagination, setPagination] = useState({
    current: 1,
    nextPage: 2,
    pageSize: 20,
    previousPage: null,
    total: 0,
  });

  useEffect(() => {
    handleGetData(pagination.current);
  }, []);
  
  useEffect(() => {
    handlePagination();
  }, [pagination])

  const handleGetData = async (pageNum?: number) => {
    let newPageNum = pageNum ? pageNum : pagination.nextPage;
    let data = userId
      ? await getUserFrindsList(userId, newPageNum, pagination.pageSize)
      : await getUserDataRequest(newPageNum, pagination.pageSize);

    setDataList([...dataList, ...data.list]);
    setPagination(data.pagination);
  };

  const handlePagination = () => {
    var scroll = document.getElementById(
      "scroll_wrapper"
    );

    var content = document.getElementById(`pagination_items_${userId}`);
    if (!scroll) return;

    scroll.onscroll = function () {
      if (!scroll || !content) return;
      var total = scroll.scrollTop + scroll.clientHeight;

      let clientTotal = userId ? content.clientHeight + 21 : content.clientHeight;
      console.log(clientTotal, total, '[AA]')
      if (total >= clientTotal) {
        handleGetData();
      };
    };
  };

  return (
    <div className="users-list" id={`pagination_items_${userId}`}>
      {dataList?.map((user: UserItem) => (
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
    </div>
  );
}
