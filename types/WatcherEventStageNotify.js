"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WatcherEventStageNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class WatcherEventStageNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("WatcherEventStageNotify", [
            { no: 2, name: "add_progress", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "watcher_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "stage", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { addProgress: 0, watcherId: 0, stage: 0 };
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
                case /* uint32 add_progress */ 2:
                    message.addProgress = reader.uint32();
                    break;
                case /* uint32 watcher_id */ 15:
                    message.watcherId = reader.uint32();
                    break;
                case /* uint32 stage */ 11:
                    message.stage = reader.uint32();
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
        /* uint32 add_progress = 2; */
        if (message.addProgress !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.addProgress);
        /* uint32 watcher_id = 15; */
        if (message.watcherId !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.watcherId);
        /* uint32 stage = 11; */
        if (message.stage !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.stage);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WatcherEventStageNotify
 */
exports.WatcherEventStageNotify = new WatcherEventStageNotify$Type();
