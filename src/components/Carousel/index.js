import React from 'react';
import { VideoCardGroupContainer, VideoCardList, Title, ExtraLink } from './styles';
import VideoCard from './components/VideoCard';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

export default function VideoCardGroup({
  ignoreFirstVideo,
  category,
}) {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.link_extra;
  const videos = category.videos;

  const [sliderRef] = useKeenSlider({
    loop: false,
    slidesPerView: 4,
    spacing: 0,
    rtl: true,

    breakpoints: {
      "(max-width: 1115px)": {
        slidesPerView: 3.5,
        mode: "free-snap",
      },
      "(max-width: 1000px)": {
        slidesPerView: 3,
        mode: "free-snap",
      },
      "(max-width: 825px)": {
        slidesPerView: 2.5,
        mode: "free-snap",
      },
      "(max-width: 700px)": {
        slidesPerView: 2,
        mode: "free-snap",
      },
      "(max-width: 570px)": {
        slidesPerView: 1,
        mode: "free-snap",
        centered: true
      },
    },
  })

  return (
    <VideoCardGroupContainer> 
      {categoryTitle && ( 
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink && 
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}  
            </ExtraLink>
          }
        </>
      )}
      <VideoCardList ref={sliderRef} className="keen-slider">
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <li key={video.titulo} className="keen-slider__slide">
              <VideoCard 
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </li>
          );
        })}
      </VideoCardList>
    </VideoCardGroupContainer>
  );
}