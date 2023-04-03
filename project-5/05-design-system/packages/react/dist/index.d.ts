import * as _stitches_react_types_styled_component from '@stitches/react/types/styled-component';
import * as _stitches_react_types_css_util from '@stitches/react/types/css-util';
import * as react from 'react';
import { ComponentProps, ElementType } from 'react';
import * as Avatar$1 from '@radix-ui/react-avatar';

declare const Box: _stitches_react_types_styled_component.StyledComponent<"div", {}, {}, _stitches_react_types_css_util.CSS<{}, {
    colors: {
        readonly white: "#FFF";
        readonly black: "#000";
        readonly teste: "#00000";
        readonly gray100: "#E1E1E6";
        readonly gray200: "#A9A9B2";
        readonly gray400: "#7C7C8A";
        readonly gray500: "#505059";
        readonly gray600: "#323238";
        readonly gray700: "#29292E";
        readonly gray800: "#202024";
        readonly gray900: "#121214";
        readonly ignite300: "#00B37E";
        readonly ignite500: "#00875F";
        readonly ignite700: "#015F43";
        readonly ignite900: "#00291D";
    };
    fontSizes: {
        readonly xxs: "0.625rem";
        readonly xs: "0.75rem";
        readonly sm: "0.875rem";
        readonly md: "1rem";
        readonly lg: "1.125rem";
        readonly xl: "1.25rem";
        readonly '2xl': "1.5rem";
        readonly '4xl': "2rem";
        readonly '5xl': "2.25rem";
        readonly '6xl': "3rem";
        readonly '7xl': "4rem";
        readonly '8xl': "4.5rem";
        readonly '9xl': "6rem";
    };
    fontWeights: {
        readonly regular: "400";
        readonly medium: "500";
        readonly bold: "700";
    };
    fonts: {
        readonly default: "Roboto, sans-serif";
        readonly code: "monospace";
    };
    lineHeights: {
        readonly shorter: "125%";
        readonly short: "140%";
        readonly base: "160%";
        readonly tall: "180%";
    };
    radii: {
        readonly px: "1px";
        readonly xs: "4px";
        readonly sm: "6px";
        readonly md: "8px";
        readonly lg: "16px";
        readonly full: "99999px";
    };
    space: {
        readonly 1: "0.25rem";
        readonly 2: "0.5rem";
        readonly 3: "0.75rem";
        readonly 4: "1rem";
        readonly 5: "1.25rem";
        readonly 6: "1.5rem";
        readonly 7: "1.75rem";
        readonly 8: "2rem";
        readonly 10: "2.5rem";
        readonly 12: "3rem";
        readonly 16: "4rem";
        readonly 20: "5rem";
        readonly 40: "10rem";
        readonly 64: "16rem";
        readonly 80: "20rem";
    };
}, {
    height: "space";
    width: "space";
    gap: "space";
    gridGap: "space";
    columnGap: "space";
    gridColumnGap: "space";
    rowGap: "space";
    gridRowGap: "space";
    inset: "space";
    insetBlock: "space";
    insetBlockEnd: "space";
    insetBlockStart: "space";
    insetInline: "space";
    insetInlineEnd: "space";
    insetInlineStart: "space";
    margin: "space";
    marginTop: "space";
    marginRight: "space";
    marginBottom: "space";
    marginLeft: "space";
    marginBlock: "space";
    marginBlockEnd: "space";
    marginBlockStart: "space";
    marginInline: "space";
    marginInlineEnd: "space";
    marginInlineStart: "space";
    padding: "space";
    paddingTop: "space";
    paddingRight: "space";
    paddingBottom: "space";
    paddingLeft: "space";
    paddingBlock: "space";
    paddingBlockEnd: "space";
    paddingBlockStart: "space";
    paddingInline: "space";
    paddingInlineEnd: "space";
    paddingInlineStart: "space";
    scrollMargin: "space";
    scrollMarginTop: "space";
    scrollMarginRight: "space";
    scrollMarginBottom: "space";
    scrollMarginLeft: "space";
    scrollMarginBlock: "space";
    scrollMarginBlockEnd: "space";
    scrollMarginBlockStart: "space";
    scrollMarginInline: "space";
    scrollMarginInlineEnd: "space";
    scrollMarginInlineStart: "space";
    scrollPadding: "space";
    scrollPaddingTop: "space";
    scrollPaddingRight: "space";
    scrollPaddingBottom: "space";
    scrollPaddingLeft: "space";
    scrollPaddingBlock: "space";
    scrollPaddingBlockEnd: "space";
    scrollPaddingBlockStart: "space";
    scrollPaddingInline: "space";
    scrollPaddingInlineEnd: "space";
    scrollPaddingInlineStart: "space";
    top: "space";
    right: "space";
    bottom: "space";
    left: "space";
    fontSize: "fontSizes";
    background: "colors";
    backgroundColor: "colors";
    backgroundImage: "colors";
    borderImage: "colors";
    border: "colors";
    borderBlock: "colors";
    borderBlockEnd: "colors";
    borderBlockStart: "colors";
    borderBottom: "colors";
    borderBottomColor: "colors";
    borderColor: "colors";
    borderInline: "colors";
    borderInlineEnd: "colors";
    borderInlineStart: "colors";
    borderLeft: "colors";
    borderLeftColor: "colors";
    borderRight: "colors";
    borderRightColor: "colors";
    borderTop: "colors";
    borderTopColor: "colors";
    caretColor: "colors";
    color: "colors";
    columnRuleColor: "colors";
    outline: "colors";
    outlineColor: "colors";
    fill: "colors";
    stroke: "colors";
    textDecorationColor: "colors";
    fontFamily: "fonts";
    fontWeight: "fontWeights";
    lineHeight: "lineHeights";
    letterSpacing: "letterSpacings";
    blockSize: "sizes";
    minBlockSize: "sizes";
    maxBlockSize: "sizes";
    inlineSize: "sizes";
    minInlineSize: "sizes";
    maxInlineSize: "sizes";
    minWidth: "sizes";
    maxWidth: "sizes";
    minHeight: "sizes";
    maxHeight: "sizes";
    flexBasis: "sizes";
    gridTemplateColumns: "sizes";
    gridTemplateRows: "sizes";
    borderWidth: "borderWidths";
    borderTopWidth: "borderWidths";
    borderLeftWidth: "borderWidths";
    borderRightWidth: "borderWidths";
    borderBottomWidth: "borderWidths";
    borderStyle: "borderStyles";
    borderTopStyle: "borderStyles";
    borderLeftStyle: "borderStyles";
    borderRightStyle: "borderStyles";
    borderBottomStyle: "borderStyles";
    borderRadius: "radii";
    borderTopLeftRadius: "radii";
    borderTopRightRadius: "radii";
    borderBottomRightRadius: "radii";
    borderBottomLeftRadius: "radii";
    boxShadow: "shadows";
    textShadow: "shadows";
    transition: "transitions";
    zIndex: "zIndices";
}, {}>>;
interface BoxProps extends ComponentProps<typeof Box> {
    as?: ElementType;
}

declare const Text: _stitches_react_types_styled_component.StyledComponent<"p", {
    size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
}, {}, _stitches_react_types_css_util.CSS<{}, {
    colors: {
        readonly white: "#FFF";
        readonly black: "#000";
        readonly teste: "#00000";
        readonly gray100: "#E1E1E6";
        readonly gray200: "#A9A9B2";
        readonly gray400: "#7C7C8A";
        readonly gray500: "#505059";
        readonly gray600: "#323238";
        readonly gray700: "#29292E";
        readonly gray800: "#202024";
        readonly gray900: "#121214";
        readonly ignite300: "#00B37E";
        readonly ignite500: "#00875F";
        readonly ignite700: "#015F43";
        readonly ignite900: "#00291D";
    };
    fontSizes: {
        readonly xxs: "0.625rem";
        readonly xs: "0.75rem";
        readonly sm: "0.875rem";
        readonly md: "1rem";
        readonly lg: "1.125rem";
        readonly xl: "1.25rem";
        readonly '2xl': "1.5rem";
        readonly '4xl': "2rem";
        readonly '5xl': "2.25rem";
        readonly '6xl': "3rem";
        readonly '7xl': "4rem";
        readonly '8xl': "4.5rem";
        readonly '9xl': "6rem";
    };
    fontWeights: {
        readonly regular: "400";
        readonly medium: "500";
        readonly bold: "700";
    };
    fonts: {
        readonly default: "Roboto, sans-serif";
        readonly code: "monospace";
    };
    lineHeights: {
        readonly shorter: "125%";
        readonly short: "140%";
        readonly base: "160%";
        readonly tall: "180%";
    };
    radii: {
        readonly px: "1px";
        readonly xs: "4px";
        readonly sm: "6px";
        readonly md: "8px";
        readonly lg: "16px";
        readonly full: "99999px";
    };
    space: {
        readonly 1: "0.25rem";
        readonly 2: "0.5rem";
        readonly 3: "0.75rem";
        readonly 4: "1rem";
        readonly 5: "1.25rem";
        readonly 6: "1.5rem";
        readonly 7: "1.75rem";
        readonly 8: "2rem";
        readonly 10: "2.5rem";
        readonly 12: "3rem";
        readonly 16: "4rem";
        readonly 20: "5rem";
        readonly 40: "10rem";
        readonly 64: "16rem";
        readonly 80: "20rem";
    };
}, {
    height: "space";
    width: "space";
    gap: "space";
    gridGap: "space";
    columnGap: "space";
    gridColumnGap: "space";
    rowGap: "space";
    gridRowGap: "space";
    inset: "space";
    insetBlock: "space";
    insetBlockEnd: "space";
    insetBlockStart: "space";
    insetInline: "space";
    insetInlineEnd: "space";
    insetInlineStart: "space";
    margin: "space";
    marginTop: "space";
    marginRight: "space";
    marginBottom: "space";
    marginLeft: "space";
    marginBlock: "space";
    marginBlockEnd: "space";
    marginBlockStart: "space";
    marginInline: "space";
    marginInlineEnd: "space";
    marginInlineStart: "space";
    padding: "space";
    paddingTop: "space";
    paddingRight: "space";
    paddingBottom: "space";
    paddingLeft: "space";
    paddingBlock: "space";
    paddingBlockEnd: "space";
    paddingBlockStart: "space";
    paddingInline: "space";
    paddingInlineEnd: "space";
    paddingInlineStart: "space";
    scrollMargin: "space";
    scrollMarginTop: "space";
    scrollMarginRight: "space";
    scrollMarginBottom: "space";
    scrollMarginLeft: "space";
    scrollMarginBlock: "space";
    scrollMarginBlockEnd: "space";
    scrollMarginBlockStart: "space";
    scrollMarginInline: "space";
    scrollMarginInlineEnd: "space";
    scrollMarginInlineStart: "space";
    scrollPadding: "space";
    scrollPaddingTop: "space";
    scrollPaddingRight: "space";
    scrollPaddingBottom: "space";
    scrollPaddingLeft: "space";
    scrollPaddingBlock: "space";
    scrollPaddingBlockEnd: "space";
    scrollPaddingBlockStart: "space";
    scrollPaddingInline: "space";
    scrollPaddingInlineEnd: "space";
    scrollPaddingInlineStart: "space";
    top: "space";
    right: "space";
    bottom: "space";
    left: "space";
    fontSize: "fontSizes";
    background: "colors";
    backgroundColor: "colors";
    backgroundImage: "colors";
    borderImage: "colors";
    border: "colors";
    borderBlock: "colors";
    borderBlockEnd: "colors";
    borderBlockStart: "colors";
    borderBottom: "colors";
    borderBottomColor: "colors";
    borderColor: "colors";
    borderInline: "colors";
    borderInlineEnd: "colors";
    borderInlineStart: "colors";
    borderLeft: "colors";
    borderLeftColor: "colors";
    borderRight: "colors";
    borderRightColor: "colors";
    borderTop: "colors";
    borderTopColor: "colors";
    caretColor: "colors";
    color: "colors";
    columnRuleColor: "colors";
    outline: "colors";
    outlineColor: "colors";
    fill: "colors";
    stroke: "colors";
    textDecorationColor: "colors";
    fontFamily: "fonts";
    fontWeight: "fontWeights";
    lineHeight: "lineHeights";
    letterSpacing: "letterSpacings";
    blockSize: "sizes";
    minBlockSize: "sizes";
    maxBlockSize: "sizes";
    inlineSize: "sizes";
    minInlineSize: "sizes";
    maxInlineSize: "sizes";
    minWidth: "sizes";
    maxWidth: "sizes";
    minHeight: "sizes";
    maxHeight: "sizes";
    flexBasis: "sizes";
    gridTemplateColumns: "sizes";
    gridTemplateRows: "sizes";
    borderWidth: "borderWidths";
    borderTopWidth: "borderWidths";
    borderLeftWidth: "borderWidths";
    borderRightWidth: "borderWidths";
    borderBottomWidth: "borderWidths";
    borderStyle: "borderStyles";
    borderTopStyle: "borderStyles";
    borderLeftStyle: "borderStyles";
    borderRightStyle: "borderStyles";
    borderBottomStyle: "borderStyles";
    borderRadius: "radii";
    borderTopLeftRadius: "radii";
    borderTopRightRadius: "radii";
    borderBottomRightRadius: "radii";
    borderBottomLeftRadius: "radii";
    boxShadow: "shadows";
    textShadow: "shadows";
    transition: "transitions";
    zIndex: "zIndices";
}, {}>>;
interface TextProps extends ComponentProps<typeof Text> {
    as?: ElementType;
}

declare const Heading: _stitches_react_types_styled_component.StyledComponent<"h2", {
    size?: "sm" | "md" | "lg" | "2xl" | "4xl" | "5xl" | "6xl" | "3xl" | undefined;
}, {}, _stitches_react_types_css_util.CSS<{}, {
    colors: {
        readonly white: "#FFF";
        readonly black: "#000";
        readonly teste: "#00000";
        readonly gray100: "#E1E1E6";
        readonly gray200: "#A9A9B2";
        readonly gray400: "#7C7C8A";
        readonly gray500: "#505059";
        readonly gray600: "#323238";
        readonly gray700: "#29292E";
        readonly gray800: "#202024";
        readonly gray900: "#121214";
        readonly ignite300: "#00B37E";
        readonly ignite500: "#00875F";
        readonly ignite700: "#015F43";
        readonly ignite900: "#00291D";
    };
    fontSizes: {
        readonly xxs: "0.625rem";
        readonly xs: "0.75rem";
        readonly sm: "0.875rem";
        readonly md: "1rem";
        readonly lg: "1.125rem";
        readonly xl: "1.25rem";
        readonly '2xl': "1.5rem";
        readonly '4xl': "2rem";
        readonly '5xl': "2.25rem";
        readonly '6xl': "3rem";
        readonly '7xl': "4rem";
        readonly '8xl': "4.5rem";
        readonly '9xl': "6rem";
    };
    fontWeights: {
        readonly regular: "400";
        readonly medium: "500";
        readonly bold: "700";
    };
    fonts: {
        readonly default: "Roboto, sans-serif";
        readonly code: "monospace";
    };
    lineHeights: {
        readonly shorter: "125%";
        readonly short: "140%";
        readonly base: "160%";
        readonly tall: "180%";
    };
    radii: {
        readonly px: "1px";
        readonly xs: "4px";
        readonly sm: "6px";
        readonly md: "8px";
        readonly lg: "16px";
        readonly full: "99999px";
    };
    space: {
        readonly 1: "0.25rem";
        readonly 2: "0.5rem";
        readonly 3: "0.75rem";
        readonly 4: "1rem";
        readonly 5: "1.25rem";
        readonly 6: "1.5rem";
        readonly 7: "1.75rem";
        readonly 8: "2rem";
        readonly 10: "2.5rem";
        readonly 12: "3rem";
        readonly 16: "4rem";
        readonly 20: "5rem";
        readonly 40: "10rem";
        readonly 64: "16rem";
        readonly 80: "20rem";
    };
}, {
    height: "space";
    width: "space";
    gap: "space";
    gridGap: "space";
    columnGap: "space";
    gridColumnGap: "space";
    rowGap: "space";
    gridRowGap: "space";
    inset: "space";
    insetBlock: "space";
    insetBlockEnd: "space";
    insetBlockStart: "space";
    insetInline: "space";
    insetInlineEnd: "space";
    insetInlineStart: "space";
    margin: "space";
    marginTop: "space";
    marginRight: "space";
    marginBottom: "space";
    marginLeft: "space";
    marginBlock: "space";
    marginBlockEnd: "space";
    marginBlockStart: "space";
    marginInline: "space";
    marginInlineEnd: "space";
    marginInlineStart: "space";
    padding: "space";
    paddingTop: "space";
    paddingRight: "space";
    paddingBottom: "space";
    paddingLeft: "space";
    paddingBlock: "space";
    paddingBlockEnd: "space";
    paddingBlockStart: "space";
    paddingInline: "space";
    paddingInlineEnd: "space";
    paddingInlineStart: "space";
    scrollMargin: "space";
    scrollMarginTop: "space";
    scrollMarginRight: "space";
    scrollMarginBottom: "space";
    scrollMarginLeft: "space";
    scrollMarginBlock: "space";
    scrollMarginBlockEnd: "space";
    scrollMarginBlockStart: "space";
    scrollMarginInline: "space";
    scrollMarginInlineEnd: "space";
    scrollMarginInlineStart: "space";
    scrollPadding: "space";
    scrollPaddingTop: "space";
    scrollPaddingRight: "space";
    scrollPaddingBottom: "space";
    scrollPaddingLeft: "space";
    scrollPaddingBlock: "space";
    scrollPaddingBlockEnd: "space";
    scrollPaddingBlockStart: "space";
    scrollPaddingInline: "space";
    scrollPaddingInlineEnd: "space";
    scrollPaddingInlineStart: "space";
    top: "space";
    right: "space";
    bottom: "space";
    left: "space";
    fontSize: "fontSizes";
    background: "colors";
    backgroundColor: "colors";
    backgroundImage: "colors";
    borderImage: "colors";
    border: "colors";
    borderBlock: "colors";
    borderBlockEnd: "colors";
    borderBlockStart: "colors";
    borderBottom: "colors";
    borderBottomColor: "colors";
    borderColor: "colors";
    borderInline: "colors";
    borderInlineEnd: "colors";
    borderInlineStart: "colors";
    borderLeft: "colors";
    borderLeftColor: "colors";
    borderRight: "colors";
    borderRightColor: "colors";
    borderTop: "colors";
    borderTopColor: "colors";
    caretColor: "colors";
    color: "colors";
    columnRuleColor: "colors";
    outline: "colors";
    outlineColor: "colors";
    fill: "colors";
    stroke: "colors";
    textDecorationColor: "colors";
    fontFamily: "fonts";
    fontWeight: "fontWeights";
    lineHeight: "lineHeights";
    letterSpacing: "letterSpacings";
    blockSize: "sizes";
    minBlockSize: "sizes";
    maxBlockSize: "sizes";
    inlineSize: "sizes";
    minInlineSize: "sizes";
    maxInlineSize: "sizes";
    minWidth: "sizes";
    maxWidth: "sizes";
    minHeight: "sizes";
    maxHeight: "sizes";
    flexBasis: "sizes";
    gridTemplateColumns: "sizes";
    gridTemplateRows: "sizes";
    borderWidth: "borderWidths";
    borderTopWidth: "borderWidths";
    borderLeftWidth: "borderWidths";
    borderRightWidth: "borderWidths";
    borderBottomWidth: "borderWidths";
    borderStyle: "borderStyles";
    borderTopStyle: "borderStyles";
    borderLeftStyle: "borderStyles";
    borderRightStyle: "borderStyles";
    borderBottomStyle: "borderStyles";
    borderRadius: "radii";
    borderTopLeftRadius: "radii";
    borderTopRightRadius: "radii";
    borderBottomRightRadius: "radii";
    borderBottomLeftRadius: "radii";
    boxShadow: "shadows";
    textShadow: "shadows";
    transition: "transitions";
    zIndex: "zIndices";
}, {}>>;
interface HeadingProps extends ComponentProps<typeof Heading> {
    as?: ElementType;
}

declare const AvatarImage: _stitches_react_types_styled_component.StyledComponent<react.ForwardRefExoticComponent<Avatar$1.AvatarImageProps & react.RefAttributes<HTMLImageElement>>, {}, {}, _stitches_react_types_css_util.CSS<{}, {
    colors: {
        readonly white: "#FFF";
        readonly black: "#000";
        readonly teste: "#00000";
        readonly gray100: "#E1E1E6";
        readonly gray200: "#A9A9B2";
        readonly gray400: "#7C7C8A";
        readonly gray500: "#505059";
        readonly gray600: "#323238";
        readonly gray700: "#29292E";
        readonly gray800: "#202024";
        readonly gray900: "#121214";
        readonly ignite300: "#00B37E";
        readonly ignite500: "#00875F";
        readonly ignite700: "#015F43";
        readonly ignite900: "#00291D";
    };
    fontSizes: {
        readonly xxs: "0.625rem";
        readonly xs: "0.75rem";
        readonly sm: "0.875rem";
        readonly md: "1rem";
        readonly lg: "1.125rem";
        readonly xl: "1.25rem";
        readonly '2xl': "1.5rem";
        readonly '4xl': "2rem";
        readonly '5xl': "2.25rem";
        readonly '6xl': "3rem";
        readonly '7xl': "4rem";
        readonly '8xl': "4.5rem";
        readonly '9xl': "6rem";
    };
    fontWeights: {
        readonly regular: "400";
        readonly medium: "500";
        readonly bold: "700";
    };
    fonts: {
        readonly default: "Roboto, sans-serif";
        readonly code: "monospace";
    };
    lineHeights: {
        readonly shorter: "125%";
        readonly short: "140%";
        readonly base: "160%";
        readonly tall: "180%";
    };
    radii: {
        readonly px: "1px";
        readonly xs: "4px";
        readonly sm: "6px";
        readonly md: "8px";
        readonly lg: "16px";
        readonly full: "99999px";
    };
    space: {
        readonly 1: "0.25rem";
        readonly 2: "0.5rem";
        readonly 3: "0.75rem";
        readonly 4: "1rem";
        readonly 5: "1.25rem";
        readonly 6: "1.5rem";
        readonly 7: "1.75rem";
        readonly 8: "2rem";
        readonly 10: "2.5rem";
        readonly 12: "3rem";
        readonly 16: "4rem";
        readonly 20: "5rem";
        readonly 40: "10rem";
        readonly 64: "16rem";
        readonly 80: "20rem";
    };
}, {
    height: "space";
    width: "space";
    gap: "space";
    gridGap: "space";
    columnGap: "space";
    gridColumnGap: "space";
    rowGap: "space";
    gridRowGap: "space";
    inset: "space";
    insetBlock: "space";
    insetBlockEnd: "space";
    insetBlockStart: "space";
    insetInline: "space";
    insetInlineEnd: "space";
    insetInlineStart: "space";
    margin: "space";
    marginTop: "space";
    marginRight: "space";
    marginBottom: "space";
    marginLeft: "space";
    marginBlock: "space";
    marginBlockEnd: "space";
    marginBlockStart: "space";
    marginInline: "space";
    marginInlineEnd: "space";
    marginInlineStart: "space";
    padding: "space";
    paddingTop: "space";
    paddingRight: "space";
    paddingBottom: "space";
    paddingLeft: "space";
    paddingBlock: "space";
    paddingBlockEnd: "space";
    paddingBlockStart: "space";
    paddingInline: "space";
    paddingInlineEnd: "space";
    paddingInlineStart: "space";
    scrollMargin: "space";
    scrollMarginTop: "space";
    scrollMarginRight: "space";
    scrollMarginBottom: "space";
    scrollMarginLeft: "space";
    scrollMarginBlock: "space";
    scrollMarginBlockEnd: "space";
    scrollMarginBlockStart: "space";
    scrollMarginInline: "space";
    scrollMarginInlineEnd: "space";
    scrollMarginInlineStart: "space";
    scrollPadding: "space";
    scrollPaddingTop: "space";
    scrollPaddingRight: "space";
    scrollPaddingBottom: "space";
    scrollPaddingLeft: "space";
    scrollPaddingBlock: "space";
    scrollPaddingBlockEnd: "space";
    scrollPaddingBlockStart: "space";
    scrollPaddingInline: "space";
    scrollPaddingInlineEnd: "space";
    scrollPaddingInlineStart: "space";
    top: "space";
    right: "space";
    bottom: "space";
    left: "space";
    fontSize: "fontSizes";
    background: "colors";
    backgroundColor: "colors";
    backgroundImage: "colors";
    borderImage: "colors";
    border: "colors";
    borderBlock: "colors";
    borderBlockEnd: "colors";
    borderBlockStart: "colors";
    borderBottom: "colors";
    borderBottomColor: "colors";
    borderColor: "colors";
    borderInline: "colors";
    borderInlineEnd: "colors";
    borderInlineStart: "colors";
    borderLeft: "colors";
    borderLeftColor: "colors";
    borderRight: "colors";
    borderRightColor: "colors";
    borderTop: "colors";
    borderTopColor: "colors";
    caretColor: "colors";
    color: "colors";
    columnRuleColor: "colors";
    outline: "colors";
    outlineColor: "colors";
    fill: "colors";
    stroke: "colors";
    textDecorationColor: "colors";
    fontFamily: "fonts";
    fontWeight: "fontWeights";
    lineHeight: "lineHeights";
    letterSpacing: "letterSpacings";
    blockSize: "sizes";
    minBlockSize: "sizes";
    maxBlockSize: "sizes";
    inlineSize: "sizes";
    minInlineSize: "sizes";
    maxInlineSize: "sizes";
    minWidth: "sizes";
    maxWidth: "sizes";
    minHeight: "sizes";
    maxHeight: "sizes";
    flexBasis: "sizes";
    gridTemplateColumns: "sizes";
    gridTemplateRows: "sizes";
    borderWidth: "borderWidths";
    borderTopWidth: "borderWidths";
    borderLeftWidth: "borderWidths";
    borderRightWidth: "borderWidths";
    borderBottomWidth: "borderWidths";
    borderStyle: "borderStyles";
    borderTopStyle: "borderStyles";
    borderLeftStyle: "borderStyles";
    borderRightStyle: "borderStyles";
    borderBottomStyle: "borderStyles";
    borderRadius: "radii";
    borderTopLeftRadius: "radii";
    borderTopRightRadius: "radii";
    borderBottomRightRadius: "radii";
    borderBottomLeftRadius: "radii";
    boxShadow: "shadows";
    textShadow: "shadows";
    transition: "transitions";
    zIndex: "zIndices";
}, {}>>;

interface AvatarProps extends ComponentProps<typeof AvatarImage> {
}
declare function Avatar(props: AvatarProps): JSX.Element;

export { Avatar, AvatarProps, Box, BoxProps, Heading, HeadingProps, Text, TextProps };
