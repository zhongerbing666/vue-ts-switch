function onOff(value: string) {
    return function(target: any, key: any, descriptor: any) {
      descriptor.value = new Proxy(descriptor.value, {
        apply: async function(method, context, argList) {
          context[value] = true
          await method.apply(context, argList)
          context[value] = false
        }
      })
      return descriptor
    }
  }
  
  export default onOff
  