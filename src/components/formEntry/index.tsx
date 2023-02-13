import {FormEntryUi} from './formEntryUi';
import {FormEntryLogic} from './formEntryLogic';
import { PropsType } from './types';

export function FormEntry (props:PropsType){
	return FormEntryLogic(FormEntryUi,props);
}
