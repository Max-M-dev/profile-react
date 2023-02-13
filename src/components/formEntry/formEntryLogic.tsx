import React, {FC} from 'react';
import { PropsForUiType, PropsType } from './types';

 export function FormEntryLogic (Ui:FC<PropsForUiType>,props:PropsType){
	const propsForUi = {
		...props,
		
	};
  return Ui(propsForUi);
};



