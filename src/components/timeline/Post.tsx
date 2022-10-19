import {
    ChatBubbleOutline,
    FavoriteBorder,
    PublishOutlined,
    Repeat,
    VerifiedUser,
} from "@mui/icons-material";
import styled from "styled-components";

type POST = {
    displayName: string;
    username: string;
    text: string;
    avatar: string;
    image: string;
};
/*
const userPost: POST = {
    displayName: "test-man",
    username: "testtest",
    text: "テスト投稿です",
    avatar: "http://shincode.info/wp-content/uploads/2021/12/icon.png",
    image: "https://source.unsplash.com/random",
};*/

const Post: React.FC<POST> = (props) => {
    const { displayName, username, text, avatar, image } = props;
    return (
        <SPost>
            <div className="postAvatar"></div>
            <SPostBody>
                <div className="postHeader">
                    <SPostHeaderText>
                        <h3>
                            {displayName}
                            <SPostHeaderSpecial>
                                <SPostBadge />@{username}
                            </SPostHeaderSpecial>
                        </h3>
                    </SPostHeaderText>
                    <SPostHeaderDescription>
                        <p>{text}</p>
                    </SPostHeaderDescription>
                </div>
                <img src={image} />
                <SPostFooter>
                    <ChatBubbleOutline />
                    <Repeat />
                    <FavoriteBorder />
                    <PublishOutlined />
                </SPostFooter>
            </SPostBody>
        </SPost>
    );
};

const SPost = styled.div`
    display: flex;
    align-items: flex-start;
    border-bottom: 1px solid var(--twitter-background);
`;

const SPostBody = styled.div`
    flex: 1;
    > img {
        border-radius: 20px;
        width: 100%;
    }
`;

const SP = styled.p`
    margin: 0;
    padding: 0;
`;

const SPostFooter = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`;

const SPostHeaderDescription = styled.div`
    margin-bottom: 10px;
    font-size: 15px;
`;

const SPostHeaderText = styled.div`
    > h3 {
        font-size: 15px;
        margin-bottom: 5px;
    }
`;

const SPostBadge = styled(VerifiedUser)`
    font-size: 14px !important;
    color: var(--app-color) !important;
`;

const SPostHeaderSpecial = styled.span`
    font-weight: 600;
    font-size: 12px;
    color: gray;
`;

const PostAvatar = styled.div``;

export default Post;
