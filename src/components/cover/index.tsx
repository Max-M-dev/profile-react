import {CoverUi} from './coverUi';
import {CoverLogic} from './coverLogic';
import { PropsType } from './types';

export function Cover (props:PropsType){
	return CoverLogic(CoverUi,props);
}
