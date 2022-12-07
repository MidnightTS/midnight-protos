"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DungeonPlayerDieReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const PlayerDieType_1 = require("./PlayerDieType");
// @generated message type with reflection information, may provide speed optimized methods
class DungeonPlayerDieReq$Type extends runtime_5.MessageType {
    constructor() {
        super("DungeonPlayerDieReq", [
            { no: 4, name: "die_type", kind: "enum", T: () => ["PlayerDieType", PlayerDieType_1.PlayerDieType, "PLAYER_DIE_TYPE_"] },
            { no: 6, name: "dungeon_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { dieType: 0, dungeonId: 0 };
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
                case /* PlayerDieType die_type */ 4:
                    message.dieType = reader.int32();
                    break;
                case /* uint32 dungeon_id */ 6:
                    message.dungeonId = reader.uint32();
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
        /* PlayerDieType die_type = 4; */
        if (message.dieType !== 0)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.dieType);
        /* uint32 dungeon_id = 6; */
        if (message.dungeonId !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.dungeonId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DungeonPlayerDieReq
 */
exports.DungeonPlayerDieReq = new DungeonPlayerDieReq$Type();
