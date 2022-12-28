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
    isShowAll: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    props: any;
    emits: (event: 'update:modelValue' | 'search', ...args: any[]) => void;
    onUpdate: (val: any) => void;
    onChange: () => void;
    treeData: import('vue').ComputedRef<unknown[]>;
    TreeSelect: {
        new (...args: any[]): {
            $: import('vue').ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                open: boolean;
                multiple: boolean;
                disabled: boolean;
                virtual: boolean;
                dropdownMatchSelectWidth: number | boolean;
                autofocus: boolean;
                loading: boolean;
                filterTreeNode: boolean | ((inputValue: string, treeNode: import('ant-design-vue/lib/vc-tree-select/TreeSelect').DefaultOptionType) => boolean);
                treeCheckable: boolean;
                showSearch: boolean;
                defaultOpen: boolean;
                allowClear: boolean;
                showArrow: boolean;
                autoClearSearchValue: boolean;
                labelInValue: boolean;
                bordered: boolean;
                treeDefaultExpandAll: boolean;
                treeLine: boolean | {
                    showLeafIcon: boolean;
                };
                treeCheckStrictly: boolean;
                treeDataSimpleMode: any;
            }> & Omit<Readonly<import('vue').ExtractPropTypes<{
                suffixIcon: import('vue-types').VueTypeValidableDef<any>;
                size: {
                    type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
                };
                bordered: {
                    type: BooleanConstructor;
                    default: any;
                };
                treeLine: {
                    type: import('vue').PropType<boolean | {
                        showLeafIcon: boolean;
                    }>;
                    default: any;
                };
                replaceFields: {
                    type: import('vue').PropType<import('ant-design-vue/lib/vc-tree-select/interface').FieldNames>;
                };
                'onUpdate:value': {
                    type: import('vue').PropType<(value: any) => void>;
                };
                'onUpdate:treeExpandedKeys': {
                    type: import('vue').PropType<(keys: import('ant-design-vue/lib/vc-tree-select/interface').Key[]) => void>;
                };
                'onUpdate:searchValue': {
                    type: import('vue').PropType<(value: string) => void>;
                };
                onFocus: {
                    type: import('vue').PropType<(e: FocusEvent) => void>;
                };
                onBlur: {
                    type: import('vue').PropType<(e: FocusEvent) => void>;
                };
                onChange: {
                    type: import('vue').PropType<(value: any, labelList: any[], extra: import('ant-design-vue/lib/vc-tree-select/TreeSelect').ChangeEventExtra) => void>;
                };
                onKeydown: import('vue').PropType<(e: KeyboardEvent) => void>;
                onKeyup: import('vue').PropType<(e: KeyboardEvent) => void>;
                onClick: import('vue').PropType<(e: MouseEvent) => void>;
                onMousedown: import('vue').PropType<(e: MouseEvent) => void>;
                onMouseenter: import('vue').PropType<(e: MouseEvent) => void>;
                onMouseleave: import('vue').PropType<(e: MouseEvent) => void>;
                onSelect: import('vue').PropType<import('ant-design-vue/lib/vc-select/Select').SelectHandler<unknown, import('ant-design-vue/lib/select').BaseOptionType>>;
                prefixCls: StringConstructor;
                direction: {
                    type: import('vue').PropType<'ltr' | 'rtl'>;
                };
                open: {
                    type: BooleanConstructor;
                    default: any;
                };
                animation: StringConstructor;
                multiple: {
                    type: BooleanConstructor;
                    default: any;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: any;
                };
                value: {
                    type: import('vue').PropType<any>;
                };
                tabindex: NumberConstructor;
                getPopupContainer: {
                    type: import('vue').PropType<import('ant-design-vue/lib/vc-select/BaseSelect').RenderDOMFunc>;
                };
                virtual: {
                    type: BooleanConstructor;
                    default: any;
                };
                dropdownMatchSelectWidth: {
                    type: import('vue').PropType<number | boolean>;
                    default: any;
                };
                children: import('vue').PropType<import('ant-design-vue/lib/_util/type').VueNode[]>;
                transitionName: StringConstructor;
                showAction: {
                    type: import('vue').PropType<('click' | 'focus')[]>;
                };
                id: StringConstructor;
                placement: {
                    type: import('vue').PropType<import('ant-design-vue/lib/vc-select/BaseSelect').Placement>;
                };
                autofocus: BooleanConstructor;
                defaultValue: {
                    type: import('vue').PropType<any>;
                };
                fieldNames: {
                    type: import('vue').PropType<import('ant-design-vue/lib/vc-tree-select/TreeSelect').FieldNames>;
                };
                dropdownStyle: {
                    type: import('vue').PropType<import('vue').CSSProperties>;
                };
                dropdownClassName: StringConstructor;
                dropdownRender: {
                    type: import('vue').PropType<import('ant-design-vue/lib/vc-select/BaseSelect').DropdownRender>;
                };
                dropdownAlign: import('vue').PropType<import('ant-design-vue/lib/vc-trigger/interface').AlignType>;
                placeholder: import('vue-types').VueTypeValidableDef<any>;
                switcherIcon: import('vue-types').VueTypeValidableDef<any>;
                loading: {
                    type: BooleanConstructor;
                    default: any;
                };
                loadData: {
                    type: import('vue').PropType<(dataNode: import('ant-design-vue/lib/vc-tree-select/TreeSelect').LegacyDataNode) => Promise<unknown>>;
                };
                filterTreeNode: {
                    type: import('vue').PropType<boolean | ((inputValue: string, treeNode: import('ant-design-vue/lib/vc-tree-select/TreeSelect').DefaultOptionType) => boolean)>;
                    default: any;
                };
                treeData: {
                    type: import('vue').PropType<import('ant-design-vue/lib/vc-tree-select/TreeSelect').DefaultOptionType[]>;
                };
                treeCheckable: {
                    type: BooleanConstructor;
                    default: any;
                };
                showSearch: {
                    type: BooleanConstructor;
                    default: any;
                };
                searchValue: StringConstructor;
                onInputKeyDown: import('vue').PropType<(e: KeyboardEvent) => void>;
                removeIcon: import('vue-types').VueTypeValidableDef<any>;
                maxTagCount: {
                    type: import('vue').PropType<number | 'responsive'>;
                };
                maxTagTextLength: NumberConstructor;
                maxTagPlaceholder: {
                    type: import('vue').PropType<(omittedValues: import('ant-design-vue/lib/vc-select/BaseSelect').DisplayValueType[]) => any>;
                };
                tokenSeparators: {
                    type: import('vue').PropType<string[]>;
                };
                tagRender: {
                    type: import('vue').PropType<(props: import('ant-design-vue/lib/vc-select/BaseSelect').CustomTagProps) => any>;
                };
                choiceTransitionName: StringConstructor;
                optionLabelRender: {
                    type: import('vue').PropType<(option: Record<string, any>) => any>;
                };
                onSearch: {
                    type: import('vue').PropType<(value: string) => void>;
                };
                notFoundContent: import('vue-types').VueTypeValidableDef<any>;
                onClear: import('vue').PropType<() => void>;
                defaultOpen: {
                    type: BooleanConstructor;
                    default: any;
                };
                onDropdownVisibleChange: {
                    type: import('vue').PropType<(open: boolean) => void>;
                };
                getRawInputElement: {
                    type: import('vue').PropType<() => any>;
                };
                allowClear: {
                    type: BooleanConstructor;
                    default: any;
                };
                showArrow: {
                    type: BooleanConstructor;
                    default: any;
                };
                clearIcon: import('vue-types').VueTypeValidableDef<any>;
                onPopupScroll: import('vue').PropType<(e: UIEvent) => void>;
                listHeight: NumberConstructor;
                listItemHeight: NumberConstructor;
                inputValue: StringConstructor;
                autoClearSearchValue: {
                    type: BooleanConstructor;
                    default: any;
                };
                onDeselect: import('vue').PropType<import('ant-design-vue/lib/vc-select/Select').SelectHandler<unknown, import('ant-design-vue/lib/select').BaseOptionType>>;
                labelInValue: {
                    type: BooleanConstructor;
                    default: any;
                };
                showCheckedStrategy: {
                    type: import('vue').PropType<import('ant-design-vue/lib/vc-tree-select/utils/strategyUtil').CheckedStrategy>;
                };
                treeDefaultExpandAll: {
                    type: BooleanConstructor;
                    default: any;
                };
                treeIcon: import('vue-types').VueTypeValidableDef<any>;
                treeLoadedKeys: {
                    type: import('vue').PropType<import('ant-design-vue/lib/vc-tree-select/interface').Key[]>;
                };
                onTreeLoad: {
                    type: import('vue').PropType<(loadedKeys: import('ant-design-vue/lib/vc-tree-select/interface').Key[]) => void>;
                };
                treeNodeFilterProp: StringConstructor;
                treeNodeLabelProp: StringConstructor;
                treeCheckStrictly: {
                    type: BooleanConstructor;
                    default: any;
                };
                treeDataSimpleMode: {
                    type: import('vue').PropType<boolean | import('ant-design-vue/lib/vc-tree-select/TreeSelect').SimpleModeConfig>;
                    default: any;
                };
                treeExpandedKeys: {
                    type: import('vue').PropType<import('ant-design-vue/lib/vc-tree-select/interface').Key[]>;
                };
                treeDefaultExpandedKeys: {
                    type: import('vue').PropType<import('ant-design-vue/lib/vc-tree-select/interface').Key[]>;
                };
                onTreeExpand: {
                    type: import('vue').PropType<(expandedKeys: import('ant-design-vue/lib/vc-tree-select/interface').Key[]) => void>;
                };
                dropdownPopupAlign: import('vue-types').VueTypeValidableDef<any>;
            }>> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, 'allowClear' | 'bordered' | 'treeLine' | 'open' | 'multiple' | 'disabled' | 'virtual' | 'dropdownMatchSelectWidth' | 'autofocus' | 'loading' | 'filterTreeNode' | 'treeCheckable' | 'showSearch' | 'defaultOpen' | 'showArrow' | 'autoClearSearchValue' | 'labelInValue' | 'treeDefaultExpandAll' | 'treeCheckStrictly' | 'treeDataSimpleMode'>;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                [name: string]: import('vue').Slot;
            }>;
            $root: import('vue').ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import('vue').ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
            $parent: import('vue').ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import('vue').ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
                suffixIcon: import('vue-types').VueTypeValidableDef<any>;
                size: {
                    type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
                };
                bordered: {
                    type: BooleanConstructor;
                    default: any;
                };
                treeLine: {
                    type: import('vue').PropType<boolean | {
                        showLeafIcon: boolean;
                    }>;
                    default: any;
                };
                replaceFields: {
                    type: import('vue').PropType<import('ant-design-vue/lib/vc-tree-select/interface').FieldNames>;
                };
                'onUpdate:value': {
                    type: import('vue').PropType<(value: any) => void>;
                };
                'onUpdate:treeExpandedKeys': {
                    type: import('vue').PropType<(keys: import('ant-design-vue/lib/vc-tree-select/interface').Key[]) => void>;
                };
                'onUpdate:searchValue': {
                    type: import('vue').PropType<(value: string) => void>;
                };
                onFocus: {
                    type: import('vue').PropType<(e: FocusEvent) => void>;
                };
                onBlur: {
                    type: import('vue').PropType<(e: FocusEvent) => void>;
                };
                onChange: {
                    type: import('vue').PropType<(value: any, labelList: any[], extra: import('ant-design-vue/lib/vc-tree-select/TreeSelect').ChangeEventExtra) => void>;
                };
                onKeydown: import('vue').PropType<(e: KeyboardEvent) => void>;
                onKeyup: import('vue').PropType<(e: KeyboardEvent) => void>;
                onClick: import('vue').PropType<(e: MouseEvent) => void>;
                onMousedown: import('vue').PropType<(e: MouseEvent) => void>;
                onMouseenter: import('vue').PropType<(e: MouseEvent) => void>;
                onMouseleave: import('vue').PropType<(e: MouseEvent) => void>;
                onSelect: import('vue').PropType<import('ant-design-vue/lib/vc-select/Select').SelectHandler<unknown, import('ant-design-vue/lib/select').BaseOptionType>>;
                prefixCls: StringConstructor;
                direction: {
                    type: import('vue').PropType<'ltr' | 'rtl'>;
                };
                open: {
                    type: BooleanConstructor;
                    default: any;
                };
                animation: StringConstructor;
                multiple: {
                    type: BooleanConstructor;
                    default: any;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: any;
                };
                value: {
                    type: import('vue').PropType<any>;
                };
                tabindex: NumberConstructor;
                getPopupContainer: {
                    type: import('vue').PropType<import('ant-design-vue/lib/vc-select/BaseSelect').RenderDOMFunc>;
                };
                virtual: {
                    type: BooleanConstructor;
                    default: any;
                };
                dropdownMatchSelectWidth: {
                    type: import('vue').PropType<number | boolean>;
                    default: any;
                };
                children: import('vue').PropType<import('ant-design-vue/lib/_util/type').VueNode[]>;
                transitionName: StringConstructor;
                showAction: {
                    type: import('vue').PropType<('click' | 'focus')[]>;
                };
                id: StringConstructor;
                placement: {
                    type: import('vue').PropType<import('ant-design-vue/lib/vc-select/BaseSelect').Placement>;
                };
                autofocus: BooleanConstructor;
                defaultValue: {
                    type: import('vue').PropType<any>;
                };
                fieldNames: {
                    type: import('vue').PropType<import('ant-design-vue/lib/vc-tree-select/TreeSelect').FieldNames>;
                };
                dropdownStyle: {
                    type: import('vue').PropType<import('vue').CSSProperties>;
                };
                dropdownClassName: StringConstructor;
                dropdownRender: {
                    type: import('vue').PropType<import('ant-design-vue/lib/vc-select/BaseSelect').DropdownRender>;
                };
                dropdownAlign: import('vue').PropType<import('ant-design-vue/lib/vc-trigger/interface').AlignType>;
                placeholder: import('vue-types').VueTypeValidableDef<any>;
                switcherIcon: import('vue-types').VueTypeValidableDef<any>;
                loading: {
                    type: BooleanConstructor;
                    default: any;
                };
                loadData: {
                    type: import('vue').PropType<(dataNode: import('ant-design-vue/lib/vc-tree-select/TreeSelect').LegacyDataNode) => Promise<unknown>>;
                };
                filterTreeNode: {
                    type: import('vue').PropType<boolean | ((inputValue: string, treeNode: import('ant-design-vue/lib/vc-tree-select/TreeSelect').DefaultOptionType) => boolean)>;
                    default: any;
                };
                treeData: {
                    type: import('vue').PropType<import('ant-design-vue/lib/vc-tree-select/TreeSelect').DefaultOptionType[]>;
                };
                treeCheckable: {
                    type: BooleanConstructor;
                    default: any;
                };
                showSearch: {
                    type: BooleanConstructor;
                    default: any;
                };
                searchValue: StringConstructor;
                onInputKeyDown: import('vue').PropType<(e: KeyboardEvent) => void>;
                removeIcon: import('vue-types').VueTypeValidableDef<any>;
                maxTagCount: {
                    type: import('vue').PropType<number | 'responsive'>;
                };
                maxTagTextLength: NumberConstructor;
                maxTagPlaceholder: {
                    type: import('vue').PropType<(omittedValues: import('ant-design-vue/lib/vc-select/BaseSelect').DisplayValueType[]) => any>;
                };
                tokenSeparators: {
                    type: import('vue').PropType<string[]>;
                };
                tagRender: {
                    type: import('vue').PropType<(props: import('ant-design-vue/lib/vc-select/BaseSelect').CustomTagProps) => any>;
                };
                choiceTransitionName: StringConstructor;
                optionLabelRender: {
                    type: import('vue').PropType<(option: Record<string, any>) => any>;
                };
                onSearch: {
                    type: import('vue').PropType<(value: string) => void>;
                };
                notFoundContent: import('vue-types').VueTypeValidableDef<any>;
                onClear: import('vue').PropType<() => void>;
                defaultOpen: {
                    type: BooleanConstructor;
                    default: any;
                };
                onDropdownVisibleChange: {
                    type: import('vue').PropType<(open: boolean) => void>;
                };
                getRawInputElement: {
                    type: import('vue').PropType<() => any>;
                };
                allowClear: {
                    type: BooleanConstructor;
                    default: any;
                };
                showArrow: {
                    type: BooleanConstructor;
                    default: any;
                };
                clearIcon: import('vue-types').VueTypeValidableDef<any>;
                onPopupScroll: import('vue').PropType<(e: UIEvent) => void>;
                listHeight: NumberConstructor;
                listItemHeight: NumberConstructor;
                inputValue: StringConstructor;
                autoClearSearchValue: {
                    type: BooleanConstructor;
                    default: any;
                };
                onDeselect: import('vue').PropType<import('ant-design-vue/lib/vc-select/Select').SelectHandler<unknown, import('ant-design-vue/lib/select').BaseOptionType>>;
                labelInValue: {
                    type: BooleanConstructor;
                    default: any;
                };
                showCheckedStrategy: {
                    type: import('vue').PropType<import('ant-design-vue/lib/vc-tree-select/utils/strategyUtil').CheckedStrategy>;
                };
                treeDefaultExpandAll: {
                    type: BooleanConstructor;
                    default: any;
                };
                treeIcon: import('vue-types').VueTypeValidableDef<any>;
                treeLoadedKeys: {
                    type: import('vue').PropType<import('ant-design-vue/lib/vc-tree-select/interface').Key[]>;
                };
                onTreeLoad: {
                    type: import('vue').PropType<(loadedKeys: import('ant-design-vue/lib/vc-tree-select/interface').Key[]) => void>;
                };
                treeNodeFilterProp: StringConstructor;
                treeNodeLabelProp: StringConstructor;
                treeCheckStrictly: {
                    type: BooleanConstructor;
                    default: any;
                };
                treeDataSimpleMode: {
                    type: import('vue').PropType<boolean | import('ant-design-vue/lib/vc-tree-select/TreeSelect').SimpleModeConfig>;
                    default: any;
                };
                treeExpandedKeys: {
                    type: import('vue').PropType<import('ant-design-vue/lib/vc-tree-select/interface').Key[]>;
                };
                treeDefaultExpandedKeys: {
                    type: import('vue').PropType<import('ant-design-vue/lib/vc-tree-select/interface').Key[]>;
                };
                onTreeExpand: {
                    type: import('vue').PropType<(expandedKeys: import('ant-design-vue/lib/vc-tree-select/interface').Key[]) => void>;
                };
                dropdownPopupAlign: import('vue-types').VueTypeValidableDef<any>;
            }>>, () => JSX.Element, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
                open: boolean;
                multiple: boolean;
                disabled: boolean;
                virtual: boolean;
                dropdownMatchSelectWidth: number | boolean;
                autofocus: boolean;
                loading: boolean;
                filterTreeNode: boolean | ((inputValue: string, treeNode: import('ant-design-vue/lib/vc-tree-select/TreeSelect').DefaultOptionType) => boolean);
                treeCheckable: boolean;
                showSearch: boolean;
                defaultOpen: boolean;
                allowClear: boolean;
                showArrow: boolean;
                autoClearSearchValue: boolean;
                labelInValue: boolean;
                bordered: boolean;
                treeDefaultExpandAll: boolean;
                treeLine: boolean | {
                    showLeafIcon: boolean;
                };
                treeCheckStrictly: boolean;
                treeDataSimpleMode: any;
            }> & {
                beforeCreate?: (() => void) | (() => void)[] | undefined;
                created?: (() => void) | (() => void)[] | undefined;
                beforeMount?: (() => void) | (() => void)[] | undefined;
                mounted?: (() => void) | (() => void)[] | undefined;
                beforeUpdate?: (() => void) | (() => void)[] | undefined;
                updated?: (() => void) | (() => void)[] | undefined;
                activated?: (() => void) | (() => void)[] | undefined;
                deactivated?: (() => void) | (() => void)[] | undefined;
                beforeDestroy?: (() => void) | (() => void)[] | undefined;
                beforeUnmount?: (() => void) | (() => void)[] | undefined;
                destroyed?: (() => void) | (() => void)[] | undefined;
                unmounted?: (() => void) | (() => void)[] | undefined;
                renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[] | undefined;
                renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[] | undefined;
                errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import('vue').ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import('vue').ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void)[] | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import('vue').nextTick;
            $watch(source: string | Function, cb: Function, options?: import('vue').WatchOptions<boolean> | undefined): import('vue').WatchStopHandle;
        } & Readonly<import('vue').ExtractPropTypes<{
            suffixIcon: import('vue-types').VueTypeValidableDef<any>;
            size: {
                type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
            };
            bordered: {
                type: BooleanConstructor;
                default: any;
            };
            treeLine: {
                type: import('vue').PropType<boolean | {
                    showLeafIcon: boolean;
                }>;
                default: any;
            };
            replaceFields: {
                type: import('vue').PropType<import('ant-design-vue/lib/vc-tree-select/interface').FieldNames>;
            };
            'onUpdate:value': {
                type: import('vue').PropType<(value: any) => void>;
            };
            'onUpdate:treeExpandedKeys': {
                type: import('vue').PropType<(keys: import('ant-design-vue/lib/vc-tree-select/interface').Key[]) => void>;
            };
            'onUpdate:searchValue': {
                type: import('vue').PropType<(value: string) => void>;
            };
            onFocus: {
                type: import('vue').PropType<(e: FocusEvent) => void>;
            };
            onBlur: {
                type: import('vue').PropType<(e: FocusEvent) => void>;
            };
            onChange: {
                type: import('vue').PropType<(value: any, labelList: any[], extra: import('ant-design-vue/lib/vc-tree-select/TreeSelect').ChangeEventExtra) => void>;
            };
            onKeydown: import('vue').PropType<(e: KeyboardEvent) => void>;
            onKeyup: import('vue').PropType<(e: KeyboardEvent) => void>;
            onClick: import('vue').PropType<(e: MouseEvent) => void>;
            onMousedown: import('vue').PropType<(e: MouseEvent) => void>;
            onMouseenter: import('vue').PropType<(e: MouseEvent) => void>;
            onMouseleave: import('vue').PropType<(e: MouseEvent) => void>;
            onSelect: import('vue').PropType<import('ant-design-vue/lib/vc-select/Select').SelectHandler<unknown, import('ant-design-vue/lib/select').BaseOptionType>>;
            prefixCls: StringConstructor;
            direction: {
                type: import('vue').PropType<'ltr' | 'rtl'>;
            };
            open: {
                type: BooleanConstructor;
                default: any;
            };
            animation: StringConstructor;
            multiple: {
                type: BooleanConstructor;
                default: any;
            };
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            value: {
                type: import('vue').PropType<any>;
            };
            tabindex: NumberConstructor;
            getPopupContainer: {
                type: import('vue').PropType<import('ant-design-vue/lib/vc-select/BaseSelect').RenderDOMFunc>;
            };
            virtual: {
                type: BooleanConstructor;
                default: any;
            };
            dropdownMatchSelectWidth: {
                type: import('vue').PropType<number | boolean>;
                default: any;
            };
            children: import('vue').PropType<import('ant-design-vue/lib/_util/type').VueNode[]>;
            transitionName: StringConstructor;
            showAction: {
                type: import('vue').PropType<('click' | 'focus')[]>;
            };
            id: StringConstructor;
            placement: {
                type: import('vue').PropType<import('ant-design-vue/lib/vc-select/BaseSelect').Placement>;
            };
            autofocus: BooleanConstructor;
            defaultValue: {
                type: import('vue').PropType<any>;
            };
            fieldNames: {
                type: import('vue').PropType<import('ant-design-vue/lib/vc-tree-select/TreeSelect').FieldNames>;
            };
            dropdownStyle: {
                type: import('vue').PropType<import('vue').CSSProperties>;
            };
            dropdownClassName: StringConstructor;
            dropdownRender: {
                type: import('vue').PropType<import('ant-design-vue/lib/vc-select/BaseSelect').DropdownRender>;
            };
            dropdownAlign: import('vue').PropType<import('ant-design-vue/lib/vc-trigger/interface').AlignType>;
            placeholder: import('vue-types').VueTypeValidableDef<any>;
            switcherIcon: import('vue-types').VueTypeValidableDef<any>;
            loading: {
                type: BooleanConstructor;
                default: any;
            };
            loadData: {
                type: import('vue').PropType<(dataNode: import('ant-design-vue/lib/vc-tree-select/TreeSelect').LegacyDataNode) => Promise<unknown>>;
            };
            filterTreeNode: {
                type: import('vue').PropType<boolean | ((inputValue: string, treeNode: import('ant-design-vue/lib/vc-tree-select/TreeSelect').DefaultOptionType) => boolean)>;
                default: any;
            };
            treeData: {
                type: import('vue').PropType<import('ant-design-vue/lib/vc-tree-select/TreeSelect').DefaultOptionType[]>;
            };
            treeCheckable: {
                type: BooleanConstructor;
                default: any;
            };
            showSearch: {
                type: BooleanConstructor;
                default: any;
            };
            searchValue: StringConstructor;
            onInputKeyDown: import('vue').PropType<(e: KeyboardEvent) => void>;
            removeIcon: import('vue-types').VueTypeValidableDef<any>;
            maxTagCount: {
                type: import('vue').PropType<number | 'responsive'>;
            };
            maxTagTextLength: NumberConstructor;
            maxTagPlaceholder: {
                type: import('vue').PropType<(omittedValues: import('ant-design-vue/lib/vc-select/BaseSelect').DisplayValueType[]) => any>;
            };
            tokenSeparators: {
                type: import('vue').PropType<string[]>;
            };
            tagRender: {
                type: import('vue').PropType<(props: import('ant-design-vue/lib/vc-select/BaseSelect').CustomTagProps) => any>;
            };
            choiceTransitionName: StringConstructor;
            optionLabelRender: {
                type: import('vue').PropType<(option: Record<string, any>) => any>;
            };
            onSearch: {
                type: import('vue').PropType<(value: string) => void>;
            };
            notFoundContent: import('vue-types').VueTypeValidableDef<any>;
            onClear: import('vue').PropType<() => void>;
            defaultOpen: {
                type: BooleanConstructor;
                default: any;
            };
            onDropdownVisibleChange: {
                type: import('vue').PropType<(open: boolean) => void>;
            };
            getRawInputElement: {
                type: import('vue').PropType<() => any>;
            };
            allowClear: {
                type: BooleanConstructor;
                default: any;
            };
            showArrow: {
                type: BooleanConstructor;
                default: any;
            };
            clearIcon: import('vue-types').VueTypeValidableDef<any>;
            onPopupScroll: import('vue').PropType<(e: UIEvent) => void>;
            listHeight: NumberConstructor;
            listItemHeight: NumberConstructor;
            inputValue: StringConstructor;
            autoClearSearchValue: {
                type: BooleanConstructor;
                default: any;
            };
            onDeselect: import('vue').PropType<import('ant-design-vue/lib/vc-select/Select').SelectHandler<unknown, import('ant-design-vue/lib/select').BaseOptionType>>;
            labelInValue: {
                type: BooleanConstructor;
                default: any;
            };
            showCheckedStrategy: {
                type: import('vue').PropType<import('ant-design-vue/lib/vc-tree-select/utils/strategyUtil').CheckedStrategy>;
            };
            treeDefaultExpandAll: {
                type: BooleanConstructor;
                default: any;
            };
            treeIcon: import('vue-types').VueTypeValidableDef<any>;
            treeLoadedKeys: {
                type: import('vue').PropType<import('ant-design-vue/lib/vc-tree-select/interface').Key[]>;
            };
            onTreeLoad: {
                type: import('vue').PropType<(loadedKeys: import('ant-design-vue/lib/vc-tree-select/interface').Key[]) => void>;
            };
            treeNodeFilterProp: StringConstructor;
            treeNodeLabelProp: StringConstructor;
            treeCheckStrictly: {
                type: BooleanConstructor;
                default: any;
            };
            treeDataSimpleMode: {
                type: import('vue').PropType<boolean | import('ant-design-vue/lib/vc-tree-select/TreeSelect').SimpleModeConfig>;
                default: any;
            };
            treeExpandedKeys: {
                type: import('vue').PropType<import('ant-design-vue/lib/vc-tree-select/interface').Key[]>;
            };
            treeDefaultExpandedKeys: {
                type: import('vue').PropType<import('ant-design-vue/lib/vc-tree-select/interface').Key[]>;
            };
            onTreeExpand: {
                type: import('vue').PropType<(expandedKeys: import('ant-design-vue/lib/vc-tree-select/interface').Key[]) => void>;
            };
            dropdownPopupAlign: import('vue-types').VueTypeValidableDef<any>;
        }>> & import('vue').ShallowUnwrapRef<() => JSX.Element> & import('vue').ComponentCustomProperties;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
        suffixIcon: import('vue-types').VueTypeValidableDef<any>;
        size: {
            type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
        };
        bordered: {
            type: BooleanConstructor;
            default: any;
        };
        treeLine: {
            type: import('vue').PropType<boolean | {
                showLeafIcon: boolean;
            }>;
            default: any;
        };
        replaceFields: {
            type: import('vue').PropType<import('ant-design-vue/lib/vc-tree-select/interface').FieldNames>;
        };
        'onUpdate:value': {
            type: import('vue').PropType<(value: any) => void>;
        };
        'onUpdate:treeExpandedKeys': {
            type: import('vue').PropType<(keys: import('ant-design-vue/lib/vc-tree-select/interface').Key[]) => void>;
        };
        'onUpdate:searchValue': {
            type: import('vue').PropType<(value: string) => void>;
        };
        onFocus: {
            type: import('vue').PropType<(e: FocusEvent) => void>;
        };
        onBlur: {
            type: import('vue').PropType<(e: FocusEvent) => void>;
        };
        onChange: {
            type: import('vue').PropType<(value: any, labelList: any[], extra: import('ant-design-vue/lib/vc-tree-select/TreeSelect').ChangeEventExtra) => void>;
        };
        onKeydown: import('vue').PropType<(e: KeyboardEvent) => void>;
        onKeyup: import('vue').PropType<(e: KeyboardEvent) => void>;
        onClick: import('vue').PropType<(e: MouseEvent) => void>;
        onMousedown: import('vue').PropType<(e: MouseEvent) => void>;
        onMouseenter: import('vue').PropType<(e: MouseEvent) => void>;
        onMouseleave: import('vue').PropType<(e: MouseEvent) => void>;
        onSelect: import('vue').PropType<import('ant-design-vue/lib/vc-select/Select').SelectHandler<unknown, import('ant-design-vue/lib/select').BaseOptionType>>;
        prefixCls: StringConstructor;
        direction: {
            type: import('vue').PropType<'ltr' | 'rtl'>;
        };
        open: {
            type: BooleanConstructor;
            default: any;
        };
        animation: StringConstructor;
        multiple: {
            type: BooleanConstructor;
            default: any;
        };
        disabled: {
            type: BooleanConstructor;
            default: any;
        };
        value: {
            type: import('vue').PropType<any>;
        };
        tabindex: NumberConstructor;
        getPopupContainer: {
            type: import('vue').PropType<import('ant-design-vue/lib/vc-select/BaseSelect').RenderDOMFunc>;
        };
        virtual: {
            type: BooleanConstructor;
            default: any;
        };
        dropdownMatchSelectWidth: {
            type: import('vue').PropType<number | boolean>;
            default: any;
        };
        children: import('vue').PropType<import('ant-design-vue/lib/_util/type').VueNode[]>;
        transitionName: StringConstructor;
        showAction: {
            type: import('vue').PropType<('click' | 'focus')[]>;
        };
        id: StringConstructor;
        placement: {
            type: import('vue').PropType<import('ant-design-vue/lib/vc-select/BaseSelect').Placement>;
        };
        autofocus: BooleanConstructor;
        defaultValue: {
            type: import('vue').PropType<any>;
        };
        fieldNames: {
            type: import('vue').PropType<import('ant-design-vue/lib/vc-tree-select/TreeSelect').FieldNames>;
        };
        dropdownStyle: {
            type: import('vue').PropType<import('vue').CSSProperties>;
        };
        dropdownClassName: StringConstructor;
        dropdownRender: {
            type: import('vue').PropType<import('ant-design-vue/lib/vc-select/BaseSelect').DropdownRender>;
        };
        dropdownAlign: import('vue').PropType<import('ant-design-vue/lib/vc-trigger/interface').AlignType>;
        placeholder: import('vue-types').VueTypeValidableDef<any>;
        switcherIcon: import('vue-types').VueTypeValidableDef<any>;
        loading: {
            type: BooleanConstructor;
            default: any;
        };
        loadData: {
            type: import('vue').PropType<(dataNode: import('ant-design-vue/lib/vc-tree-select/TreeSelect').LegacyDataNode) => Promise<unknown>>;
        };
        filterTreeNode: {
            type: import('vue').PropType<boolean | ((inputValue: string, treeNode: import('ant-design-vue/lib/vc-tree-select/TreeSelect').DefaultOptionType) => boolean)>;
            default: any;
        };
        treeData: {
            type: import('vue').PropType<import('ant-design-vue/lib/vc-tree-select/TreeSelect').DefaultOptionType[]>;
        };
        treeCheckable: {
            type: BooleanConstructor;
            default: any;
        };
        showSearch: {
            type: BooleanConstructor;
            default: any;
        };
        searchValue: StringConstructor;
        onInputKeyDown: import('vue').PropType<(e: KeyboardEvent) => void>;
        removeIcon: import('vue-types').VueTypeValidableDef<any>;
        maxTagCount: {
            type: import('vue').PropType<number | 'responsive'>;
        };
        maxTagTextLength: NumberConstructor;
        maxTagPlaceholder: {
            type: import('vue').PropType<(omittedValues: import('ant-design-vue/lib/vc-select/BaseSelect').DisplayValueType[]) => any>;
        };
        tokenSeparators: {
            type: import('vue').PropType<string[]>;
        };
        tagRender: {
            type: import('vue').PropType<(props: import('ant-design-vue/lib/vc-select/BaseSelect').CustomTagProps) => any>;
        };
        choiceTransitionName: StringConstructor;
        optionLabelRender: {
            type: import('vue').PropType<(option: Record<string, any>) => any>;
        };
        onSearch: {
            type: import('vue').PropType<(value: string) => void>;
        };
        notFoundContent: import('vue-types').VueTypeValidableDef<any>;
        onClear: import('vue').PropType<() => void>;
        defaultOpen: {
            type: BooleanConstructor;
            default: any;
        };
        onDropdownVisibleChange: {
            type: import('vue').PropType<(open: boolean) => void>;
        };
        getRawInputElement: {
            type: import('vue').PropType<() => any>;
        };
        allowClear: {
            type: BooleanConstructor;
            default: any;
        };
        showArrow: {
            type: BooleanConstructor;
            default: any;
        };
        clearIcon: import('vue-types').VueTypeValidableDef<any>;
        onPopupScroll: import('vue').PropType<(e: UIEvent) => void>;
        listHeight: NumberConstructor;
        listItemHeight: NumberConstructor;
        inputValue: StringConstructor;
        autoClearSearchValue: {
            type: BooleanConstructor;
            default: any;
        };
        onDeselect: import('vue').PropType<import('ant-design-vue/lib/vc-select/Select').SelectHandler<unknown, import('ant-design-vue/lib/select').BaseOptionType>>;
        labelInValue: {
            type: BooleanConstructor;
            default: any;
        };
        showCheckedStrategy: {
            type: import('vue').PropType<import('ant-design-vue/lib/vc-tree-select/utils/strategyUtil').CheckedStrategy>;
        };
        treeDefaultExpandAll: {
            type: BooleanConstructor;
            default: any;
        };
        treeIcon: import('vue-types').VueTypeValidableDef<any>;
        treeLoadedKeys: {
            type: import('vue').PropType<import('ant-design-vue/lib/vc-tree-select/interface').Key[]>;
        };
        onTreeLoad: {
            type: import('vue').PropType<(loadedKeys: import('ant-design-vue/lib/vc-tree-select/interface').Key[]) => void>;
        };
        treeNodeFilterProp: StringConstructor;
        treeNodeLabelProp: StringConstructor;
        treeCheckStrictly: {
            type: BooleanConstructor;
            default: any;
        };
        treeDataSimpleMode: {
            type: import('vue').PropType<boolean | import('ant-design-vue/lib/vc-tree-select/TreeSelect').SimpleModeConfig>;
            default: any;
        };
        treeExpandedKeys: {
            type: import('vue').PropType<import('ant-design-vue/lib/vc-tree-select/interface').Key[]>;
        };
        treeDefaultExpandedKeys: {
            type: import('vue').PropType<import('ant-design-vue/lib/vc-tree-select/interface').Key[]>;
        };
        onTreeExpand: {
            type: import('vue').PropType<(expandedKeys: import('ant-design-vue/lib/vc-tree-select/interface').Key[]) => void>;
        };
        dropdownPopupAlign: import('vue-types').VueTypeValidableDef<any>;
    }>>, () => JSX.Element, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        open: boolean;
        multiple: boolean;
        disabled: boolean;
        virtual: boolean;
        dropdownMatchSelectWidth: number | boolean;
        autofocus: boolean;
        loading: boolean;
        filterTreeNode: boolean | ((inputValue: string, treeNode: import('ant-design-vue/lib/vc-tree-select/TreeSelect').DefaultOptionType) => boolean);
        treeCheckable: boolean;
        showSearch: boolean;
        defaultOpen: boolean;
        allowClear: boolean;
        showArrow: boolean;
        autoClearSearchValue: boolean;
        labelInValue: boolean;
        bordered: boolean;
        treeDefaultExpandAll: boolean;
        treeLine: boolean | {
            showLeafIcon: boolean;
        };
        treeCheckStrictly: boolean;
        treeDataSimpleMode: any;
    }> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & {
        TreeNode: import('vue').FunctionalComponent<import('ant-design-vue/lib/vc-tree-select/TreeNode').TreeNodeProps, {}> & {
            isTreeSelectNode: boolean;
        };
        SHOW_ALL: 'SHOW_ALL';
        SHOW_PARENT: 'SHOW_PARENT';
        SHOW_CHILD: 'SHOW_CHILD';
        install: (app: import('vue').App<any>) => import('vue').App<any>;
    };
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
    isShowAll: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onSearch?: ((...args: any[]) => any) | undefined;
    'onUpdate:modelValue'?: ((...args: any[]) => any) | undefined;
}, {
    customAttrs: Record<string, any>;
    options: unknown[];
    modelValue: string | unknown[];
    isShowAll: boolean;
}>
export default _sfc_main
