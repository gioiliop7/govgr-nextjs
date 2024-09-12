export interface GovProps {
  message?: string;
  serviceName?: string;
}

export type TaxisProfile = {
  taxid: string;
  userid: string;
  firstname?: string;
  lastname?: string;
  fathername?: string;
  mothername?: string;
  birthyear?: string;
  [key: string]: any;
};
