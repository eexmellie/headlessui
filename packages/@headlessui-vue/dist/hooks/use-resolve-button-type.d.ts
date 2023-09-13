import { Ref, ComponentPublicInstance } from 'vue';
export declare function useResolveButtonType(data: Ref<{
    as: string | object;
    type?: unknown;
}>, refElement: Ref<HTMLElement | ComponentPublicInstance | null>): Ref<{} | undefined>;
