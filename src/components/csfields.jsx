import Card from './card.jsx'
import header from '../images/header.jpg'
import img_1 from '../images/img_1.jpg'
import img_2 from '../images/img_2.jpg'
import img_3 from '../images/img_3.jpg'
import img_4 from '../images/img_4.jpg'
import img_5 from '../images/img_5.jpg'
import img_6 from '../images/img_6.jpg'
import img_7 from '../images/img_7.jpg'
import img_8 from '../images/img_8.jpg'
import img_9 from '../images/img_9.jpg'
import img_10 from '../images/img_10.jpg'
import img_11 from '../images/img_11.jpg'
import img_12 from '../images/img_12.jpg'

const All = () => {
    return (<>
        <header className="title">
            <img src={header} alt="" srcset="" />
        </header>
        <main className='content'>
            <Card image={img_1} name='Machine learning' />
            <Card image={img_2} name='Computer Engineering' />
            <Card image={img_3} name='Artificial Intelligence' />
            <Card image={img_4} name='Computer Graphics' />
            <Card image={img_5} name='Project Management' />
            <Card image={img_6} name='Information Security' />
            <Card image={img_7} name='Database Adminstration' />
            <Card image={img_8} name='Computer Networks' />
            <Card image={img_9} name='Computer Security' />
            <Card image={img_10} name='App Development' />
            <Card image={img_11} name='Data Science' />
            <Card image={img_12} name='Web Development' />
        </main></>
    )
}

export default All