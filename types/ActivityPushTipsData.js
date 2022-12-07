"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityPushTipsData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ActivityPushTipsState_1 = require("./ActivityPushTipsState");
// @generated message type with reflection information, may provide speed optimized methods
class ActivityPushTipsData$Type extends runtime_5.MessageType {
    constructor() {
        super("ActivityPushTipsData", [
            { no: 14, name: "activity_push_tips_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "state", kind: "enum", T: () => ["ActivityPushTipsState", ActivityPushTipsState_1.ActivityPushTipsState, "ACTIVITY_PUSH_TIPS_STATE_"] }
        ]);
    }
    create(value) {
        const message = { activityPushTipsId: 0, state: 0 };
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
                case /* uint32 activity_push_tips_id */ 14:
                    message.activityPushTipsId = reader.uint32();
                    break;
                case /* ActivityPushTipsState state */ 3:
                    message.state = reader.int32();
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
        /* uint32 activity_push_tips_id = 14; */
        if (message.activityPushTipsId !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.activityPushTipsId);
        /* ActivityPushTipsState state = 3; */
        if (message.state !== 0)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.state);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ActivityPushTipsData
 */
exports.ActivityPushTipsData = new ActivityPushTipsData$Type();
