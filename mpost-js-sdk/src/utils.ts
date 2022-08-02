export  function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach((baseCtor) => {
      Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
        const baseCtorName = Object.getOwnPropertyDescriptor(baseCtor.prototype, name);
        if (!baseCtorName) {
          return;
        }
        Object.defineProperty(derivedCtor.prototype, name, baseCtorName);
      });
    });
  }