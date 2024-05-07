import { BiLogoHtml5, BiLogoAndroid, BiBuilding } from 'react-icons/bi';
const courses = [
    {
        title: 'web Development',
        icon: <BiLogoHtml5 />,
    },
    {
        title: 'web Development',
        duration: '2 Hours',
        icon: <BiLogoAndroid />,
    },
    {
        title: 'web Development',
        duration: '2 Hours',
        icon: <BiBuilding />,
    },
]
const Card = () => {
    return (
        <div className='card--container'>
            {courses.map((item) => (
                <div className='card'>
                    <div className="card--cover">{item.icon}</div>
                    <div className="card--title">
                        <h2>{item.title}</h2>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;