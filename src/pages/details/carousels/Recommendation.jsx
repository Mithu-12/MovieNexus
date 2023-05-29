import React from "react";
import useFatch from "../../../hooks/useFatch";
import Carousel from "../../../Components/carousel/Carousel";


const Recommendation = ({ mediaType, id }) => {
    const { data, loading } = useFatch(`/${mediaType}/${id}/recommendations`);
    console.log(data, 'reco')
    return (
        <Carousel
            title="Recommendations"
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default Recommendation;