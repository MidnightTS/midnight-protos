"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityTakeWatcherRewardReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ActivityTakeWatcherRewardReq$Type extends runtime_5.MessageType {
    constructor() {
        super("ActivityTakeWatcherRewardReq", [
            { no: 14, name: "watcher_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "activity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { watcherId: 0, activityId: 0 };
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
                case /* uint32 watcher_id */ 14:
                    message.watcherId = reader.uint32();
                    break;
                case /* uint32 activity_id */ 4:
                    message.activityId = reader.uint32();
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
        /* uint32 watcher_id = 14; */
        if (message.watcherId !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.watcherId);
        /* uint32 activity_id = 4; */
        if (message.activityId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.activityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ActivityTakeWatcherRewardReq
 */
exports.ActivityTakeWatcherRewardReq = new ActivityTakeWatcherRewardReq$Type();