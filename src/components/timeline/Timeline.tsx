import Post from "./Post";
import TweetBox from "./TweetBox";
import styled from "styled-components";

type POST = {
    displayName: string;
    username: string;
    text: string;
    avatar: string;
    image: string;
};

const userPost: POST = {
    displayName: "test-man",
    username: "testtest",
    text: "テスト投稿です",
    avatar: "http://shincode.info/wp-content/uploads/2021/12/icon.png",
    image: "https://source.unsplash.com/random",
};

const Timeline: React.FC = () => {
    return (
        <STimeline>
            <STimelineHeader>
                <h2>ホーム</h2>
            </STimelineHeader>
            <TweetBox />
            <Post
                displayName={userPost.displayName}
                username={userPost.username}
                text={userPost.text}
                avatar={userPost.avatar}
                image={userPost.image}
            />
        </STimeline>
    );
};

const STimeline = styled.div`
    fled: 0.45;
    border-right: 1px solid var(--app-background);
    overflow-y: scroll;
`;

const STimelineHeader = styled.div`
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 100;
    border: 1px solid var(--app-background);
    padding: 5px 20px;
    > h2 {
        font-size: 20px;
        font-weight: 800;
    }
`;

export default Timeline;
