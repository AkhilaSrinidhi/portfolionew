import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={AboutImage} alt="About Image" />
                </div>
            </div>
            <div className="about__right">
                <h2>About Me</h2>
                <div className="about__cards">
                    {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    }
                </div>
                <p>
                I'm a passionate software developer currently pursuing a Master's degree in Computer Science at the University of Florida. My educational journey in Electronics and Communication Engineering, combined with my ongoing Master's program, has equipped me with a diverse skill set, which empowers me to tackle intricate problems with confidence.
                </p>
                <p>
                My expertise spans across various programming languages and technologies, notably including Python, Java, and React. During my tenure as a graduate student assistant at UF, I played a pivotal role in designing and developing a real-time traffic monitoring system. In my prior role as an Assistant System Engineer at Tata Consultancy Services, I extensively worked on Spring Boot and REST APIs. During my internship at Techforce.ai, I actively participated in the development of an AI chatbot within a collaborative product development team, which resulted in an 80% reduction in human efforts for software installation requests, highlighting my ability to innovate and streamline processes. Beyond my professional endeavours, I've enthusiastically engaged in diverse projects leveraging my skills in Machine Learning, Python, and the Internet of Things. Notably, my research paper on Wireless Sensor Network-based smart irrigation has been published in IOP Conference Sciences. This publication underscores my commitment to advancing technology for a sustainable and technologically advanced future.
Let's connect and innovate together!
                </p>
                <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About