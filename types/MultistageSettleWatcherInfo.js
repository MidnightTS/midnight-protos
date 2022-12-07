"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultistageSettleWatcherInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class MultistageSettleWatcherInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("MultistageSettleWatcherInfo", [
            { no: 3, name: "is_inverse", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "cur_progress", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "watcher_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "total_progress", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isInverse: false, curProgress: 0, watcherId: 0, totalProgress: 0 };
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
                case /* bool is_inverse */ 3:
                    message.isInverse = reader.bool();
                    break;
                case /* uint32 cur_progress */ 6:
                    message.curProgress = reader.uint32();
                    break;
                case /* uint32 watcher_id */ 5:
                    message.watcherId = reader.uint32();
                    break;
                case /* uint32 total_progress */ 11:
                    message.totalProgress = reader.uint32();
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
        /* bool is_inverse = 3; */
        if (message.isInverse !== false)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.isInverse);
        /* uint32 cur_progress = 6; */
        if (message.curProgress !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.curProgress);
        /* uint32 watcher_id = 5; */
        if (message.watcherId !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.watcherId);
        /* uint32 total_progress = 11; */
        if (message.totalProgress !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.totalProgress);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MultistageSettleWatcherInfo
 */
exports.MultistageSettleWatcherInfo = new MultistageSettleWatcherInfo$Type();
