import {headerUi} from './headerUi';
import {headerLogic} from './headerLogic';
import { PropsType } from './types';

export function Header (props:PropsType){
	return headerLogic(headerUi,props);
}
