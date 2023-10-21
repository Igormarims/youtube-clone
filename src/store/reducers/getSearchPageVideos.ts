import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "..";
import { HomePageVideos } from "../../types";
import { parseData } from "../../utils";
import { YOUTUBE_API_URL } from "../../utils/constants";

const API_KEY = import.meta.env.VITE_REACT_APP_DATA_API_KEY;

export const getSearchPageVideos = createAsyncThunk(
  "youtubeApp/serachPageVideos",
  async (isNext: boolean, { getState }) => {
    const {  youtubeApp: { nextPageToken: nextPageTokenFromState, videos, searchTerm },} = getState() as RootState;

       console.log();
       
    const {
      data: { items, nextPageToken },
    } = await axios.get(
      `${YOUTUBE_API_URL}/search?q=${searchTerm}&key=${API_KEY}&part=snippet&type=video&${ isNext ? `pageToken=${nextPageTokenFromState}` : "" }`
    );
    const parsedData: HomePageVideos[] = await parseData(items);
    return { parsedData: [...videos, ...parsedData], nextPageToken };
  }
);