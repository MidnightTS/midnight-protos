"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DungeonRestartInviteNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class DungeonRestartInviteNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("DungeonRestartInviteNotify", [
            { no: 8, name: "dungeon_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "cd", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "player_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "point_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { dungeonId: 0, cd: 0, playerUid: 0, pointId: 0 };
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
                case /* uint32 dungeon_id */ 8:
                    message.dungeonId = reader.uint32();
                    break;
                case /* uint32 cd */ 5:
                    message.cd = reader.uint32();
                    break;
                case /* uint32 player_uid */ 6:
                    message.playerUid = reader.uint32();
                    break;
                case /* uint32 point_id */ 12:
                    message.pointId = reader.uint32();
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
        /* uint32 dungeon_id = 8; */
        if (message.dungeonId !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.dungeonId);
        /* uint32 cd = 5; */
        if (message.cd !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.cd);
        /* uint32 player_uid = 6; */
        if (message.playerUid !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.playerUid);
        /* uint32 point_id = 12; */
        if (message.pointId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.pointId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DungeonRestartInviteNotify
 */
exports.DungeonRestartInviteNotify = new DungeonRestartInviteNotify$Type();
