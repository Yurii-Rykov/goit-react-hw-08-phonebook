import img from '../img/images.png'
import s from './Home.module.css'

const Home = () => {
    return ( 
    <>
    <h1 className="title">Welcome to your contact list</h1>
    <img src={img} alt='phone' className={s.img} />
    </>
)};

export default Home;

