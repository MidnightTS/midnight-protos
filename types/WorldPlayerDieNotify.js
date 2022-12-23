"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldPlayerDieNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const PlayerDieType_1 = require("./PlayerDieType");
// @generated message type with reflection information, may provide speed optimized methods
class WorldPlayerDieNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("WorldPlayerDieNotify", [
            { no: 3, name: "murderer_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "die_type", kind: "enum", T: () => ["PlayerDieType", PlayerDieType_1.PlayerDieType, "PLAYER_DIE_TYPE_"] },
            { no: 6, name: "monster_id", kind: "scalar", oneof: "entity", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "gadget_id", kind: "scalar", oneof: "entity", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { murdererEntityId: 0, dieType: 0, entity: { oneofKind: undefined } };
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
                case /* uint32 murderer_entity_id */ 3:
                    message.murdererEntityId = reader.uint32();
                    break;
                case /* PlayerDieType die_type */ 13:
                    message.dieType = reader.int32();
                    break;
                case /* uint32 monster_id */ 6:
                    message.entity = {
                        oneofKind: "monsterId",
                        monsterId: reader.uint32()
                    };
                    break;
                case /* uint32 gadget_id */ 12:
                    message.entity = {
                        oneofKind: "gadgetId",
                        gadgetId: reader.uint32()
                    };
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
        /* uint32 murderer_entity_id = 3; */
        if (message.murdererEntityId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.murdererEntityId);
        /* PlayerDieType die_type = 13; */
        if (message.dieType !== 0)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.dieType);
        /* uint32 monster_id = 6; */
        if (message.entity.oneofKind === "monsterId")
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.entity.monsterId);
        /* uint32 gadget_id = 12; */
        if (message.entity.oneofKind === "gadgetId")
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.entity.gadgetId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WorldPlayerDieNotify
 */
exports.WorldPlayerDieNotify = new WorldPlayerDieNotify$Type();
