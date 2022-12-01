/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type StationsCreateFormInputValues = {
    name?: string;
};
export declare type StationsCreateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StationsCreateFormOverridesProps = {
    StationsCreateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StationsCreateFormProps = React.PropsWithChildren<{
    overrides?: StationsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: StationsCreateFormInputValues) => StationsCreateFormInputValues;
    onSuccess?: (fields: StationsCreateFormInputValues) => void;
    onError?: (fields: StationsCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: StationsCreateFormInputValues) => StationsCreateFormInputValues;
    onValidate?: StationsCreateFormValidationValues;
} & React.CSSProperties>;
export default function StationsCreateForm(props: StationsCreateFormProps): React.ReactElement;
