/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Stations } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type StationsUpdateFormInputValues = {
    name?: string;
};
export declare type StationsUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StationsUpdateFormOverridesProps = {
    StationsUpdateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StationsUpdateFormProps = React.PropsWithChildren<{
    overrides?: StationsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    stations?: Stations;
    onSubmit?: (fields: StationsUpdateFormInputValues) => StationsUpdateFormInputValues;
    onSuccess?: (fields: StationsUpdateFormInputValues) => void;
    onError?: (fields: StationsUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: StationsUpdateFormInputValues) => StationsUpdateFormInputValues;
    onValidate?: StationsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function StationsUpdateForm(props: StationsUpdateFormProps): React.ReactElement;
