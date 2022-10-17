import SidebarOption from "./SidebarOption";
import TwitterIcon from "@mui/icons-material/Twitter";

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <TwitterIcon />
            <SidebarOption text="ホーム" icon="アイコン" />
        </div>
    );
};

export default Sidebar;
