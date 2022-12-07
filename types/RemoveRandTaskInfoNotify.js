"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveRandTaskInfoNotify = exports.RemoveRandTaskInfoNotify_FinishReason = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum RemoveRandTaskInfoNotify.FinishReason
 */
var RemoveRandTaskInfoNotify_FinishReason;
(function (RemoveRandTaskInfoNotify_FinishReason) {
    /**
     * @generated from protobuf enum value: FINISH_REASON_DEFAULT = 0;
     */
    RemoveRandTaskInfoNotify_FinishReason[RemoveRandTaskInfoNotify_FinishReason["DEFAULT"] = 0] = "DEFAULT";
    /**
     * @generated from protobuf enum value: FINISH_REASON_CLEAR = 1;
     */
    RemoveRandTaskInfoNotify_FinishReason[RemoveRandTaskInfoNotify_FinishReason["CLEAR"] = 1] = "CLEAR";
    /**
     * @generated from protobuf enum value: FINISH_REASON_DISTANCE = 2;
     */
    RemoveRandTaskInfoNotify_FinishReason[RemoveRandTaskInfoNotify_FinishReason["DISTANCE"] = 2] = "DISTANCE";
    /**
     * @generated from protobuf enum value: FINISH_REASON_FINISH = 3;
     */
    RemoveRandTaskInfoNotify_FinishReason[RemoveRandTaskInfoNotify_FinishReason["FINISH"] = 3] = "FINISH";
})(RemoveRandTaskInfoNotify_FinishReason = exports.RemoveRandTaskInfoNotify_FinishReason || (exports.RemoveRandTaskInfoNotify_FinishReason = {}));
// @generated message type with reflection information, may provide speed optimized methods
class RemoveRandTaskInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("RemoveRandTaskInfoNotify", [
            { no: 10, name: "rand_task_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "reason", kind: "enum", T: () => ["RemoveRandTaskInfoNotify.FinishReason", RemoveRandTaskInfoNotify_FinishReason, "FINISH_REASON_"] },
            { no: 5, name: "is_succ", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { randTaskId: 0, reason: 0, isSucc: false };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 rand_task_id */ 10:
                    message.randTaskId = reader.uint32();
                    break;
                case /* RemoveRandTaskInfoNotify.FinishReason reason */ 13:
                    message.reason = reader.int32();
                    break;
                case /* bool is_succ */ 5:
                    message.isSucc = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 rand_task_id = 10; */
        if (message.randTaskId !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.randTaskId);
        /* RemoveRandTaskInfoNotify.FinishReason reason = 13; */
        if (message.reason !== 0)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.reason);
        /* bool is_succ = 5; */
        if (message.isSucc !== false)
            writer.tag(5, runtime_1.WireType.Varint).bool(message.isSucc);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RemoveRandTaskInfoNotify
 */
exports.RemoveRandTaskInfoNotify = new RemoveRandTaskInfoNotify$Type();
