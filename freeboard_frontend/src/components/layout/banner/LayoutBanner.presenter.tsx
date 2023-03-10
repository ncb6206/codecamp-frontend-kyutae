import * as S from "./LayoutBanner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBannerUI() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const BannerImages = [
    "/images/banner/image.png",
    "/images/banner/image-01.png",
    "/images/banner/image-02.png",
    "/images/banner/image-03.png",
  ];

  return (
    <S.Wrapper>
      <Slider {...settings}>
        {BannerImages.map((el) => (
          <S.SliderWrapper>
            <S.SliderImage src={el} />
          </S.SliderWrapper>
        ))}
      </Slider>
    </S.Wrapper>
  );
}
