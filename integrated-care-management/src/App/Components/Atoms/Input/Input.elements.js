// Import: Dependencies
import styled from "styled-components"

// Element: InputWrapper
export const InputWrapper = styled.div`
    box-sizing: border-box;
    align-items: center;
    ${(props) => props.theme.colors.global.inputBorder};
    ${(props) => props.theme.colors.global.inputBorderRadius};
    ${(props) => props.noBorderRadiusRight && 'border-top-right-radius: 0; border-bottom-right-radius: 0;'};
    ${(props) => props.noBorderRadiusLeft && 'border-top-left-radius: 0; border-bottom-left-radius: 0;'};
    display: flex;
    flex-direction: row;
    background-color: ${({ disabled, theme }) =>
        disabled ? theme.colors.global.textDisabled : theme.colors.global.backgroundPrimary};
    width: ${({ width }) => (width ? width : '100%')};
    height: 35px;
    position: relative;
    border: ${({ errorStatus }) => errorStatus && '1px red solid'};

    &:hover {
        box-shadow: 0 0 5px ${(props) => props.theme.colors.formComponents.inputBoxHover};
        transition: all 100ms linear;
    }
`

export const InputLabelWrapper = styled.div`
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '300px')};
    width: ${({ width }) => (width ? width : '100%')};
`


// Element: InputField
export const InputField = styled.input`
    display: ${({ disabled, pain }) => disabled && pain && 'none'};
    maxlength: ${({ maxLength }) => (maxLength ? maxLength : null)};
    box-sizing: border-box;
    -webkit-appearance: none;
    appearance: none;
    background-color: ${({ disabled, theme }) =>
        disabled ? theme.colors.global.textDisabled : theme.colors.global.backgroundPrimary};
    border: none;
    border-radius: 5px;
    color: ${(props) => props.theme.colors.global.newUIValue};
    font-family: SF-Pro-Display;
    font-size: 1rem;
    padding: ${(props) => (props.padding ? props.padding : '0 10px')};
    ${(props) => props.showClearButton && 'padding: 0 30px 0 14px;'}
    transition: all 100ms linear;
    -webkit-user-select: auto;
    -khtml-user-select: auto;
    -moz-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
    ${(props) => props.hideTextCursor && 'caret-color: transparent;'};

    width: ${({ width }) => (width ? `calc(${width} - 2px)` : '100%')};
    outline: 0;
    ::-webkit-input-placeholder {
        font-weight: 400;
        color: ${({ placeholderColor }) => (placeholderColor ? placeholderColor : 'lightgrey')};
    }
    ::-moz-placeholder {
        font-weight: 400;
        color: ${({ placeholderColor }) => (placeholderColor ? placeholderColor : 'lightgrey')};
    }
    :-ms-input-placeholder {
        font-weight: 400;
        color: ${({ placeholderColor }) => (placeholderColor ? placeholderColor : 'lightgrey')};
    }
    :-moz-placeholder {
        font-weight: 400;
        color: ${({ placeholderColor }) => (placeholderColor ? placeholderColor : 'lightgrey')};
    }

    /* Input type="password" */
    &[type='password'] {
        color: ${(props) => props.theme.colors.global.newUIValue};
        transition: all 100ms linear;
    }
    /* Input type="number" */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        appearance: none;
        margin: 0;
    }

    &[type='number'] {
        -moz-appearance: textfield;
        -webkit-appearance: textfield;
        appearance: textfield;
        color: ${(props) => props.theme.colors.global.newUIValue};

        /* cursor: pointer; */
        font-weight: 400;
        transition: all 100ms linear;
        maxlength: ${({ maxLength }) => (maxLength ? maxLength : null)};
    }
`

export const ValidationError = styled.div`
    position: block;
    margin: ${({ validationMargin }) => (validationMargin ? validationMargin : '5px 0 0 0')};
    & p {
        color: 'red';
    }`