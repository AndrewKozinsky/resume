import React from 'react';
import {useSelector} from "react-redux";
import './tools.scss'

function Tools({toolsData}) {

    const lang = useSelector(state => state.lang);
    const experience = (lang === 'ru') ? 'Опыт' : 'Experience';
    const level = (lang === 'ru') ? 'Уровень' : 'Level';

    const markup = toolsData.map( (data, i) => {

        const subtools = data.subTools.map((subToolName, j) => {
            return <span className="tool__subtool" key={j}>{subToolName}</span>
        });

        const sign = <img src={data.sign} className="tool__sign" />;

        return <div className="tool" key={i}>
            <h3 className="tool__name">{data.name}{sign}</h3>
            <div className="tool__subtools">{subtools}</div>
            <p className="tool__details">
                <span className="tool__detail">{experience}: <span className="tool__details-backlight">{data.experience}</span></span>
                <span className="tool__detail">{level}: <span className="tool__details-backlight">{data.level}</span></span>
            </p>
        </div>
    });


    return markup
}

export default Tools;