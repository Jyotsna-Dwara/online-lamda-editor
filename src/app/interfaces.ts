export interface LamdaFunctionForm {
  maintainenceTime: string;
  responseBatchSize: string;
  inputType: string;
  inputUrl: string;
  type: { label: string; list: string[] };
  version: string;
  template: string;
  tags: string;
  scalaEditor: string;
}
export interface TagListItem {
  name: string;
}
export interface LamdaType {
  label: string;
  list: Array<string>
}
export interface CreateFuntionFormDetails {
  'lamda_types': Array<LamdaType>;
  'input_file_type': Array<string>
}