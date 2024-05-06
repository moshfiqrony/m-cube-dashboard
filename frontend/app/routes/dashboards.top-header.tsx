import { MetaFunction } from '@remix-run/node';
import { TopHeaderDashboard } from '~/components/top-header-dashboard';

export const meta: MetaFunction = () => {
    return [
        { title: 'MCube - Top header dashboard' },
        { name: '', content: '' },
    ];
};

export default function TopHeader() {
    return <TopHeaderDashboard />;
}
