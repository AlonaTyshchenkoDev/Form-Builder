export interface IDropItem {
  name: string,
  id?: string
}

export interface IGeneralStyles {
  formTitle: string,
  color: string,
  background: string,
  borderStyle: string,
  borderColor: string
}

export interface IFieldStyles {
  title?: string,
  placeholder?: string,
  width: string,
  height: string,
  fontSize: string,
  fontWeight: string,
  borderStyle: string,
  color: string,
  margin?: string,
  display?: string
}

export interface IUser {
  login?: string,
  email: string,
  password: string,
}
