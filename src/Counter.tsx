import { setUncaughtExceptionCaptureCallback } from 'process';
import React from 'react'; // Подключение react.
import { useState } from 'react';
import ButtonMy from './ButtonMy';

interface CounterProps {
    start: number;
    step: number;
}

var Counter = (props: CounterProps) => {
    //Функция сложения
    var handleIncrease = () => {
        setCount(count + props.step);
    };
    //Функция умножения
    var multNum = () =>
    {
        setCount(count * props.step);
    };
    //Функция деления
    var divNum = () =>
    {
        setCount(count / props.step);
    };
    var powNum = () =>
    {
        setCount(count ** props.step);
    };
    var [ count, setCount ] = useState(props.start);
    return (
        <div>
            <div>Значение счётчика: {count}.</div>
            <ButtonMy text={"Прибавить " + props.step} onClick={handleIncrease}/>
            <ButtonMy text={"Умножить на " + props.step} onClick={multNum}/>
            <ButtonMy text={"Разделить на " + props.step} onClick={divNum}/>
            <ButtonMy text={"Возвести в " + props.step} onClick={powNum}/>
        </div>
    );
};
export default Counter;