import SidebarOption from "./SidebarOption";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import styled from "styled-components";

const Sidebar: React.FC = () => {
    return (
        <SSidebar>
            <SSidebarAppIcon />
            <SidebarOption text="ホーム" Icon={HomeIcon} />
            <SidebarOption text="話題を検索" Icon={SearchIcon} />
            <SidebarOption text="通知" Icon={NotificationsNoneIcon} />
            <SidebarOption text="メッセージ" Icon={MailOutlineIcon} />
            <SidebarOption text="ブックマーク" Icon={BookmarkBorderIcon} />
            <SidebarOption text="リスト" Icon={ListAltIcon} />
            <SidebarOption text="プロフィール" Icon={PermIdentityIcon} />
            <SidebarOption text="もっと見る" Icon={MoreHorizIcon} />
            <SSidebarButton>投稿する</SSidebarButton>
        </SSidebar>
    );
};

const SSidebar = styled.div`
    border-right: 1px solid var(--app-color);
    flex: 0.2;
    min-width: 250px;
    margin-top: 20px;
    padding-inline: 20px;
`;

const SSidebarAppIcon = styled(TwitterIcon)`
    color: var(--app-color);
    font-size: 30px !important;
    margin-left: 20px;
    margin-bottom: 20px;
`;

const SSidebarButton = styled.button`
    background-color: var(--app-color) !important;
    color: white;
    font-weight: 900 !important;
    border: none !important;
    border-radius: 30px !important;
    height: 50px !important;
    margin-top: 20px !important;
    &:hover {
        transition: 0.2s;
        opacity: 0.5;
    }
`;

export default Sidebar;
