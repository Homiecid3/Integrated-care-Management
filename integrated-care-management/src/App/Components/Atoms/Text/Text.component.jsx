// Import: Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// Import: Elements
import {
    StyledLargeLabel,
    PseudoLargeLabel,
    StyledSmallLabel,
    PseudoSmallLabel,
    StyledH1,
    StyledH2,
    StyledH3,
    StyledH4,
    StyledH5,
    StyledSmallSpan,
    NavSmallSpan,
    StyledParagraph,
    SmallBlueText,
    NavP,
    PatientName,
    photoLabel,
    CardText,
} from './Text.elements'

// Component: Text

/**
 * ====== OPTIONAL PROPS ======
 *
 * isBold = boolean
 *
 * type = string, the values accepted are
 * h1, h2, h3, h4, h5, h6, labelL, labelS, p, span
 * The default type is p
 *
 * className = string to be passed as class, it can override the default styling
 *
 * style = object containing inline styling, it can override the default styling
 *
 * color = string, the values accepted are orange, darkgreen, lightgreen, purple
 * The default color is black
 *
 *
 */
export default function Text({
    healthConditionName,
    isBold,
    cursorPointer,
    underLine,
    type,
    className,
    style,
    color,
    htmlFor,
    marginBottom,
    fontWeight,
    fontSize,
    border,
    display,
    marginLeft,
    backgroundColor,
    onClick,
    dataAttr,
    ...props
}) {
    switch (type) {
        case 'h1':
            return (
                <StyledH1
                    display={display}
                    marginLeft={marginLeft}
                    isBold={isBold}
                    color={color}
                    className={className}
                    style={style}
                    backgroundColor={backgroundColor}>
                    {props.children}
                </StyledH1>
            )
        case 'h2':
            return (
                <StyledH2
                    data-attr={dataAttr}
                    onClick={onClick}
                    isBold={isBold}
                    color={color}
                    className={className}
                    style={style}>
                    {props.children}
                </StyledH2>
            )
        case 'h3':
            return (
                <StyledH3 isBold={isBold} color={color} className={className} style={style} fontSize={fontSize}>
                    {props.children}
                </StyledH3>
            )
        case 'h4':
            return (
                <StyledH4
                    underLine={underLine}
                    cursorPointer={cursorPointer}
                    isBold={isBold}
                    color={color}
                    className={className}
                    style={style}>
                    {props.children}
                </StyledH4>
            )
        case 'h5':
            return (
                <StyledH5 isBold={isBold} color={color} className={className} style={style}>
                    {props.children}
                </StyledH5>
            )
        case 'h6':
            return (
                <h6 isBold={isBold} color={color} className={className} style={style}>
                    {props.children}
                </h6>
            )
        case 'labelL':
            return (
                <StyledLargeLabel isBold={isBold} color={color} className={className} style={style} htmlFor={htmlFor}>
                    {props.children}
                </StyledLargeLabel>
            )
        case 'pseudolabelL':
            return (
                <PseudoLargeLabel isBold={isBold} color={color} className={className} style={style} htmlFor={htmlFor}>
                    {props.children}
                </PseudoLargeLabel>
            )
        case 'labelS':
            return (
                <StyledSmallLabel isBold={isBold} color={color} className={className} style={style} htmlFor={htmlFor}>
                    {props.children}{' '}
                </StyledSmallLabel>
            )
        case 'pseudolabelS':
            return (
                <PseudoSmallLabel isBold={isBold} color={color} className={className} style={style} htmlFor={htmlFor}>
                    {props.children}
                </PseudoSmallLabel>
            )
        case 'p':
            return (
                <StyledParagraph
                    border={border}
                    fontWeight={fontWeight}
                    isBold={isBold}
                    color={color}
                    className={className}
                    style={style}>
                    {props.children}
                </StyledParagraph>
            )
        case 'span':
            return (
                <StyledSmallSpan
                    marginLeft={marginLeft}
                    display={display}
                    fontWeight={fontWeight}
                    healthConditionName={healthConditionName}
                    isBold={isBold}
                    color={color}
                    className={className}
                    style={style}>
                    {props.children}
                </StyledSmallSpan>
            )
        case 'navSpan':
            return (
                <NavSmallSpan isBold={isBold} color={color} className={className} style={style}>
                    {props.children}
                </NavSmallSpan>
            )
        case 'smallBlueText':
            return (
                <SmallBlueText isBold={isBold} color={'brightblue'} className={className} style={style}>
                    {props.children}
                </SmallBlueText>
            )
        case 'patientName':
            return (
                <PatientName isBold={isBold} color={color} className={className} style={style}>
                    {props.children}
                </PatientName>
            )
        case 'navP':
            return (
                <NavP isBold={isBold} color={color} className={className} style={style}>
                    {props.children}
                </NavP>
            )
        case 'cardText':
            return (
                <CardText isBold={isBold} color={color} className={className} style={style}>
                    {props.children}
                </CardText>
            )
        case 'photoLabel':
            return (
                <photoLabel
                    fontWeight={fontWeight}
                    healthConditionName={healthConditionName}
                    isBold={isBold}
                    color={color}
                    className={className}
                    style={style}>
                    {props.children}
                </photoLabel>
            )

        // case "subtitle":
        //   return (
        //     <subtitle
        //       isBold={isBold}
        //       color={color}
        //       className={className}
        //       style={style }
        //     >
        //       subtitle 1
        //     </subtitle>
        //   );
        // case "subtitle2":
        //   return (
        //     <subtitle
        //       isBold={isBold}
        //       color={color}
        //       className={className}
        //       style={style }
        //     >
        //       subtitle2 1
        //     </subtitle>
        //   );

        default:
            return (
                <StyledParagraph isBold={isBold} color={color} className={className} style={style}>
                    {props.children}
                </StyledParagraph>
            )
    }
}
