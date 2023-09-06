import type { MessageApiInjection } from 'naive-ui/es/message/src/MessageProvider';

interface NaiveUi {
  message: Nullable<MessageApiInjection>;
}

const naiveui: NaiveUi = {
  message: null,
};

export default naiveui;
