import "../../styles/HowWeWorkComponent/main.scss";
import { BottomContent } from "./BottomContent";
import { UpperContent } from "./UpperContent";
import "../../styles/HowWeWorkComponent/Media.scss";
import "../../styles/HowWeWorkComponent/BottomMedia.scss";


export const HowWeWorkComponent = (): JSX.Element => {


    return (
        <div className="content__wrapper">
            <UpperContent />
            <BottomContent />
        </div>
    );
}