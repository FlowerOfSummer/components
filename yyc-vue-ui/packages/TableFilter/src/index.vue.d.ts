/* eslint-disable @typescript-eslint/ban-types */
declare const _sfc_main: import('vue').DefineComponent<{
    items: {
        type: ObjectConstructor;
        default: () => ({
            label: string;
            prop: string;
            type: string;
            defaultValue: string;
            customAttrs: {
                placeholder: string;
                allowClear: boolean;
            };
            options?: undefined;
        } | {
            label: string;
            prop: string;
            type: string;
            options: {
                value: string;
                label: string;
            }[];
            customAttrs: {
                placeholder: string;
                allowClear?: undefined;
            };
            defaultValue?: undefined;
        } | {
            label: string;
            prop: string;
            type: string;
            defaultValue: never[];
            options: {
                value: string;
                label: string;
            }[];
            customAttrs: {
                placeholder: string;
                allowClear?: undefined;
            };
        } | {
            label: string;
            prop: string;
            type: string;
            defaultValue: never[];
            customAttrs?: undefined;
            options?: undefined;
        } | {
            label: string;
            prop: string;
            type: string;
            defaultValue: string;
            customAttrs: {
                placeholder: string;
                allowClear?: undefined;
            };
            options?: undefined;
        } | {
            label: string;
            prop: string;
            type: string;
            customAttrs: {
                placeholder: string;
                allowClear?: undefined;
            };
            defaultValue?: undefined;
            options?: undefined;
        })[];
    };
    searchLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
    isSearchImdate: {
        type: BooleanConstructor;
        default: boolean;
    };
    isShowReset: {
        type: BooleanConstructor;
        default: boolean;
    };
    filterCount: {
        type: ArrayConstructor;
        default: () => number[];
    };
    labelWidth: {
        type: StringConstructor;
        default: string;
    };
    maxLineCount: {
        type: NumberConstructor;
        default: number;
    };
}, {
    componentType: Record<string, any>;
    props: any;
    emit: (event: 'onSearch', ...args: any[]) => void;
    clintWidth: import('vue').Ref<number>;
    state: {
        isExpand: boolean;
        hasTimeRange: boolean;
        showItems: any[];
        submitFileds: Record<string, any>;
    };
    showItems: import('vue').ComputedRef<any>;
    itemWidth: import('vue').ComputedRef<any>;
    changeExpand: () => void;
    onSearch: import('lodash').DebouncedFunc<() => void>;
    onReset: () => void;
    isShowExpand: import('vue').ComputedRef<boolean>;
    changeFiledData: (prop: any, value: any) => void;
    computedLabelWidth: import('vue').ComputedRef<string>;
    TooltipOver: import('vue').DefineComponent<{
        content: {
            type: StringConstructor;
            default: string;
        };
        width: {
            type: StringConstructor;
            default: string;
        };
        tooltipContent: {
            type: StringConstructor;
            default: string;
        };
    }, {
        props: any;
        isShow: import('vue').Ref<boolean>;
        contentRef: import('vue').Ref<any>;
        isShowTooltip: () => void;
    }, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, Record<string, any>, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
        content: {
            type: StringConstructor;
            default: string;
        };
        width: {
            type: StringConstructor;
            default: string;
        };
        tooltipContent: {
            type: StringConstructor;
            default: string;
        };
    }>>, {
        content: string;
        width: string;
        tooltipContent: string;
    }>;
    DownOutlined: import('@ant-design/icons-vue/lib/icons/DownOutlined').DownOutlinedIconType;
    UpOutlined: import('@ant-design/icons-vue/lib/icons/UpOutlined').UpOutlinedIconType;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, 'onSearch'[], 'onSearch', import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    items: {
        type: ObjectConstructor;
        default: () => ({
            label: string;
            prop: string;
            type: string;
            defaultValue: string;
            customAttrs: {
                placeholder: string;
                allowClear: boolean;
            };
            options?: undefined;
        } | {
            label: string;
            prop: string;
            type: string;
            options: {
                value: string;
                label: string;
            }[];
            customAttrs: {
                placeholder: string;
                allowClear?: undefined;
            };
            defaultValue?: undefined;
        } | {
            label: string;
            prop: string;
            type: string;
            defaultValue: never[];
            options: {
                value: string;
                label: string;
            }[];
            customAttrs: {
                placeholder: string;
                allowClear?: undefined;
            };
        } | {
            label: string;
            prop: string;
            type: string;
            defaultValue: never[];
            customAttrs?: undefined;
            options?: undefined;
        } | {
            label: string;
            prop: string;
            type: string;
            defaultValue: string;
            customAttrs: {
                placeholder: string;
                allowClear?: undefined;
            };
            options?: undefined;
        } | {
            label: string;
            prop: string;
            type: string;
            customAttrs: {
                placeholder: string;
                allowClear?: undefined;
            };
            defaultValue?: undefined;
            options?: undefined;
        })[];
    };
    searchLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
    isSearchImdate: {
        type: BooleanConstructor;
        default: boolean;
    };
    isShowReset: {
        type: BooleanConstructor;
        default: boolean;
    };
    filterCount: {
        type: ArrayConstructor;
        default: () => number[];
    };
    labelWidth: {
        type: StringConstructor;
        default: string;
    };
    maxLineCount: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    onOnSearch?: ((...args: any[]) => any) | undefined;
}, {
    items: Record<string, any>;
    searchLoading: boolean;
    isSearchImdate: boolean;
    isShowReset: boolean;
    filterCount: unknown[];
    labelWidth: string;
    maxLineCount: number;
}>
export default _sfc_main
