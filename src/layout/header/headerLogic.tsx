import React, {FC} from 'react';
import { PropsForUiType, PropsType } from './types';

 export function headerLogic (Ui:FC<PropsForUiType>,props:PropsType){
	const propsForUi = {
		...props,
		
	};
  return Ui(propsForUi);
};



