import Post from "./Post";
import TweetBox from "./TweetBox";

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
        <div>
            <div>
                <h2>ホーム</h2>
            </div>
            <TweetBox />
            <Post
                displayName={userPost.displayName}
                username={userPost.username}
                text={userPost.text}
                avatar={userPost.avatar}
                image={userPost.image}
            />
        </div>
    );
};
export default Timeline;
