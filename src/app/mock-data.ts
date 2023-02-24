import { TagListItem, LamdaType, CreateFuntionFormDetails } from './interfaces';

const LAMDA_TYPES: LamdaType[]  = [
    {
      label: 'Scala',
      list: ['Scala Editor', 'Scala Lamda'],
    },
    {
      label: 'Groovy',
      list: ['Groovy Editor', 'Groovy Lamda'],
    },
];
const INPUT_FILE_TYPE: string[] = ['API', 'File', 'MQ']

export const DEFAULT_TAG_LIST: TagListItem[] = [
    { name: 'DefaultTag1' },
    { name: 'DefaultTag2' },
]
export const TAGS_LIST : TagListItem[] = [
    { name: 'One' },
    { name: 'Two' },
    { name: 'Three' },
]
export const CREATE_FUNCTION_FORM_DETAILS: CreateFuntionFormDetails = {
    'lamda_types' : LAMDA_TYPES,
    'input_file_type': INPUT_FILE_TYPE
}
