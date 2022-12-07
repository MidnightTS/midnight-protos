"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DungeonCandidateTeamDismissNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const DungeonCandidateTeamPlayerDismissReason_1 = require("./DungeonCandidateTeamPlayerDismissReason");
// @generated message type with reflection information, may provide speed optimized methods
class DungeonCandidateTeamDismissNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("DungeonCandidateTeamDismissNotify", [
            { no: 7, name: "reason", kind: "enum", T: () => ["DungeonCandidateTeamPlayerDismissReason", DungeonCandidateTeamPlayerDismissReason_1.DungeonCandidateTeamPlayerDismissReason, "DUNGEON_CANDIDATE_TEAM_PLAYER_DISMISS_REASON_"] },
            { no: 1, name: "player_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { reason: 0, playerUid: 0 };
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
                case /* DungeonCandidateTeamPlayerDismissReason reason */ 7:
                    message.reason = reader.int32();
                    break;
                case /* uint32 player_uid */ 1:
                    message.playerUid = reader.uint32();
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
        /* DungeonCandidateTeamPlayerDismissReason reason = 7; */
        if (message.reason !== 0)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.reason);
        /* uint32 player_uid = 1; */
        if (message.playerUid !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.playerUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DungeonCandidateTeamDismissNotify
 */
exports.DungeonCandidateTeamDismissNotify = new DungeonCandidateTeamDismissNotify$Type();
