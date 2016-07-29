import xs from 'xstream';
import {div} from '@cycle/dom';
import {last, merge} from 'ramda';

const containerStyle = {
    display: 'flex',
    width: '30rem',
    height: '15rem',
    boxShadow: '0 2px 6px rgba(100, 100, 100, 0.3)'
};

const leftContentStyle = {
    display: 'flex',
    flex: 1,
    color: 'white',
    background: 'indigo'
};

const rightContentStyle = {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2
};

const clockContainerStyle = {
    display: 'block',
    position: 'relative',
    width: '13rem',
    height: '13rem',
    background: '#eee',
    borderRadius: '50%'
}

const clockNumberStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '2em',
    height: '2em',
    fontSize: '0.8em',
    color: '#ddd',
    background: 'white',
    borderRadius: '50%'
}

const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function makeClockNumberStyle(n, max) {
    let radius = 5;
    let xPosition = radius * Math.sin(Math.PI * 2 * (n / max));
    let yPosition = radius * Math.cos(Math.PI * 2 * (n / max));
    return merge(clockNumberStyle, {
        marginLeft: (radius + xPosition + 0.7) + 'rem',
        marginTop: (radius + -yPosition + 0.7) + 'rem'
    })
}

function renderHour(hour) {
    return div({style: makeClockNumberStyle(hour, last(hours))}, String(hour))
}

function renderView() {
    return xs.of(
        div({style: containerStyle}, [
            div({style: leftContentStyle}),
            div({style: rightContentStyle}, [
                div({style: clockContainerStyle}, hours.map(renderHour))
            ])
        ])
    )
}

export default function view() {
    return renderView();
}
