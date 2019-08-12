"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
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
exports.component = (screen, props, options) => {
    return {
        component: {
            name: screen,
            passProps: Object.assign({}, props),
            options: Object.assign({}, options)
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
exports.stack = (children, options) => {
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
exports.bottomTabs = (id = "bottomTabs", children, options) => {
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
exports.root = (object) => {
    return { root: Object.assign({}, object) };
};
/**
 * Handy method for generating bottom icon layouts
 *
 * @param label
 * @param icon
 * @return {object}
 */
exports.bottomTab = (label, icon) => {
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
exports.button = (id, icon, color) => {
    return { id, icon, color };
};
/**
 * Handy method for wrapping buttons in rightButtons
 *
 * @param buttons
 * @return {object}
 */
exports.rightButtons = (buttons) => {
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
function animate(command, property, from, to, duration, delay, interpolation = "decelerate", waitForRender = true, platform) {
    const commands = ["setRoot", "push", "pop", "showModal", "dismissModal"];
    const properties = ["x", "y", "alpha", "scaleX", "scaleY", "rotationX", "rotationY", "rotation"];
    if (!commands.includes(command))
        throw new Error(`First parameter 'command' must be one of: ${commands.join(", ")}`);
    if (!properties.includes(property))
        throw new Error(`Second parameter 'property' must be one of: ${properties.join(", ")}`);
    const animation = {
        [property]: {
            from,
            to,
            duration,
            startDelay: delay,
            interpolation
        }
    };
    const content = ["setRoot", "showModal", "dismissModal"].includes(command) ? Object.assign({}, animation) : { content: Object.assign({}, animation) };
    if (!platform || platform === react_native_1.Platform.OS) {
        return {
            [command]: Object.assign({ waitForRender }, content)
        };
    }
    return {};
}
exports.animate = animate;
