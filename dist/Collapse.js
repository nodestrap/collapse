// react:
import { default as React, } from 'react'; // base technology of our nodestrap components
import { 
// compositions:
composition, mainComposition, imports, 
// layouts:
layout, vars, 
// rules:
variants, states, rule, } from '@cssfn/cssfn'; // cssfn core
import { 
// hooks:
createUseSheet, } from '@cssfn/react-cssfn'; // cssfn for react
import { createCssConfig, 
// utilities:
usesGeneralProps, usesSuffixedProps, overwriteProps, } from '@cssfn/css-config'; // Stores & retrieves configuration using *css custom properties* (css variables)
// nodestrap components:
import { 
// hooks:
usesSizeVariant, defaultBlockOrientationRuleOptions, normalizeOrientationRule, usesOrientationRule, useOrientationVariant, } from '@nodestrap/basic';
import { 
// hooks:
isActived, isActivating, isPassivating, } from '@nodestrap/indicator';
import { 
// hooks:
usesActivePassiveState as popupUsesActivePassiveState, 
// styles:
usesPopupLayout, usesPopupVariants, usesPopupStates, 
// configs:
cssProps as pcssProps, Popup, } from '@nodestrap/popup';
// hooks:
// layouts:
export const defaultOrientationRuleOptions = defaultBlockOrientationRuleOptions;
// hooks:
// states:
//#region activePassive
/**
 * Uses active & passive states.
 * @returns A `[Factory<StyleCollection>, ReadonlyRefs, ReadonlyDecls]` represents active & passive state definitions.
 */
export const usesActivePassiveState = () => {
    // dependencies:
    const [activePassive, activePassiveRefs, activePassiveDecls, ...restActivePassive] = popupUsesActivePassiveState();
    return [
        () => composition([
            imports([
                activePassive(),
            ]),
            states([
                isActived([
                    vars({
                        [activePassiveDecls.filter]: cssProps.filterActive,
                    }),
                ]),
                isActivating([
                    vars({
                        [activePassiveDecls.filter]: cssProps.filterActive,
                        [activePassiveDecls.anim]: cssProps.animActive,
                    }),
                ]),
                isPassivating([
                    vars({
                        [activePassiveDecls.filter]: cssProps.filterActive,
                        [activePassiveDecls.anim]: cssProps.animPassive,
                    }),
                ]),
            ]),
        ]),
        activePassiveRefs,
        activePassiveDecls,
        ...restActivePassive,
    ];
};
//#endregion activePassive
// styles:
export const usesCollapseLayout = (options) => {
    // options:
    options = normalizeOrientationRule(options, defaultOrientationRuleOptions);
    const [orientationBlockSelector, orientationInlineSelector] = usesOrientationRule(options);
    return composition([
        imports([
            // layouts:
            usesPopupLayout(),
        ]),
        layout({
            // customize:
            ...usesGeneralProps(cssProps), // apply general cssProps
        }),
        variants([
            /* the orientation variants are part of the layout, because without these variants the layout is broken */
            rule(orientationBlockSelector, [
                layout({
                    // overwrites propName = propName{Block}:
                    ...overwriteProps(cssDecls, usesSuffixedProps(cssProps, 'block')),
                }),
            ]),
            rule(orientationInlineSelector, [
                layout({
                    // overwrites propName = propName{Inline}:
                    ...overwriteProps(cssDecls, usesSuffixedProps(cssProps, 'inline')),
                }),
            ]),
        ]),
    ]);
};
export const usesCollapseVariants = () => {
    // dependencies:
    // layouts:
    const [sizes] = usesSizeVariant((sizeName) => composition([
        layout({
            // overwrites propName = propName{SizeName}:
            ...overwriteProps(cssDecls, usesSuffixedProps(cssProps, sizeName)),
        }),
    ]));
    return composition([
        imports([
            // variants:
            usesPopupVariants(),
            // layouts:
            sizes(),
        ]),
    ]);
};
export const usesCollapseStates = () => {
    // dependencies:
    // states:
    const [activePassive] = usesActivePassiveState();
    return composition([
        imports([
            // states:
            usesPopupStates(),
            activePassive(),
        ]),
    ]);
};
export const useCollapseSheet = createUseSheet(() => [
    mainComposition([
        imports([
            // layouts:
            usesCollapseLayout(),
            // variants:
            usesCollapseVariants(),
            // states:
            usesCollapseStates(),
        ]),
    ]),
], /*sheetId :*/ 'gh2oi6zjs0'); // an unique salt for SSR support, ensures the server-side & client-side have the same generated class names
// configs:
export const [cssProps, cssDecls, cssVals, cssConfig] = createCssConfig(() => {
    //#region keyframes
    const keyframesActive = {
        from: {
            overflowY: 'hidden',
            maxBlockSize: 0,
        },
        '99%': {
            overflowY: 'hidden',
            maxBlockSize: '100vh',
        },
        to: {
            overflowY: 'unset',
            maxBlockSize: 'unset',
        },
    };
    const keyframesPassive = {
        from: keyframesActive.to,
        '1%': keyframesActive['99%'],
        to: keyframesActive.from,
    };
    const keyframesActiveInline = {
        from: {
            overflowX: 'hidden',
            maxInlineSize: 0,
        },
        '99%': {
            overflowX: 'hidden',
            maxInlineSize: '100vw',
        },
        to: {
            overflowX: 'unset',
            maxInlineSize: 'unset',
        },
    };
    const keyframesPassiveInline = {
        from: keyframesActiveInline.to,
        '1%': keyframesActiveInline['99%'],
        to: keyframesActiveInline.from,
    };
    //#endregion keyframes
    return {
        //#region animations
        filterActive: pcssProps.filterActive,
        '@keyframes active': keyframesActive,
        '@keyframes passive': keyframesPassive,
        animActive: [['300ms', 'ease-out', 'both', keyframesActive]],
        animPassive: [['300ms', 'ease-out', 'both', keyframesPassive]],
        '@keyframes activeInline': keyframesActiveInline,
        '@keyframes passiveInline': keyframesPassiveInline,
        animActiveInline: [['300ms', 'ease-out', 'both', keyframesActiveInline]],
        animPassiveInline: [['300ms', 'ease-out', 'both', keyframesPassiveInline]],
        //#endregion animations
    };
}, { prefix: 'clps' });
export function Collapse(props) {
    // styles:
    const sheet = useCollapseSheet();
    // variants:
    const orientationVariant = useOrientationVariant(props);
    // jsx:
    return (React.createElement(Popup, { ...props, 
        // classes:
        mainClass: props.mainClass ?? sheet.main, variantClasses: [...(props.variantClasses ?? []),
            orientationVariant.class,
        ] }));
}
export { Collapse as default };
