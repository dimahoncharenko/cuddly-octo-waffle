import React from "react";
import { Link } from "react-router-dom";

import WhiteSpace from "../components/WhiteSpace";

function Benefits() {
    return (
        <>
            <h2 className="heading">Переваги використання ІТ в освіті</h2>
            <p className="paragraph">
                <WhiteSpace/>
                Серед головних переваг ІТ можна виділити:
            </p>
            <ul className="list vertical">
                <li>Iндивідуалізація навчання;</li>
                <li>Iнтенсифікація самостійної роботи учнів;</li>
                <li>Зростання обсягу виконаних на уроці завдань;</li>
                <li>Розширення інформаційних потоків при використанні Internet.</li>
            </ul>
            <p className="paragraph">
                <WhiteSpace/>
                Підвищення мотивації та пізнавальної активності за рахунок різноманітності форм роботи, можливості включення ігрового моменту: вирішиш вірно приклади - відкриєш картинку, повставляєш правильно всі букви - продвинешь ближче до мети казкового героя. Комп'ютер дає вчителю нові можливості, дозволяючи разом з учнем отримувати задоволення від захопливого процесу пізнання, не тільки силою уяви розсовуючи стіни шкільного кабінету, але за допомогою новітніх технологій дозволяє зануритися в яскравий барвистий світ. Таке заняття викликає у дітей емоційний підйом, навіть відсталі учні охоче працюють з комп'ютером.
                Інтегрування звичайного уроку з комп'ютером дозволяє вчителю перекласти частину своєї роботи на ПК, роблячи при цьому процес навчання більш цікавим, різноманітним, інтенсивним. Зокрема, стає більш швидким процес запису визначень, теорем та інших важливих частин матеріалу, тому що вчителю не доводиться повторювати текст кілька разів (він вивів його на екран), учневі не доводиться чекати, поки вчитель повторить саме потрібний йому фрагмент.
                Застосування на уроці комп'ютерних тестів і діагностичних комплексів дозволить вчителю за короткий час отримувати об'єктивну картину рівня засвоєння матеріалу, що вивчається у всіх учнів і своєчасно його скоректувати. При цьому є можливість вибору рівня складності завдання для конкретного учня. Для учня важливо те, що відразу після виконання тесту (коли ця інформація ще не втратила свою актуальність) він отримує об'єктивний результат із зазначенням помилок, що неможливо, наприклад, при усному опитуванні.
            </p>
            <div className="more">
                <Link to="/shortcomings">Дивіться також: Існуючі недоліки та проблеми застосування ІТ</Link>
            </div>
        </>
    );
}

export default Benefits;