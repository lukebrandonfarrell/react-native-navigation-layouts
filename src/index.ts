
import { Platform } from "react-native";
import { Options } from "react-native-navigation";

/** -------------------------------------------- */
/**              Layout Generators               */
/** -------------------------------------------- */

/**
 * Method to generate a component layout
 *
 * @param screen {string} - Name of the screen used in registerComponent
 * @param props {object} - Props to pass to the component
 * @param options {object} - Options for the component
 * @return {{component: {name: *, passProps: {}, options: {}}}}
 */
export const component = (screen : string, props : object, options : Options) => {
  return {
    component: {
      name: screen,
      passProps: {
        ...props
      },
      options: {
        ...options
      }
    }
  };
};

/**
 * Method to generate a stack layout
 *
 * @param children {array} - Components which belong to this stack
 * @param stackOptions {object} - Options for this stack
 * @return {{stack: {children: *[], options: {}}}}
 */
export const stack = (children : any, options : Options) => {
  return {
    stack: {
      children,
      options,
    }
  };
};

/**
 * Method to generate a bottom tabs layout.
 *
 * @param id {string} - Bottom tabs id
 * @param children {array} - Bottom tabs children
 * @param options {object} - Bottom tabs options
 * @return {object}
 */
export const bottomTabs = (id = "bottomTabs", children : any, options : Options) => {
  return {
    bottomTabs: {
      id: id,
      children,
      options
    }
  };
};

/**
 * Handy method to wrap any layout type in root
 *
 * @param object {object} - Object to wrap in root
 * @return {object}
 */
export const root = (object : object) : object => {
  return { root: { ...object } };
};

/**
 * Handy method for generating bottom icon layouts
 *
 * @param label
 * @param icon
 * @return {object}
 */
export const bottomTab = (label : string, icon : any) : object => {
  return {
    bottomTab: {
      text: label,
      icon
    }
  };
};

/**
 * Handy method for generating topbar buttons
 *
 * @param id
 * @param icon
 * @param color
 * @return {object}
 */
export const button = (id : any, icon : any, color : string) => {
  return { id, icon, color };
};

/**
 * Handy method for wrapping buttons in rightButtons
 *
 * @param buttons
 * @return {object}
 */
export const rightButtons = (buttons : Array<object>) => {
  return { rightButtons: [...buttons] };
};


/**
 * Generates a animation layout for RNN
 *
 * @param command
 * @param property
 * @param from
 * @param to
 * @param duration
 * @param delay
 * @param interpolation
 * @param waitForRender
 * @param platform
 *
 * @return {object}
 */
export function animate(command : string, property : string, from : number, to: number, duration : number, delay : number, interpolation = "decelerate", waitForRender = true, platform : string) : object {
  const commands : Array<string> = ["setRoot", "push", "pop", "showModal", "dismissModal"];
  const properties : Array<string> = ["x", "y", "alpha", "scaleX", "scaleY", "rotationX", "rotationY", "rotation"];

  if(!commands.includes(command)) throw new Error(`First parameter 'command' must be one of: ${commands.join(", ")}`);
  if(!properties.includes(property)) throw new Error(`Second parameter 'property' must be one of: ${properties.join(", ")}`);

  const animation = {
    [property]: {
      from,
      to,
      duration,
      startDelay: delay,
      interpolation
    }
  };
  const content = ["setRoot", "showModal", "dismissModal"].includes(command) ? { ...animation } : { content: { ...animation } }

  if(!platform || platform === Platform.OS) {
    return {
      [command]: {
        waitForRender,
        ...content
      }
    }
  }

  return {};
}