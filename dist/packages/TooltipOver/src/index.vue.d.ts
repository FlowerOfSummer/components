declare const _sfc_main: import("vue").DefineComponent<{
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
    isShow: import("vue").Ref<boolean>;
    contentRef: import("vue").Ref<any>;
    isShowTooltip: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
export default _sfc_main;
