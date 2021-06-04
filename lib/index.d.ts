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
export declare const component: (screen: string, props: object, options: Options) => {
    component: {
        name: string;
        passProps: {};
        options: {
            statusBar?: import("react-native-navigation").OptionsStatusBar | undefined;
            layout?: import("react-native-navigation").OptionsLayout | undefined;
            modalPresentationStyle?: import("react-native-navigation").OptionsModalPresentationStyle | undefined;
            modalTransitionStyle?: import("react-native-navigation").OptionsModalTransitionStyle | undefined;
            topBar?: import("react-native-navigation").OptionsTopBar | undefined;
            fab?: import("react-native-navigation").OptionsFab | undefined;
            bottomTabs?: import("react-native-navigation").OptionsBottomTabs | undefined;
            bottomTab?: import("react-native-navigation").OptionsBottomTab | undefined;
            sideMenu?: import("react-native-navigation").OptionsSideMenu | undefined;
            splitView?: import("react-native-navigation").OptionsSplitView | undefined;
            overlay?: import("react-native-navigation").OverlayOptions | undefined;
            animations?: import("react-native-navigation").AnimationOptions | undefined;
            customTransition?: import("react-native-navigation").OptionsCustomTransition | undefined;
            preview?: import("react-native-navigation").OptionsPreview | undefined;
            popGesture?: boolean | undefined;
            backgroundImage?: number | undefined;
            rootBackgroundImage?: number | undefined;
            blurOnUnmount?: boolean | undefined;
        };
    };
};
/**
 * Method to generate a stack layout
 *
 * @param children {array} - Components which belong to this stack
 * @param stackOptions {object} - Options for this stack
 * @return {{stack: {children: *[], options: {}}}}
 */
export declare const stack: (children: any, options: Options) => {
    stack: {
        children: any;
        options: Options;
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
export declare const bottomTabs: (id: string | undefined, children: any, options: Options) => {
    bottomTabs: {
        id: string;
        children: any;
        options: Options;
    };
};
/**
 * Handy method to wrap any layout type in root
 *
 * @param object {object} - Object to wrap in root
 * @return {object}
 */
export declare const root: (object: object) => object;
/**
 * Handy method for generating bottom icon layouts
 *
 * @param label
 * @param icon
 * @return {object}
 */
export declare const bottomTab: (label: string, icon: any) => object;
/**
 * Handy method for generating topbar buttons
 *
 * @param id
 * @param icon
 * @param color
 * @return {object}
 */
export declare const button: (id: any, icon: any, color: string) => {
    id: any;
    icon: any;
    color: string;
};
/**
 * Handy method for wrapping buttons in rightButtons
 *
 * @param buttons
 * @return {object}
 */
export declare const rightButtons: (buttons: Array<object>) => {
    rightButtons: object[];
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
export declare function animate(command: string, property: string, from: number, to: number, duration: number, delay: number, interpolation: string | undefined, waitForRender: boolean | undefined, platform: string): object;
