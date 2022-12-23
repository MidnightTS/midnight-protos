"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGWeekChallengeInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class GCGWeekChallengeInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGWeekChallengeInfo", [
            { no: 9, name: "npc_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "unlock_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "is_finished", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { npcId: 0, unlockTime: 0, isFinished: false };
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
                case /* uint32 npc_id */ 9:
                    message.npcId = reader.uint32();
                    break;
                case /* uint32 unlock_time */ 8:
                    message.unlockTime = reader.uint32();
                    break;
                case /* bool is_finished */ 12:
                    message.isFinished = reader.bool();
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
        /* uint32 npc_id = 9; */
        if (message.npcId !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.npcId);
        /* uint32 unlock_time = 8; */
        if (message.unlockTime !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.unlockTime);
        /* bool is_finished = 12; */
        if (message.isFinished !== false)
            writer.tag(12, runtime_1.WireType.Varint).bool(message.isFinished);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGWeekChallengeInfo
 */
exports.GCGWeekChallengeInfo = new GCGWeekChallengeInfo$Type();
