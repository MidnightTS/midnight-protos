"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityUpdateWatcherNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ActivityWatcherInfo_1 = require("./ActivityWatcherInfo");
// @generated message type with reflection information, may provide speed optimized methods
class ActivityUpdateWatcherNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("ActivityUpdateWatcherNotify", [
            { no: 9, name: "activity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "watcher_info", kind: "message", T: () => ActivityWatcherInfo_1.ActivityWatcherInfo }
        ]);
    }
    create(value) {
        const message = { activityId: 0 };
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
                case /* uint32 activity_id */ 9:
                    message.activityId = reader.uint32();
                    break;
                case /* ActivityWatcherInfo watcher_info */ 5:
                    message.watcherInfo = ActivityWatcherInfo_1.ActivityWatcherInfo.internalBinaryRead(reader, reader.uint32(), options, message.watcherInfo);
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
        /* uint32 activity_id = 9; */
        if (message.activityId !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.activityId);
        /* ActivityWatcherInfo watcher_info = 5; */
        if (message.watcherInfo)
            ActivityWatcherInfo_1.ActivityWatcherInfo.internalBinaryWrite(message.watcherInfo, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ActivityUpdateWatcherNotify
 */
exports.ActivityUpdateWatcherNotify = new ActivityUpdateWatcherNotify$Type();
