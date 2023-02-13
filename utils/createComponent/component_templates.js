// componentUi.tsx
export const componentUi = (name) => `
import React from 'react';

import classes from './${name}.module.scss';
import { PropsForUiType } from './types';

 export function ${toCapitalize(name)}Ui (props:PropsForUiType){
	const {} = props;
  return <div>Hello 👋, I am a ${name} component.</div>;
};
`;
// componentLogic.tsx
export const componentLogic = (name) => `import React, {FC} from 'react';
import { PropsForUiType, PropsType } from './types';

 export function ${toCapitalize(
		name
 )}Logic (Ui:FC<PropsForUiType>,props:PropsType){
	const propsForUi = {
		...props,
		
	};
  return Ui(propsForUi);
};



`;

// index.tsx
export const barrel = (name) => `import {${toCapitalize(
	name
)}Ui} from './${name}Ui';
import {${toCapitalize(name)}Logic} from './${name}Logic';
import { PropsType } from './types';

export function ${toCapitalize(name)} (props:PropsType){
	return ${toCapitalize(name)}Logic(${toCapitalize(name)}Ui,props);
}
`;

// componentLogic.tsx
export const types = (name) => `export type PropsType = {
	
};
export type PropsForUiType = PropsType & {

};
`;

function toCapitalize(word) {
	return word.charAt(0).toUpperCase() + word.slice(1);
}
