import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='w-1/3 h-screen overflow-scroll border-white border'>
            <h1>Songlist</h1>
            <Link to='/music'>Go to Music</Link>
        </div>
    );
};

export default Sidebar;
