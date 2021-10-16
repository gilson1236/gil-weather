import { createReducer, on } from '@ngrx/store';

import { Units } from '../../models/utils.enum';

import * as fromHomeActions from './config.actons';

export interface ConfigState {
    unit: Units;
}

export const configInitialState: ConfigState = {
    unit: Units.Metric,
}

export const configReducer = createReducer(
    configInitialState,
    on(fromHomeActions.updateUnit, (state, { unit }) => ({
        ...state,
        unit
    }))
);