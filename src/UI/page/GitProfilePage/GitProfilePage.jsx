import React, { useEffect, useState } from "react";
import { useSearch } from "../../../contaxt/SearchContaxt";
import { useNavigate, useParams } from "react-router-dom";
import { getUserRepo, starHandlerApi } from "../../api/service/git";
import { toast } from "react-toastify";
import PreviewModal from "./PreviewModal";
import { ListGroup, ListGroupItem, Tooltip } from "flowbite-react";
import { Eye, Star } from "lucide-react";
import { useCookies } from "react-cookie";

export default function GitProfilePage() {
  const [user, setUser] = useState({});
  const [data, setData] = useState({});
  const [openModal, setOpenModal] = useState(false);

  const [{ staredRepo, token }, setCookie] = useCookies([]);

  let { userName, focusToggle } = useParams();

  const toggle = () => setOpenModal(!openModal);
  const navigate = useNavigate();

  useEffect(() => {
    (async function getUser() {
      let { data, error } = await getUserRepo(userName);
      if (error) toast.error(error);
      else setUser(data?.data);
    })();
  }, [userName]);

  const previewHandler = (e) => {
    toggle();
    setData(e);
  };

  const starHandler = async (repoName, isStared) => {
    if (!token) {
      return navigate("/login");
    }
    let { data, error } = await starHandlerApi(
      userName,
      repoName,
      isStared,
      token
    );
    if (error) toast.error(error);
    else {
      setCookie(data.data?.staredRepo);
      toast.success("Repository stared");
    }
  };
  return (
    <div className="flex  justify-center items-center  min-h-[64vh]">
      <div className="flex justify-center w-full m-10 border rounded-md p-2">
        <div className="w-[30%] mr-10">
          <img src={user?.user?.avatar_url} alt="" />
        </div>
        <div className="w-[70%]">
          <h1 className="text-black text-3xl mb-4 unde">
            <span className="text-black font-semibold une">NAME :</span>{" "}
            {user?.user?.login}
          </h1>
          {user?.data?.length > 0 ? (
            <div className="w-full border rounded-md overflow-y-scroll max-h-[50vh]">
              <ListGroup className="w-full">
                {user?.data?.map?.((e, i) => {
                  let isStared = staredRepo?.includes?.(e?.id);
                  return (
                    <ListGroupItem key={e?.id} className="w-full !cursor-none">
                      <div className="w-full flex justify-between items-center">
                        <div className="flex flex-col items-start">
                          <h1>
                            <span className="text-black">NAME : </span>
                            <span> {e?.name}</span>
                          </h1>
                          <h1>
                            <span className="text-black">COUNT : </span>
                            <span>{e?.watchers_count}</span>
                          </h1>
                        </div>
                        <div className="flex gap-3">
                          <Tooltip content="Preview Details" className="w-100">
                            <Eye onClick={() => previewHandler(e)} />
                          </Tooltip>
                          <Tooltip content="Star Repo" className="w-100">
                            <Star
                              className={`
                               ${
                                 isStared
                                   ? "stroke-yellow-300"
                                   : "stroke-slate-400"
                               }
                                  `}
                              onClick={() => starHandler(e.name, isStared)}
                            />
                          </Tooltip>
                        </div>
                      </div>
                    </ListGroupItem>
                  );
                })}
              </ListGroup>

              <PreviewModal
                repos={data}
                toggle={toggle}
                openModal={openModal}
              />
            </div>
          ) : (
            <h1 className="text-3xl text-red-500">
              <span className="text-4xl uppercase font-semibold">
                {user?.user?.login}
              </span>{" "}
              doesn't have any public repositories yet.
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}
