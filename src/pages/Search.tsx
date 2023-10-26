import React, { useEffect } from "react";

import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
// import SearchCard from "../components/SearchCard";
import Sidebar from "../components/Sidebar";
import Spinner from "../components/Spinner";
import { clearVideos } from "../store";
import { useAppDispatch, useAppSelector } from "../store/reducers/hooks";
import { HomePageVideos } from "../types";
import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos";
import NavBar from "../components/NavBar";
import SearchCard from "../components/SearchCard";

export default function Search() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);

  useEffect(() => {
    dispatch(clearVideos());
    if (searchTerm === "") navigate("/")
    else {
      dispatch(getSearchPageVideos(false));
    }
  }, [dispatch, navigate, searchTerm]);

  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{ height: "7.5vh" }}>
        <NavBar />
      </div>
      <div className="flex" style={{ height: "92.5vh" }}>
        <Sidebar />
        {videos.length ? (
          <div className="py-8 pl-8 flex flex-col gap-5 w-full">
            <InfiniteScroll
            dataLength={videos.length}
            next={() => dispatch(getSearchPageVideos(true))}
            hasMore={videos.length < 500}
            loader={<Spinner />}
            height={650}
            
            >
                {videos.map((item: HomePageVideos) => {
               return( <div className="my-5">
                         <SearchCard data={item} key={item.videoId} />
                     </div>
                    )
                })}
            </InfiniteScroll>
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}