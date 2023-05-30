import { HomeIcon } from "@heroicons/react/outline"

export default function Sidebar() {
    return (
        <div className="hidden sm:flex flex-col">
            <div>Logo</div>
            <nav>
                <SidebarLink Icon={HomeIcon} text={"Home"}/>
                {/* <SidebarLink text={"Explore"}/>
                <SidebarLink text={"Notifications"}/>
                <SidebarLink text={"Messages"}/> */}
            </nav>
            <div>User</div>
        </div>
    );
}

function SidebarLink({text, Icon}){
    return (
        <li className="flex items-center text-xl">
            <Icon className="h-7"/>
            {text}
        </li>
    )
}