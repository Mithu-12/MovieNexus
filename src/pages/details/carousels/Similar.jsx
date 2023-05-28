import React from "react";


import useFatch from "../../../hooks/useFatch";
import Carousel from "../../../Components/carousel/Carousel";

const Similar = ({ mediaType, id }) => {
    const { data, loading,} = useFatch(`/${mediaType}/${id}/similar`);

    const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";
    console.log(mediaType, 'media')

    return (
        <Carousel
            title={title}
            data={data?.results}
            loading={loading}
            endPoint={mediaType}
        />
    );
};

export default Similar;