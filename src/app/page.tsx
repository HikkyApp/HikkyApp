
import React, { useEffect, useState, useMemo } from 'react'
import useMedia from '@/hooks/useMedia';
import { MediaSort, MediaType } from "@/types/anilist";
import { isMobile } from "react-device-detect";
// import Head from '@/components/partials/Head'
import { getSeason, randomElement } from "@/utils";


const Home = () => {
    const currentSeason = useMemo(getSeason, []);
    // const { isDesktop } = useDevice();
    // const { t } = useTranslation();


    const { data: trendingAnime, isLoading: trendingLoading } = useMedia({
        type: MediaType.Anime,
        sort: [MediaSort.Trending_desc, MediaSort.Popularity_desc],
        perPage: isMobile ? 5 : 10,
    });

    const { data: popularSeason, isLoading: popularSeasonLoading } = useMedia({
        type: MediaType.Anime,
        sort: [MediaSort.Popularity_desc],
        season: currentSeason.season,
        seasonYear: currentSeason.year,
        perPage: 5,
    });

    const { data: popularAllTime, isLoading: popularAllTimeLoading } = useMedia({
        type: MediaType.Anime,
        sort: [MediaSort.Popularity_desc],
        perPage: 5,
    });

    const { data: favouriteSeason, isLoading: favouriteSeasonLoading } = useMedia(
        {
            type: MediaType.Anime,
            sort: [MediaSort.Favourites_desc],
            season: currentSeason.season,
            seasonYear: currentSeason.year,
            perPage: 5,
        }
    );
    return (
        <React.Fragment>
            <div className="relative ">


            </div>
        </React.Fragment >
    )
}
export default Home;