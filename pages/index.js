
import BannerSlider from '../components/banner-slider'
import BestRooms from '../components/best-rooms'
import Booking from '../components/booking'
import Experience from '../components/experience'
import HomeAbout from '../components/home-about'
import HomeFacilities from '../components/home-facilities'
import HomeGallery from '../components/home-gallery'
import HomeServices from '../components/home-services'
import LogoSlider from '../components/logo-slider'
import Quotation from '../components/quotation'
import TestimonialSection from '../components/testimonial-section'
import VisionAndMission from '../components/vision-and-mission'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      
      <div className='main'>
        <BannerSlider />
        <HomeAbout />
        <VisionAndMission />
        {/* <BestRooms /> */}
        {/* <Experience /> */}
        <Quotation />
        <HomeServices />
        {/* <HomeFacilities /> */}
        {/* <HomeGallery /> */}
      </div>
    </div>
  )
}
