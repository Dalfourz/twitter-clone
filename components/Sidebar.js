import { HomeIcon,
    HashtagIcon,
    InboxIcon,
    BookOpenIcon,
    ClipboardIcon,
    BellIcon,
    UserIcon,
    DotsCircleHorizontalIcon,
    BookmarkIcon,
 } from "@heroicons/react/outline"

export default function Sidebar() {
    return (
        <div className="hidden sm:flex flex-col fixed">
            <div>Logo</div>
            <nav>
                <SidebarLink Icon={HomeIcon} text={"Home"}/>
                <SidebarLink Icon={HashtagIcon} text={"Explore"}/>
                <SidebarLink Icon={BellIcon} text={"Notifications"}/>
                <SidebarLink Icon={InboxIcon} text={"Messages"}/>
                <SidebarLink Icon={BookmarkIcon} text={"Bookmarks"}/>
                <SidebarLink Icon={UserIcon} text={"Profile"}/>
                <SidebarLink Icon={DotsCircleHorizontalIcon} text={"More"}/>
            </nav>
            <div>User</div>
        </div>
    );
}

function SidebarLink({text, Icon}){
    return (
        <li className="flex mb-6 items-center text-xl space-x-3">
            <Icon className="h-7"/>
            <span className="hidden xl:inline">{text}</span>
        </li>
    )
}