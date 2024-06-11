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
                I am a graduate with a master’s degree in computer science from the University of Florida.I am an Oracle Certified Java Developer with a solid grasp of various programming languages and technologies, including Python, Java, and React. During my time at UF, I served as a research assistant, focusing on healthcare domain projects using Java and Spring, demonstrating my ability to apply technical skills in critical sectors. I also designed and developed a real-time traffic monitoring system as a graduate student assistant.
                </p>
                <p>
                In my previous role as an Assistant System Engineer at Tata Consultancy Services, I  worked on ecommerce website using Spring Boot and REST APIs. Additionally, during my internship at Techforce.ai, I played a key role in developing an AI chatbot that reduced human effort in software installation requests by 80%, showcasing my innovation and process optimization skills.
</p>
<p>
Beyond my professional engagements, I have actively participated in projects involving Machine Learning, Python, and the Internet of Things. My research paper on Wireless Sensor Network-based smart irrigation, published in IOP Conference Series, highlights my dedication to advancing technology for a sustainable future.
Let's connect and drive innovation together!
                </p>
                <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About