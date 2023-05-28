
import { useParams } from "react-router-dom"
import DetailsBanner from "./detailsBanner/DetailsBaner"
import useFatch from "../../hooks/useFatch"
import Cast from "./cast/Cast"
import VideosSection from "./videoSection/VideoSection"
import Similar from "./carousels/Similar"
import Recommendation from "./carousels/Recommendation"


const Details = () => {
  const {mediaType, id} = useParams()
  const {data, loading} = useFatch(`/${mediaType}/${id}/videos`)
  const {data: credits, loading: creditsLoading} = useFatch(`/${mediaType}/${id}/credits`)
console.log(mediaType, 'type')
  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} mediaType={mediaType}/>
      <Cast data={credits?.cast} loading={creditsLoading}/>
      <VideosSection data={data} loading={loading}/>
      <Similar mediaType={mediaType} id={id}/>
      <Recommendation mediaType={mediaType} id={id}/>
    </div>
  )
}

export default Details