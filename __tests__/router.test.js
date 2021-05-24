/**
 * @jest-environment jsdom
*/
import { router, pushToHistory } from '../scripts/router.js';
// import { router.pushToHistory } from '../scripts/router.js';

describe('pushToHistory', () => {
    test('history stack length', () => {
        pushToHistory('settings',  0);
        pushToHistory('default',  0);
        pushToHistory('entry', 1);
        expect(history.length).toBe(4);

    });

    test('current state', () => {
        pushToHistory('settings', 0);
        expect(history.state).toStrictEqual({'page':'settings'});
        pushToHistory('default', 0);
        expect(history.state).toStrictEqual({});
        pushToHistory('entry', 1);
        expect(history.state).toStrictEqual({'page':'entry1'});
    });
});