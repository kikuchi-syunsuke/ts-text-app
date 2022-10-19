import { useState } from "react";

const TweetBox: React.FC = () => {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    return (
        <div>
            <form>
                <div>
                    <input
                        value={tweetMessage}
                        placeholder="今どうしてる？"
                        type="text"
                        onChange={(e) => setTweetMessage(e.target.value)}
                    ></input>
                </div>
                <input
                    value={tweetImage}
                    placeholder="画像のURLを入力してください"
                    type="text"
                    onChange={(e) => setTweetImage(e.target.value)}
                ></input>
                <button type="submit">ツイートする</button>
            </form>
        </div>
    );
};
export default TweetBox;
