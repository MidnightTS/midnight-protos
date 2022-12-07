"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SealBattleProgressNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class SealBattleProgressNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("SealBattleProgressNotify", [
            { no: 5, name: "end_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "seal_radius", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "max_progress", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "seal_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "progress", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { endTime: 0, sealRadius: 0, maxProgress: 0, sealEntityId: 0, progress: 0 };
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
                case /* uint32 end_time */ 5:
                    message.endTime = reader.uint32();
                    break;
                case /* uint32 seal_radius */ 1:
                    message.sealRadius = reader.uint32();
                    break;
                case /* uint32 max_progress */ 9:
                    message.maxProgress = reader.uint32();
                    break;
                case /* uint32 seal_entity_id */ 6:
                    message.sealEntityId = reader.uint32();
                    break;
                case /* uint32 progress */ 4:
                    message.progress = reader.uint32();
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
        /* uint32 end_time = 5; */
        if (message.endTime !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.endTime);
        /* uint32 seal_radius = 1; */
        if (message.sealRadius !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.sealRadius);
        /* uint32 max_progress = 9; */
        if (message.maxProgress !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.maxProgress);
        /* uint32 seal_entity_id = 6; */
        if (message.sealEntityId !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.sealEntityId);
        /* uint32 progress = 4; */
        if (message.progress !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.progress);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SealBattleProgressNotify
 */
exports.SealBattleProgressNotify = new SealBattleProgressNotify$Type();
