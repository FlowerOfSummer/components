declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    customAttrs: {
        type: ObjectConstructor;
        default: () => {};
    };
}, {
    props: any;
    emits: (event: "update:modelValue" | "search", ...args: any[]) => void;
    onUpdate: (val: string) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "search")[], "search" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    customAttrs: {
        type: ObjectConstructor;
        default: () => {};
    };
}>> & {
    onSearch?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    customAttrs: Record<string, any>;
    modelValue: string;
}>;
export default _sfc_main;
