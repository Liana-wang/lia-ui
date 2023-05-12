interface IClassName {
  BackgroundColor?: string;
}

let ClassName: IClassName = {}

export const setClassName = (appName: string) => {
  ClassName = {
    BackgroundColor: `${appName}-oem-color`,
  }
}

export const getClassName = () => {
  return ClassName
}
