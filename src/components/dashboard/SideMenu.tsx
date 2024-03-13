import { Sidebar } from 'flowbite-react';


export default function SideMenu() {
    return (
        <Sidebar aria-label="Sidebar with logo branding example" className=' h-[100dvh] fixed'>

            <Sidebar.Items>
                <Sidebar.ItemGroup>

                    <Sidebar.Item href="/dashboard">
                        Dashboard
                    </Sidebar.Item>
                    <Sidebar.Item href="/dashboard/dancers">
                        Dancers
                    </Sidebar.Item>
                    <Sidebar.Item href="#">
                        Inbox
                    </Sidebar.Item>
                    <Sidebar.Item href="#">
                        Users
                    </Sidebar.Item>
                    <Sidebar.Item href="#">
                        Products
                    </Sidebar.Item>
                    <Sidebar.Item href="#">
                        Sign In
                    </Sidebar.Item>
                    <Sidebar.Item href="#">
                        Sign Up
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
}
