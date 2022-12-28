declare const _default: (props: any, clintWidth: any, emit: any) => {
    state: {
        isExpand: boolean;
        hasTimeRange: boolean;
        showItems: any[];
        submitFileds: Record<string, any>;
    };
    itemWidth: import("vue").ComputedRef<any>;
    showItems: import("vue").ComputedRef<any>;
    changeExpand: () => void;
    onSearch: import("lodash").DebouncedFunc<() => void>;
    onReset: () => void;
    isShowExpand: import("vue").ComputedRef<boolean>;
    changeFiledData: (prop: any, value: any) => void;
};
export default _default;
