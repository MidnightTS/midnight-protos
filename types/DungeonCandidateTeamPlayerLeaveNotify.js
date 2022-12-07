"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DungeonCandidateTeamPlayerLeaveNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const DungeonCandidateTeamPlayerLeaveReason_1 = require("./DungeonCandidateTeamPlayerLeaveReason");
// @generated message type with reflection information, may provide speed optimized methods
class DungeonCandidateTeamPlayerLeaveNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("DungeonCandidateTeamPlayerLeaveNotify", [
            { no: 7, name: "player_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "reason", kind: "enum", T: () => ["DungeonCandidateTeamPlayerLeaveReason", DungeonCandidateTeamPlayerLeaveReason_1.DungeonCandidateTeamPlayerLeaveReason, "DUNGEON_CANDIDATE_TEAM_PLAYER_LEAVE_REASON_"] }
        ]);
    }
    create(value) {
        const message = { playerUid: 0, reason: 0 };
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
                case /* uint32 player_uid */ 7:
                    message.playerUid = reader.uint32();
                    break;
                case /* DungeonCandidateTeamPlayerLeaveReason reason */ 1:
                    message.reason = reader.int32();
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
        /* uint32 player_uid = 7; */
        if (message.playerUid !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.playerUid);
        /* DungeonCandidateTeamPlayerLeaveReason reason = 1; */
        if (message.reason !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.reason);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DungeonCandidateTeamPlayerLeaveNotify
 */
exports.DungeonCandidateTeamPlayerLeaveNotify = new DungeonCandidateTeamPlayerLeaveNotify$Type();
