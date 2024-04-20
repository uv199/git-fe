import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { getStaredRepo, starHandlerApi } from "../../api/service/star";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";

export default function StarRepo() {
  let [data, setData] = useState([]);
  let [reCall, setReCall] = useState(true);
  const refetch = () => setReCall(!reCall);

  let [{ user, token }, setCookie, removeCookie] = useCookies([""]);

  useEffect(() => {
    (async function getStarRepo() {
      let { data, error } = await getStaredRepo(token);
      if (error) toast.error(error);
      else setData(data?.data);
    })();
  }, [reCall]);

  const removestar = async (obj) => {
    obj.isStared = true;
    let { data, error } = await starHandlerApi(obj, token);

    if (error) toast.error(error);
    else {
      removeCookie("staredRepo");
      setCookie("staredRepo", data?.data?.data);
      refetch();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-[64vh]">
      <h1 className="text-3xl uppercase pb-2">
        WelCome TO GitUV <span className="font-bold">{user?.firstName}</span>
      </h1>
      <h1>Here is your stred repos</h1>

      <div className="mt-10 flex items-center w-full justify-center">
        {data.length > 0 ? (
          <Table className="min-w-[70vw]">
            <TableHead>
              <TableHeadCell>SR. NO</TableHeadCell>
              <TableHeadCell>REPO NAME</TableHeadCell>
              <TableHeadCell>OWNER</TableHeadCell>
              <TableHeadCell>DESCRIPTION</TableHeadCell>
              <TableHeadCell>
                <span className="sr-only">EDIT</span>
              </TableHeadCell>
            </TableHead>
            <TableBody className="divide-y">
              {data?.map?.((e, i) => {
                return (
                  <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {i + 1}
                    </TableCell>
                    <TableCell>{e.repoName}</TableCell>
                    <TableCell>{e.owner}</TableCell>
                    <TableCell>{e.description}</TableCell>
                    <TableCell
                      onClick={() => removestar(e)}
                      className="text-blue-600 underline cursor-pointer"
                    >
                      Remove
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        ) : (
          <h1 className="text-blue-500 text-2xl">NOT STAR ANY REPO ..!</h1>
        )}
      </div>
    </div>
  );
}
