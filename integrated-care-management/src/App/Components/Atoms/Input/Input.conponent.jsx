//Import: Dependencies
import React from 'react'

//Import: Elements
import {
    InputField,
    InputLabelWrapper,
    InputWrapper,
    ValidationError,
} from './Input.elements'

import Text from './../Text/Text.component'



/**
 * ====== OPTIONAL PROPS ======
 *
 * defaultValue = String or number
 *
 * labelText = String, input label that will be displayed
 *
 * htmlFor = String, Will represent the Id, name and htmlFor properties
 *
 * onChange = function that will be invoked on change event
 *
 * onKeyDown = function that will be invoked on KeyDown event
 *
 * onPaste = function that will be invoked on Paste event
 * onBlur = function that will be invoked on Blur event
 *
 * ref = ref that can be passed
 *
 * type = input type
 *
 * inputMode = similar to type but still allows other data types like text. defaults device onscreen keyboard
 *
 * readOnly = Boolean
 *
 * maxLen = Number, this will limit number of characters
 *
 * min = number or Date, represents the min value accepted
 *
 * max = number or Date, represents the max value accepted
 *
 * step = number, represents the minium amount of unit to change the value
 *
 * isDisabled = boolean
 *
 * color = string to be passed to the Text component
 *
 * wrapperClass = string to be passed to override InputLabelWrapper styling
 *
 * wrapperStyle = inline style to be passed to override InputLabelWrapper styling
 *
 * inputClass = string to be passed to override InputField styling
 *
 * inputStyle = inline style to be passed to override InputField styling
 *
 * autoComplete = Boolean that enables/disables auto suggestions. Disabled by default
 *
 */

export const InputBox = React.forwardRef((props, ref) => {
    function clickFunction(e) {
        if (props.onClick) {
            props.onClick(e)
        }
    }

    function blurFunction(e) {
        if (props.onBlur) {
            props.onBlur(e)
        }
    }

    return (
        <div style={props.divStyle}>
            <InputLabelWrapper
                style={props.wrapperStyle}
                className={props.wrapperClass}
                width={props.width}
                maxWidth={props.maxWidth}>
                {props.secondaryText ? (
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '0.25rem' }}>
                        {props.labelText && (
                            <Text
                                tabIndex="-1"
                                htmlFor={props.htmlFor}
                                color={props.color || 'grey'}
                                type={props.labelType || 'labelS'}
                                style={props.style}>
                                {props.labelText}
                                {props.isMandatory}
                            </Text>
                        )}
                        {props.secondaryText && (
                            <div type={props.secondaryTextType} color={props.secondaryTextColor || 'grey'}>
                                {props.secondaryText}
                            </div>
                        )}
                    </div>
                ) : (
                    props.labelText && (
                        <Text
                            tabIndex="-1"
                            htmlFor={props.htmlFor}
                            color={props.color || 'grey'}
                            type={props.labelType || 'labelS'}
                            style={props.style}>
                            {props.labelText}
                            {props.isMandatory}
                        </Text>
                    )
                )}

                <InputWrapper
                    noBorderRadiusRight={props.noBorderRadiusRight}
                    noBorderRadiusLeft={props.noBorderRadiusLeft}
                    errorStatus={props.errorStatus}
                    disabled={props.isDisabled}>
                    <InputField
                        // "new-password" is used instead instead of "off" since that doesn't seem to work and is a know issue with chromium
                        autoComplete={props.autoComplete ? 'on' : 'new-password'}
                        defaultValue={props.defaultValue}
                        id={props.htmlFor || props.id}
                        name={props.htmlFor}
                        pain={props.pain}
                        onChange={props.onChange}
                        onKeyDown={props.onKeyDown}
                        width={props.width}
                        onPaste={props.onPaste}
                        onBlur={blurFunction}
                        onClick={clickFunction}
                        onInput={props.onInput}
                        placeholder={props.placeholder}
                        ref={ref}
                        type={props.type ? props.type : 'text'}
                        inputMode={props.inputMode}
                        value={props.value}
                        readOnly={props.readOnly}
                        maxLength={props.maxLen}
                        min={props.min}
                        max={props.max}
                        step={props.step}
                        disabled={props.isDisabled}
                        className={props.inputClass}
                        inputStyle={props.inputStyle}
                        hideTextCursor={props.hideTextCursor}
                        padding={props.padding}
                        showClearButton={props.showClearButton}
                        placeholderColor={props.placeholderColor}
                    />
                </InputWrapper>
            </InputLabelWrapper>
            {props.errorStatus && props.errorText && (
                <ValidationError>
                    <Text color="red">{props.errorText}</Text>
                </ValidationError>
            )}
        </div>
    )
})
