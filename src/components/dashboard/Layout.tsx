import SideMenu from "./SideMenu";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <SideMenu />
            <main className="ml-[256px] p-10">
                {children}
            </main>
        </div>
    );
}