import { MetaFunction } from '@remix-run/node';
import { TopHeaderDashboard } from '~/components/top-header-dashboard';

export const meta: MetaFunction = () => {
    return [{ title: 'MCube - Dashboards' }, { name: '', content: '' }];
};

export default function Index() {
    return <TopHeaderDashboard />;
}
