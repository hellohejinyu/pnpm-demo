import { StringType } from "foo/type";

const sayHello = (name: StringType) => {
  console.log(`hello ${name}`)
}

export {
  sayHello
}