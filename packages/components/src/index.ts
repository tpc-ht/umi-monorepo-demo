export * from './Button';

export {default as Foo} from './Foo';
export {CRM};
const globalData = {
  request: () => {
  },
  test: '001'
};
const CRM = new Proxy(globalData, {
  get: function (target: any, property, receiver) {
    return property in target ? target[property] : () => {
    };
  },
});
