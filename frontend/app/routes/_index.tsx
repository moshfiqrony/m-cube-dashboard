import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';
import { useComingSoonToast } from '~/hooks';

export const meta: MetaFunction = () => {
    return [{ title: 'MCube' }, { name: '', content: '' }];
};

export default function Index() {
    const showComingSoonToast = useComingSoonToast();

    return (
        <div className="min-h-screen min-w-screen flex justify-center items-center">
            <div className="flex flex-column gap-16">
                <div>
                    <div className="text-xl mb-2 font-semibold">
                        <Link to="/dashboards">Dashboards</Link>
                    </div>
                    <ul>
                        <li>
                            <Link
                                className="underline"
                                to="/dashboards/top-header"
                            >
                                Top header
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="underline"
                                to="/dashboards/left-sidebar"
                            >
                                Left sidebar
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="text-xl mb-2 font-semibold">
                        <Link onClick={showComingSoonToast} to="#">
                            Panels
                        </Link>
                    </div>
                    <ul>
                        <li>
                            <Link
                                className="underline"
                                to="#"
                                onClick={showComingSoonToast}
                            >
                                Settings
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="text-xl mb-2 font-semibold">
                        <Link onClick={showComingSoonToast} to="#">
                            Utility
                        </Link>
                    </div>
                    <ul>
                        <li>
                            <Link
                                className="underline"
                                to="#"
                                onClick={showComingSoonToast}
                            >
                                UseDisclosure with isAlive state
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
