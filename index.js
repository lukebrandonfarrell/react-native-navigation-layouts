import { Platform } from "react-native";

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
export const component = (screen, props, options) => {
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
export const stack = (children, stackOptions) => {
  return {
    stack: {
      children,
      options: { ...stackOptions }
    }
  };
};

/**
 * Method to generate a bottom tabs layout.
 *
 * @param id {string} - Bottom tabs id
 * @param children {array} - Bottom tabs children
 * @param options {object} - Bottom tabs options
 * @return {{bottomTabs: {id: string, children: *[], options: {}}}}
 */
export const bottomTabs = (id = "bottomTabs", children, options) => {
  return {
    bottomTabs: {
      id: id,
      children,
      options: { ...options }
    }
  };
};

/**
 * Handy method to wrap any layout type in root
 *
 * @param object {object} - Object to wrap in root
 * @return {{root: { object }}}
 */
export const root = object => {
  return { root: { ...object } };
};

/**
 * Handy method for generating bottom icon layouts
 *
 * @param label
 * @param icon
 * @return {{bottomTab: {text: *, icon: *}}}
 */
export const bottomTab = (label, icon) => {
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
 * @return {{bottomTab: {text: *, icon: *}}}
 */
export const button = (id, icon, color) => {
  return { id, icon, color };
};

/**
 * Handy method for wrapping buttons in rightButtons
 *
 * @param buttons
 * @return {{rightButtons: *[]}}
 */
export const rightButtons = buttons => {
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
 * @return {{from: *, to: *, duration: *, startDelay: *, interpolation: string}}
 */
export function animate(command, property, from, to, duration, delay, interpolation = "decelerate", waitForRender = true, platform){
  const commands = ["setRoot", "push", "pop", "showModal", "dismissModal"];
  const properties = ["x", "y", "alpha", "scaleX", "scaleY", "rotationX", "rotationY", "rotation"];

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