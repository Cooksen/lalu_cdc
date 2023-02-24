import getConfig from 'next/config';
import React, { useContext } from 'react';
import AppMenuitem from './AppMenuitem';
import { LayoutContext } from './context/layoutcontext';
import { MenuProvider } from './context/menucontext';
import Link from 'next/link';

const AppMenu = () => {
    const { layoutConfig } = useContext(LayoutContext);
    const contextPath = getConfig().publicRuntimeConfig.contextPath;
    const model = [
        // {
        //     label: '數據儀表板',
        //     items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' }]
        // },
        {
            label: '數據儀表板',
            items: [
                { label: 'RMF 分析', icon: 'pi pi-fw pi-id-card', to: '/uikit/formlayout' },
                { label: '即時報表', icon: 'pi pi-fw pi-check-square', to: '/uikit/input' },
                { label: '總覽報表', icon: 'pi pi-fw pi-bookmark', to: '/uikit/floatlabel' },
                // { label: 'Invalid State', icon: 'pi pi-fw pi-exclamation-circle', to: '/uikit/invalidstate' },
                // { label: 'Button', icon: 'pi pi-fw pi-mobile', to: '/uikit/button', class: 'rotated-icon' },
                // { label: 'Table', icon: 'pi pi-fw pi-table', to: '/uikit/table' },
                // { label: 'List', icon: 'pi pi-fw pi-list', to: '/uikit/list' },
                // { label: 'Tree', icon: 'pi pi-fw pi-share-alt', to: '/uikit/tree' },
                // { label: 'Panel', icon: 'pi pi-fw pi-tablet', to: '/uikit/panel' },
                // { label: 'Overlay', icon: 'pi pi-fw pi-clone', to: '/uikit/overlay' },
                // { label: 'Media', icon: 'pi pi-fw pi-image', to: '/uikit/media' },
                // { label: 'Menu', icon: 'pi pi-fw pi-bars', to: '/uikit/menu', preventExact: true },
                // { label: 'Message', icon: 'pi pi-fw pi-comment', to: '/uikit/message' },
                // { label: 'File', icon: 'pi pi-fw pi-file', to: '/uikit/file' },
                // { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', to: '/uikit/charts' },
                // { label: 'Misc', icon: 'pi pi-fw pi-circle', to: '/uikit/misc' }
            ]
        },
        {
            label: '會員數據',
            items: [
                { label: '會員資料分析', icon: 'pi pi-fw pi-eye', to: '/blocks', badge: 'NEW' },
                { label: '資料管理', icon: 'pi pi-fw pi-globe', url: 'https://www.primefaces.org/primeblocks-react', target: '_blank' },
                { label: '標籤設定', icon: 'pi pi-fw pi-globe', url: 'https://www.primefaces.org/primeblocks-react', target: '_blank' }
            ]
        },
        {
            label: '數據集',
            items: [
                { label: '住宿資料', icon: 'pi pi-fw pi-comment', to: '/uikit/message' },
                { label: '住宿消費資料', icon: 'pi pi-fw pi-file', to: '/uikit/file' },
                { label: '電商訂房資料', icon: 'pi pi-fw pi-chart-bar', to: '/uikit/charts' },
                { label: '電商訂單資料', icon: 'pi pi-fw pi-circle', to: '/uikit/misc' }
            ]
        },
        {
            label: '歸戶管理',
            icon: 'pi pi-fw pi-briefcase',
            to: '/pages',
            items: [
                { label: '歸戶執行管理', icon: 'pi pi-fw pi-comment', to: '/uikit/message' },
                { label: '設定管理', icon: 'pi pi-fw pi-file', to: '/uikit/file' }
                // {
                //     label: 'Landing',
                //     icon: 'pi pi-fw pi-globe',
                //     to: '/landing'
                // },
                // {
                //     label: 'Auth',
                //     icon: 'pi pi-fw pi-user',
                //     items: [
                //         {
                //             label: 'Login',
                //             icon: 'pi pi-fw pi-sign-in',
                //             to: '/auth/login'
                //         },
                //         {
                //             label: 'Error',
                //             icon: 'pi pi-fw pi-times-circle',
                //             to: '/auth/error'
                //         },
                //         {
                //             label: 'Access Denied',
                //             icon: 'pi pi-fw pi-lock',
                //             to: '/auth/access'
                //         }
                //     ]
                // },
                // {
                //     label: 'Crud',
                //     icon: 'pi pi-fw pi-pencil',
                //     to: '/pages/crud'
                // },
                // {
                //     label: 'Timeline',
                //     icon: 'pi pi-fw pi-calendar',
                //     to: '/pages/timeline'
                // },
                // {
                //     label: 'Not Found',
                //     icon: 'pi pi-fw pi-exclamation-circle',
                //     to: '/pages/notfound'
                // },
                // {
                //     label: 'Empty',
                //     icon: 'pi pi-fw pi-circle-off',
                //     to: '/pages/empty'
                // }
            ]
        },
        {
            label: '使用者',
            items: [
                // {
                //     label: 'Submenu 1',
                //     icon: 'pi pi-fw pi-bookmark',
                //     items: [
                //         {
                //             label: 'Submenu 1.1',
                //             icon: 'pi pi-fw pi-bookmark',
                //             items: [
                //                 { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                //                 { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                //                 { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' },
                //             ]
                //         },
                //         {
                //             label: 'Submenu 1.2',
                //             icon: 'pi pi-fw pi-bookmark',
                //             items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }]
                //         }
                //     ]
                // },
                // {
                //     label: 'Submenu 2',
                //     icon: 'pi pi-fw pi-bookmark',
                //     items: [
                //         {
                //             label: 'Submenu 2.1',
                //             icon: 'pi pi-fw pi-bookmark',
                //             items: [
                //                 { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                //                 { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' }
                //             ]
                //         },
                //         {
                //             label: 'Submenu 2.2',
                //             icon: 'pi pi-fw pi-bookmark',
                //             items: [{ label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' }]
                //         }
                //     ]
                // }
            ]
        },
        {
            label: '管理者設定',
            items: [
                {
                    label: '新增使用者',
                    icon: 'pi pi-fw pi-question',
                    to: '/documentation'
                },
                {
                    label: '分公司設定',
                    icon: 'pi pi-fw pi-search',
                    url: 'https://github.com/primefaces/sakai-react',
                    target: '_blank'
                },
                {
                    label: '部門設定',
                    icon: 'pi pi-fw pi-question',
                    to: '/documentation'
                },
                {
                    label: '權限設定',
                    icon: 'pi pi-fw pi-search',
                    url: 'https://github.com/primefaces/sakai-react',
                    target: '_blank'
                }
            ]
        }
    ];

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
                })}

                <Link href="https://www.primefaces.org/primeblocks-react">
                    <a target="_blank" style={{ cursor: 'pointer' }}>
                        <img alt="Prime Blocks" className="w-full mt-3" src={`${contextPath}/layout/images/banner-primeblocks${layoutConfig.colorScheme === 'light' ? '' : '-dark'}.png`} />
                    </a>
                </Link>
            </ul>
        </MenuProvider>
    );
};

export default AppMenu;
