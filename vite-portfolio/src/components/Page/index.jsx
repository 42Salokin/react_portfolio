import PageContent from '../PageContent';

import { Outlet } from 'react-router-dom';

function Page() {
    return (
        <section>
            <PageContent>
                <Outlet />
            </PageContent>
        </section>
    );
}

export default Page;