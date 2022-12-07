"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DungeonCandidateTeamInviteNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class DungeonCandidateTeamInviteNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("DungeonCandidateTeamInviteNotify", [
            { no: 11, name: "valid_deadline_time_sec", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "player_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "dungeon_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { validDeadlineTimeSec: 0, playerUid: 0, dungeonId: 0 };
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
                case /* uint32 valid_deadline_time_sec */ 11:
                    message.validDeadlineTimeSec = reader.uint32();
                    break;
                case /* uint32 player_uid */ 4:
                    message.playerUid = reader.uint32();
                    break;
                case /* uint32 dungeon_id */ 13:
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
        /* uint32 valid_deadline_time_sec = 11; */
        if (message.validDeadlineTimeSec !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.validDeadlineTimeSec);
        /* uint32 player_uid = 4; */
        if (message.playerUid !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.playerUid);
        /* uint32 dungeon_id = 13; */
        if (message.dungeonId !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.dungeonId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DungeonCandidateTeamInviteNotify
 */
exports.DungeonCandidateTeamInviteNotify = new DungeonCandidateTeamInviteNotify$Type();
