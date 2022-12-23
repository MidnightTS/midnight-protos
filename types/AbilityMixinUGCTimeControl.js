"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityMixinUGCTimeControl = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMixinUGCTimeControl$Type extends runtime_5.MessageType {
    constructor() {
        super("AbilityMixinUGCTimeControl", [
            { no: 12, name: "start_move_time_ms", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 9, name: "start_move_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { startMoveTimeMs: 0n, startMoveTime: 0 };
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
                case /* uint64 start_move_time_ms */ 12:
                    message.startMoveTimeMs = reader.uint64().toBigInt();
                    break;
                case /* uint32 start_move_time */ 9:
                    message.startMoveTime = reader.uint32();
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
        /* uint64 start_move_time_ms = 12; */
        if (message.startMoveTimeMs !== 0n)
            writer.tag(12, runtime_1.WireType.Varint).uint64(message.startMoveTimeMs);
        /* uint32 start_move_time = 9; */
        if (message.startMoveTime !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.startMoveTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AbilityMixinUGCTimeControl
 */
exports.AbilityMixinUGCTimeControl = new AbilityMixinUGCTimeControl$Type();
