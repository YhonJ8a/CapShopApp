import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';
import { Badge } from 'primereact/badge';
import { MenuItem } from 'primereact/menuitem';
import { Avatar } from 'primereact/avatar';

const Navbar: React.FC = () => {
    const { user, logout } = useAuth();
    const router = useRouter();

    const itemRenderer = (item) => (
        <a className="flex align-items-center p-menuitem-link">
            <span className={item.icon} />
            <span className="mx-2">{item.label}</span>
            {item.badge && <Badge className="ml-auto" value={item.badge} />}
            {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
        </a>
    );

    const items: MenuItem[] = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            command: () => router.push('/home')
        },
        {
            label: 'About',
            icon: 'pi pi-star',
            command: () => router.push('/login')
        },
        {
            label: 'Contact',
            icon: 'pi pi-envelope',
            template: itemRenderer
        }
    ];
    function actionLogin() {
        if (user) router.push('/login');
        else logout();
    }

    const start = <Avatar image="/images/logo.jpg" shape="circle" className="ml-2" />;
    const end = (
        <div className="flex align-items-center gap-2">
            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
            <Button onClick={actionLogin} rounded text label={user ? 'Logout' : 'Login'} icon={user ? 'pi pi-sign-out' : 'pi pi-users'} outlined badgeClassName="p-badge-danger" />
        </div>
    );

    return (
        <div className="card" style={{ backgroundColor: '#ffffff0c' }}>
            <Menubar model={items} start={start} end={end} style={{
                background: 'linearGradient(rgb(0, 0, 0),rgb(255, 84, 84))'
            }} />
        </div>
    );
};

export default Navbar;
