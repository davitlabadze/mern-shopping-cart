
import { Outlet } from 'react-router-dom';

function FrontendLayout() {
    return (
        <div className='px-12'>
            <div className='container mx-auto'>
                <Outlet />
            </div>
        </div>
    );
}

export default FrontendLayout;