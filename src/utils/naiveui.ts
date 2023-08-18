import type {MessageApiInjection} from "naive-ui/es/message/src/MessageProvider";
import {Nullable} from "#/gobal";

interface NaiveUi {
    message: Nullable<MessageApiInjection>,
}

const naiveui: NaiveUi = {
    message: null,
}

export default naiveui;