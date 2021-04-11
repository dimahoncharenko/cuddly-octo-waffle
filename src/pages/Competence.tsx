import React from "react";
import { Link } from "react-router-dom";

import WhiteSpace from "../components/WhiteSpace";

function Competence() {
    return (
        <>
            <h2 className="heading">ІТ-компетентність</h2>
            <p className="paragraph">
                <WhiteSpace/>
                ІТ-компетентність (інформаційно-технологічна компетентність) - 
                це здатність вчителя використовувати інформаційні і комунікаційні технології 
                для здійснення інформаційної діяльності (пошуку інформації, її визначення і 
                організації, управління і аналізу, а також її створення і розповсюдження) в 
                своїй професійній сфері. А саме:
            </p>
            <ul className="list vertical">
                <li>Здійснювати інформаційну діяльність по збору, обробці, передачі, збереженню інформаційного ресурсу;</li>
                <li>По продукуванню інформації з метою автоматизації процесів інформаційно-методичного забезпечення;</li>
                <li>Оцінювати і реалізовувати можливості електронних видань освітнього призначення і розподіленого в мережі Інтернет інформаційного ресурсу освітнього призначення;</li>
                <li>Організовувати інформаційну взаємодію між учасниками навчального процесу і інтерактивним засобом, що функціонує на базі засобів ІКТ;</li>
                <li>Створювати і використовувати психолого-педагогічні діагностичні методики контролю і оцінки рівня знань учнів, їх просування в навчанні, здійснювати навчальну діяльність з використанням засобів ІКТ в аспектах, що відображають особливості конкретного навчального предмету.</li>
            </ul>
            <p className="paragraph">
                <WhiteSpace/>
                ІТ-компетентність заслуговує на особливу увагу тому, що саме вона дає можливість особистості бути сучасною, активно діяти в 
                інформаційному середовищі, використовувати найновітніші досягнення техніки в своїй професійній діяльності. Слід відмітити,
                що майже всі науковці виділяють цю компетентність як обов’язкову складову професійної компетентності педагога. Важливість 
                формування ІКТ грамотності населення, створення неперервної системи підвищення кваліфікації в галузі ІКТ чітко відображена
                в Міжнародній програмі ЮНЕСКО «Інформація для всіх», оскільки саме від вчителів залежить розвиток інформаційної культури
                молоді.
            </p>
            <div className="more">
                <Link to="/stages">Дивіться також: Етапи розвитку ІТ</Link>
            </div>
        </>
    );
}

export default Competence;