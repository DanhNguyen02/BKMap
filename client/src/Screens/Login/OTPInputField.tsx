import React, {useRef, useState, useEffect} from "react";
import styled from "styled-components/native";

export const OTPInputSection = styled.View`
  justify-content: center;
  align-items: center;
  margin-vertical: 30px;
`;

export const HiddenTextInput = styled.TextInput`

position: absolute;
width: 1px;
height: 1px;
opacity: 0;
`;
// border-color: yellow;
// border-width: 2px;
// padding: 12px;
// margin-top: 15px;
// width: 300px;
// color: black;

export const OTPInputContainer = styled.Pressable`
  width: 70%;
  justify-content: space-around;
  flex-direction: row;
`;

export const OTPInput = styled.View`
  min-width: 15%;
  border-width: 2px;
  padding: 12px;
  background-color: gray;
`;

export const OTPText = styled.Text`
  font-size: 22px;
  text-align: center;
  font-weight: bold;
  color: black;
`;

export const OTPInputFocused = styled(OTPInput)`
  border-color: blue;
  background-color: purple;
`;

const OTPInputField = ({ setPinReady, code, setCode, maxLength }) => {
    const codeDigitsArray = new Array(maxLength).fill(0);
    const textInputRef = useRef(null);
    const [inputContainerIsFocused, setInputContainerIsFocused] = useState(false);

    const handleOnPress = () => {
        setInputContainerIsFocused(true);
        textInputRef?.current?.focus();
    };
    const handleOnBlur = () => {
        setInputContainerIsFocused(false);
    };

    useEffect(() => {
      setPinReady(code.length === maxLength);
      return () => setPinReady(false);
    }, [code]);
    const toCodeDigitInput = (_value, index) => {
        const emptyInputChar = " ";
        const digit = code[index] || emptyInputChar;
        const isCurrentDigit = index === code.length;
        const isLastDigit = index === maxLength - 1;
        const isCodeFull = code.length === maxLength;
        const isDigitFocused = isCurrentDigit || (isLastDigit && isCodeFull);
        const StyledOTPInput = inputContainerIsFocused && isDigitFocused ? OTPInputFocused : OTPInput;

        
        return(
            <StyledOTPInput key={index}>
                <OTPText>{digit}</OTPText>
            </StyledOTPInput>
        );
    };
  return (
    <OTPInputSection>
        <OTPInputContainer onPress={handleOnPress}>
            {codeDigitsArray.map(toCodeDigitInput)}
        </OTPInputContainer>

        <HiddenTextInput 
        maxLength={maxLength}
        value={code}
        onChangeText={setCode}
        keyboardType="number-pad"
        returnKeyType="done"
        textContentType="oneTimeCode"
        ref={textInputRef}
        onBlur={handleOnBlur}/>
    </OTPInputSection>
  )
}

export default OTPInputField;