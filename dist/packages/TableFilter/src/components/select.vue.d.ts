declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
        default: () => never[];
    };
    customAttrs: {
        type: ObjectConstructor;
        default: () => {};
    };
    options: {
        type: ArrayConstructor;
        default: () => never[];
    };
    optionsRquest: {
        type: FunctionConstructor;
        default: null;
    };
    optionsParams: {
        type: ArrayConstructor;
        default: () => never[];
    };
    submitFileds: {
        type: ObjectConstructor;
        default: () => {};
    };
    isFixedDefault: {
        type: BooleanConstructor;
        default: boolean;
    };
    defaultValue: {
        type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
        default: null;
    };
    isImdateRequest: {
        type: BooleanConstructor;
        default: boolean;
    };
    isInData: {
        type: BooleanConstructor;
        default: boolean;
    };
    isShowAll: {
        type: BooleanConstructor;
        default: boolean;
    };
    dataFiled: {
        type: StringConstructor;
        default: string;
    };
    isDefault0: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    props: any;
    emits: (event: "update:modelValue" | "search", ...args: any[]) => void;
    onUpdate: (val: any) => void;
    filterOption: (input: string, option: Record<string, any>) => boolean;
    onChange: () => void;
    optionsState: {
        options: any[];
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "search")[], "search" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
        default: () => never[];
    };
    customAttrs: {
        type: ObjectConstructor;
        default: () => {};
    };
    options: {
        type: ArrayConstructor;
        default: () => never[];
    };
    optionsRquest: {
        type: FunctionConstructor;
        default: null;
    };
    optionsParams: {
        type: ArrayConstructor;
        default: () => never[];
    };
    submitFileds: {
        type: ObjectConstructor;
        default: () => {};
    };
    isFixedDefault: {
        type: BooleanConstructor;
        default: boolean;
    };
    defaultValue: {
        type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
        default: null;
    };
    isImdateRequest: {
        type: BooleanConstructor;
        default: boolean;
    };
    isInData: {
        type: BooleanConstructor;
        default: boolean;
    };
    isShowAll: {
        type: BooleanConstructor;
        default: boolean;
    };
    dataFiled: {
        type: StringConstructor;
        default: string;
    };
    isDefault0: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onSearch?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    customAttrs: Record<string, any>;
    defaultValue: string | number | unknown[];
    options: unknown[];
    submitFileds: Record<string, any>;
    modelValue: string | number | unknown[];
    optionsRquest: Function;
    optionsParams: unknown[];
    isFixedDefault: boolean;
    isImdateRequest: boolean;
    isInData: boolean;
    isShowAll: boolean;
    dataFiled: string;
    isDefault0: boolean;
}>;
export default _sfc_main;
