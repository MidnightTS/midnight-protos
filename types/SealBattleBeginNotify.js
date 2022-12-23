"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SealBattleBeginNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const SealBattleType_1 = require("./SealBattleType");
// @generated message type with reflection information, may provide speed optimized methods
class SealBattleBeginNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("SealBattleBeginNotify", [
            { no: 10, name: "battle_type", kind: "enum", T: () => ["SealBattleType", SealBattleType_1.SealBattleType, "SEAL_BATTLE_TYPE_"] },
            { no: 7, name: "seal_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "seal_max_progress", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "seal_radius", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { battleType: 0, sealEntityId: 0, sealMaxProgress: 0, sealRadius: 0 };
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
                case /* SealBattleType battle_type */ 10:
                    message.battleType = reader.int32();
                    break;
                case /* uint32 seal_entity_id */ 7:
                    message.sealEntityId = reader.uint32();
                    break;
                case /* uint32 seal_max_progress */ 13:
                    message.sealMaxProgress = reader.uint32();
                    break;
                case /* uint32 seal_radius */ 5:
                    message.sealRadius = reader.uint32();
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
        /* SealBattleType battle_type = 10; */
        if (message.battleType !== 0)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.battleType);
        /* uint32 seal_entity_id = 7; */
        if (message.sealEntityId !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.sealEntityId);
        /* uint32 seal_max_progress = 13; */
        if (message.sealMaxProgress !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.sealMaxProgress);
        /* uint32 seal_radius = 5; */
        if (message.sealRadius !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.sealRadius);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SealBattleBeginNotify
 */
exports.SealBattleBeginNotify = new SealBattleBeginNotify$Type();
