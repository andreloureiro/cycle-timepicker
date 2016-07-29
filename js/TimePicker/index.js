import xs from 'xstream';
import view from './view';

export default function TimePicker(sources) {
    const vdom$ = view();

    return {
        DOM: vdom$
    };
}
