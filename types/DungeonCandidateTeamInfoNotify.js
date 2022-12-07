"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DungeonCandidateTeamInfoNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const DungeonCandidateTeamPlayerState_1 = require("./DungeonCandidateTeamPlayerState");
const DungeonCandidateTeamAvatar_1 = require("./DungeonCandidateTeamAvatar");
// @generated message type with reflection information, may provide speed optimized methods
class DungeonCandidateTeamInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("DungeonCandidateTeamInfoNotify", [
            { no: 2, name: "ready_player_uid", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "match_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "dungeon_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "avatar_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => DungeonCandidateTeamAvatar_1.DungeonCandidateTeamAvatar },
            { no: 10, name: "player_state_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "enum", T: () => ["DungeonCandidateTeamPlayerState", DungeonCandidateTeamPlayerState_1.DungeonCandidateTeamPlayerState, "DUNGEON_CANDIDATE_TEAM_PLAYER_STATE_"] } }
        ]);
    }
    create(value) {
        const message = { readyPlayerUid: [], matchType: 0, dungeonId: 0, avatarList: [], playerStateMap: {} };
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
                case /* repeated uint32 ready_player_uid */ 2:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.readyPlayerUid.push(reader.uint32());
                    else
                        message.readyPlayerUid.push(reader.uint32());
                    break;
                case /* uint32 match_type */ 12:
                    message.matchType = reader.uint32();
                    break;
                case /* uint32 dungeon_id */ 8:
                    message.dungeonId = reader.uint32();
                    break;
                case /* repeated DungeonCandidateTeamAvatar avatar_list */ 1:
                    message.avatarList.push(DungeonCandidateTeamAvatar_1.DungeonCandidateTeamAvatar.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* map<uint32, DungeonCandidateTeamPlayerState> player_state_map */ 10:
                    this.binaryReadMap10(message.playerStateMap, reader, options);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap10(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.int32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field DungeonCandidateTeamInfoNotify.player_state_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 ready_player_uid = 2; */
        if (message.readyPlayerUid.length) {
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.readyPlayerUid.length; i++)
                writer.uint32(message.readyPlayerUid[i]);
            writer.join();
        }
        /* uint32 match_type = 12; */
        if (message.matchType !== 0)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.matchType);
        /* uint32 dungeon_id = 8; */
        if (message.dungeonId !== 0)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.dungeonId);
        /* repeated DungeonCandidateTeamAvatar avatar_list = 1; */
        for (let i = 0; i < message.avatarList.length; i++)
            DungeonCandidateTeamAvatar_1.DungeonCandidateTeamAvatar.internalBinaryWrite(message.avatarList[i], writer.tag(1, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* map<uint32, DungeonCandidateTeamPlayerState> player_state_map = 10; */
        for (let k of Object.keys(message.playerStateMap))
            writer.tag(10, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).int32(message.playerStateMap[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DungeonCandidateTeamInfoNotify
 */
exports.DungeonCandidateTeamInfoNotify = new DungeonCandidateTeamInfoNotify$Type();
