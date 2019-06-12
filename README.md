# react-native-navigation-layouts

Utility library for generating layouts for [react-native-navigation](https://github.com/wix/react-native-navigation). This library exposes helper methods to generate the complex objects needed to define layouts in RNN.

**Before:**

```js
Navigation.push(this.props.componentId, {
  component: {
    name: "CustomScreen",
    passProps: {
       mySpecialValue: false,
    }
  },
});
```

**After:**

```js
import { component } from "react-native-navigation-layouts";

Navigation.push(this.props.componentId, component("CustomScreen", { 
  mySpecialValue: false 
}));
```

## Documentation

#### Animation

The library also handles generating animation for your layouts. This can be done by using the `animate` method.

```js
 animations: {
    ...animate("push", "x", 1000, 0, 200, 0, 'decelerate", true, "android"),
 }
```


## Authors

* [**Luke Brandon Farrell**](https://lukebrandonfarrell.com/) - *Author*

## License

This project is licensed under the MIT License