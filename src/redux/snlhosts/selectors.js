import * as c from './constants';

export const hosts = (state) => state[c.NAME].hosts || [];
export const host = (state) => state[c.NAME].host || {};
