import "../../styles/QA/QA.scss";
import "../../styles/QA/Media.scss"; 
import VectorDown from "../../img/VectorDown.svg";
import { useEffect, useState } from "react";

export const QA = (): JSX.Element => {
    const [answer1, setAnswer1] = useState<string>("Для начала работы в Future Technologies Company (FTC) вам может понадобиться соответствующее образование или опыт в технологической сфере");
    const [answer2, setAnswer2] = useState<string>("Доходность зависит от успеха компании и рыночных условий.");
    const [answer3, setAnswer3] = useState<string>("answer3");


    const [question1, setQuestion1] = useState<string>("Что нужно, чтобы начать работать с future technologies company (ftc)? ");
    const [question2, setQuestion2] = useState<string>("Могу ли я не заработать, инвестируя с future technologies company (ftc)?");
    const [question3, setQuestion3] = useState<string>("Какая минимальная и максимальная сумма депозита?");

    const [answer1Active, setAnswer1Active] = useState<boolean>(false);
    const [answer2Active, setAnswer2Active] = useState<boolean>(false);
    const [answer3Active, setAnswer3Active] = useState<boolean>(false);
    const [isActiveAnswer, setIsActiveAnswer] = useState<string>(question2);


    const [question1Active, setQuestion1Active] = useState<boolean>(false);
    const [question2Active, setQuestion2Active] = useState<boolean>(false);
    const [question3Active, setQuestion3Active] = useState<boolean>(false);
    const [isActiveQuestion, setIsActiveQuestion] = useState<string>(question2);

    const setQuestionContent = (questionId: string): JSX.Element => {
        switch (questionId) {
            case "question1":
                return (
                    <>
                        <p>{question1}</p>
                    </>
                )
            
            case "question2":
                return (
                    <>
                        <p>{question2}</p>
                    </>
                )

            case "question3":
                return (
                    <>
                        <p>{question3}</p>
                    </>
                )
            
            default:
                return (
                    <>
                        <p>{question1}</p>
                    </>
                )
        }
    }


    const setAnswerContent = (questionId: string): JSX.Element => {
        // TODO:
        // При активном вопросе выводить ответ на выбранный вопрос
        
        switch (questionId) {
            case "question1":
                return (
                    <>
                        <p>{answer1}</p>
                    </>
                )
            
            case "question2":
                return (
                    <>
                        <p>{answer2}</p>
                    </>
                )

            case "question3":
                return (
                    <>
                        <p>Минимальный размер депозита – 100 рублей.</p>
                        <p>Максимальный размер депозита – 80 000 000 рублей.</p>
                    </>
                )
            
            default:
                return (
                    <>
                        <p>{answer1}</p>
                    </>
                )
        }
    }


    const resetAnswerAStates = () => {
        setAnswer1Active(false);
        setAnswer2Active(false);
        setAnswer3Active(false);

        setQuestion1Active(false);
        setQuestion2Active(false);
        setQuestion3Active(false);
    }


    useEffect(() => {
        const vectorImage = document.querySelectorAll(".vectorImage");

        resetAnswerAStates();

        if (vectorImage[0].classList.contains("vectorImage--active")) {
            setIsActiveQuestion("question1");
            setIsActiveAnswer("question1");
        }

        if (vectorImage[1].classList.contains("vectorImage--active")) {
            setIsActiveQuestion("question2");
            setIsActiveAnswer("question2");
        }

        if (vectorImage[2].classList.contains("vectorImage--active")) {
            setIsActiveQuestion("question3");
            setIsActiveAnswer("question3");
        }
    }, [answer1Active, answer2Active, answer3Active]);


    const activateQuestion = (questionId: string) => {
        const vectorImage = document.querySelectorAll(".vectorImage");

        switch (questionId) {
            case "question1":
                vectorImage[0].classList.toggle("vectorImage--active");
                setQuestion1Active(true);
                setAnswer1Active(true);
            break;

            case "question2": 
                vectorImage[1].classList.toggle("vectorImage--active");
                setQuestion2Active(true);
                setAnswer2Active(true);
            break;

            case "question3":
                vectorImage[2].classList.toggle("vectorImage--active");
                setQuestion3Active(true);
                setAnswer3Active(true);
            break;
        }
    }


    return (
        <div className="QA__wrapper">
            <h1 className="QA__title">Часто задаваемые вопросы</h1>

            <div className="QA__content">
                <div className="QA__questions accordeon__wrapper">
                    <div className="question question1">
                        <span>?</span>
                        <span className="question__text1">Что нужно, чтобы начать работать с future technologies company (ftc)? </span>
                        <a id="question1"
                            onClick={(e) => {
                                e.preventDefault();
                                activateQuestion("question1");
                            }}    
                        >
                            <img className="vectorImage" src={VectorDown} />
                        </a>
                    </div>
                    <div className="question question2">
                        <span>?</span>
                        <span className="question__text2">Могу ли я не заработать, инвестируя с future technologies company (ftc)?</span>
                        <a id="question2"
                            onClick={(e) => {
                                e.preventDefault();
                                activateQuestion("question2");
                            }}    
                        >
                            <img className="vectorImage" src={VectorDown} />
                        </a>
                    </div>
                    <div className="question question3">
                        <span>?</span>
                        <span className="question__text3">Какая минимальная и максимальная сумма депозита?</span>
                        <a id="question3"
                            onClick={(e) => {
                                activateQuestion("question3");
                            }}    
                        >
                            <img className="vectorImage" src={VectorDown} />
                        </a>
                    </div>
                </div>
                <div className="QA__answerContent">
                    <h2 className="question__title">{setQuestionContent(isActiveQuestion)}</h2>
                    <div className="answer">
                        {setAnswerContent(isActiveAnswer)}
                    </div>
                </div>
            </div>
        </div>
    );
}
