import {AccountUi} from './accountUi';
import {AccountLogic} from './accountLogic';
import { PropsType } from './types';

export function Account (props:PropsType){
	return AccountLogic(AccountUi,props);
}
