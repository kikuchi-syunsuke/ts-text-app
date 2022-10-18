import { Search } from "@mui/icons-material";
import { Timeline } from "react-twitter-widgets";
import styled from "styled-components";

const Widgets: React.FC = () => {
    return (
        <SWidgets>
            <SWidgetsInput>
                <SWidgetsSearchIcon />
                <input placeholder="キーワード検索" type="text" />
            </SWidgetsInput>
            <SWidgetsWidgetContainer>
                <h2>今どうしてる？</h2>
                {/* ライブラリ追加 */}
                <Timeline
                    dataSource={{
                        sourceType: "profile",
                        screenName: "zrts_kkch",
                    }}
                    options={{
                        height: 800,
                    }}
                />
            </SWidgetsWidgetContainer>
        </SWidgets>
    );
};

const SWidgets = styled.div`
    flex: 0.3;
`;

const SWidgetsInput = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--app-background);
    padding: 10px;
    border-radius: 20px;
    margin-top: 10px;
    margin-left: 20px;
    input {
        border: none;
        background-color: var(--app-background);
    }
`;

const SWidgetsSearchIcon = styled(Search)`
    color: gray;
`;

const SWidgetsWidgetContainer = styled.div`
    margin-top: 15px;
    margin-left: 20px;
    padding: 20px;
    padding-top: 5px;
    background-color: #f5f8fa;
    border-radius: 20px;
    h2 {
        font-size: 18px;
        font-weight: 800;
    }
`;
export default Widgets;
