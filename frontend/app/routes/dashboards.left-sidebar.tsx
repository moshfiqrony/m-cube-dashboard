import { MetaFunction } from '@remix-run/node';
import { LeftSidebarDashboard } from '~/components/left-sidebar-dashboard';

export const meta: MetaFunction = () => {
    return [
        { title: 'MCube - Left sidebar dashboard' },
        { name: '', content: '' },
    ];
};

export default function LeftSidebar() {
    return <LeftSidebarDashboard />;
}
