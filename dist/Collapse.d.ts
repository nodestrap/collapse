/// <reference types="react" />
import type { PropEx } from '@cssfn/css-types';
import { OrientationName, OrientationRuleOptions, OrientationVariant } from '@nodestrap/basic';
import { PopupPlacement, PopupMiddleware, PopupStrategy, PopupProps } from '@nodestrap/popup';
export declare const defaultOrientationRuleOptions: OrientationRuleOptions;
/**
 * Uses active & passive states.
 * @returns A `[Factory<Rule>, ReadonlyRefs, ReadonlyDecls]` represents active & passive state definitions.
 */
export declare const usesActivePassiveState: () => readonly [() => import("@cssfn/cssfn").Rule, import("@cssfn/css-var").ReadonlyRefs<import("@nodestrap/indicator").ActivePassiveVars>, import("@cssfn/css-var").ReadonlyDecls<import("@nodestrap/indicator").ActivePassiveVars>];
export declare const usesCollapseLayout: (options?: OrientationRuleOptions | undefined) => import("@cssfn/cssfn").Rule;
export declare const usesCollapseVariants: () => import("@cssfn/cssfn").Rule;
export declare const usesCollapseStates: () => import("@cssfn/cssfn").Rule;
export declare const useCollapseSheet: import("@cssfn/types").Factory<import("jss").Classes<"main">>;
export declare const cssProps: import("@cssfn/css-config").Refs<{
    filterActive: import("@cssfn/css-types").Cust.Ref;
    '@keyframes active': PropEx.Keyframes;
    '@keyframes passive': PropEx.Keyframes;
    animActive: (string | PropEx.Keyframes)[][];
    animPassive: (string | PropEx.Keyframes)[][];
    '@keyframes activeInline': PropEx.Keyframes;
    '@keyframes passiveInline': PropEx.Keyframes;
    animActiveInline: (string | PropEx.Keyframes)[][];
    animPassiveInline: (string | PropEx.Keyframes)[][];
}>, cssDecls: import("@cssfn/css-config").Decls<{
    filterActive: import("@cssfn/css-types").Cust.Ref;
    '@keyframes active': PropEx.Keyframes;
    '@keyframes passive': PropEx.Keyframes;
    animActive: (string | PropEx.Keyframes)[][];
    animPassive: (string | PropEx.Keyframes)[][];
    '@keyframes activeInline': PropEx.Keyframes;
    '@keyframes passiveInline': PropEx.Keyframes;
    animActiveInline: (string | PropEx.Keyframes)[][];
    animPassiveInline: (string | PropEx.Keyframes)[][];
}>, cssVals: import("@cssfn/css-config").Vals<{
    filterActive: import("@cssfn/css-types").Cust.Ref;
    '@keyframes active': PropEx.Keyframes;
    '@keyframes passive': PropEx.Keyframes;
    animActive: (string | PropEx.Keyframes)[][];
    animPassive: (string | PropEx.Keyframes)[][];
    '@keyframes activeInline': PropEx.Keyframes;
    '@keyframes passiveInline': PropEx.Keyframes;
    animActiveInline: (string | PropEx.Keyframes)[][];
    animPassiveInline: (string | PropEx.Keyframes)[][];
}>, cssConfig: import("@cssfn/css-config").CssConfigSettings;
export interface CollapseProps<TElement extends HTMLElement = HTMLElement> extends PopupProps<TElement>, OrientationVariant {
}
export declare function Collapse<TElement extends HTMLElement = HTMLElement>(props: CollapseProps<TElement>): JSX.Element;
export { Collapse as default };
export type { OrientationName, OrientationVariant };
export type { PopupPlacement, PopupMiddleware, PopupStrategy };
