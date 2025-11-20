// composables/useConfirm.ts
import { ref } from "vue";

const message = ref<string | null>(null);
const resolver = ref<((value: boolean) => void) | null>(null);

export function useConfirm() {
  const ask = (msg: string) => {
    message.value = msg;

    return new Promise<boolean>((resolve) => {
      resolver.value = resolve;
    });
  };

  const confirm = () => {
    resolver.value?.(true);
    message.value = null;
  };

  const cancel = () => {
    resolver.value?.(false);
    message.value = null;
  };

  return { message, ask, confirm, cancel };
}
