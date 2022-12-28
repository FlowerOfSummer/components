declare const _sfc_main: import('vue').DefineComponent<{
    modelValue: {
        type: (ArrayConstructor | StringConstructor)[];
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
}, {
    props: any;
    emits: (event: 'update:modelValue' | 'search', ...args: any[]) => void;
    onUpdate: (val: any) => void;
    onChange: () => void;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, ('update:modelValue' | 'search')[], 'search' | 'update:modelValue', import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: {
        type: (ArrayConstructor | StringConstructor)[];
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
}>> & {
    onSearch?: ((...args: any[]) => any) | undefined;
    'onUpdate:modelValue'?: ((...args: any[]) => any) | undefined;
}, {
    customAttrs: Record<string, any>;
    options: unknown[];
    modelValue: string | unknown[];
}>
export default _sfc_main
