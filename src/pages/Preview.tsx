import React from "react";
import { Link } from "react-router-dom";

import WhiteSpace from "../components/WhiteSpace";

function Preview() {
    return (
        <>
            <h2 className="heading">ІТ у професійній діяльності вчителя</h2>
            <p className="paragraph">
                <WhiteSpace/>
                У сучасному світі технологічних змін і зростання конкуренції на ринку праці, 
                необхідність професійного розвитку, можливість йти пліч-о-пліч з технічним прогресом,
                рушійною силою якого вважають технічне мислення, стають вкрай необхідними умовами. 
                Підготовка високо кваліфікованого фахівця потребує впровадження нових інформаційних технологій навчання. 
                Особливу актуальність у сучасних умовах інтенсивного розвитку нових інформаційних технологій на базі 
                загальної комп’ютеризації здобуває організація підготовки вчителя щодо використання інформаційних 
                технологій в професійній діяльності.
            </p>
            <p className="paragraph">
                <WhiteSpace/>
                Одним із пріоритетних завдань реформування освіти є підготовка педагога, здатного до 
                професійної діяльності в умовах впровадження інформаційно-комунікаційних технологій у 
                навчальний процес. Сьогодні інформаційно-комунікаційні технології, як сукупність сучасних 
                методів і засобів отримання й опрацювання даних трансформуються у важіль підвищення ефективності 
                навчально-виховного процесу та управління ним. Враховуючи вимоги сьогодення, вчитель зобов’язаний 
                засвоїти основи економічних знань, мати високу загальну культуру, володіти вміннями організаційної 
                та виховної роботи, іноземною мовою, виявляти ініціативу, бути відповідальним, прагнути до самовдосконалення 
                і самоосвіти, впроваджувати інновації, що дуже важливо, набути навичок роботи з комп’ютерною технікою.
            </p>
            <div className="more">
                <Link to="/it-competence">Дивіться також: ІТ-компетентність</Link>
            </div>
        </>
    );
}

export default Preview;