"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarTeamAllDataNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const AvatarTeam_1 = require("./AvatarTeam");
// @generated message type with reflection information, may provide speed optimized methods
class AvatarTeamAllDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("AvatarTeamAllDataNotify", [
            { no: 2, name: "temp_avatar_guid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 10, name: "backup_avatar_team_order_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "avatar_team_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => AvatarTeam_1.AvatarTeam } }
        ]);
    }
    create(value) {
        const message = { tempAvatarGuidList: [], backupAvatarTeamOrderList: [], avatarTeamMap: {} };
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
                case /* repeated uint64 temp_avatar_guid_list */ 2:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.tempAvatarGuidList.push(reader.uint64().toBigInt());
                    else
                        message.tempAvatarGuidList.push(reader.uint64().toBigInt());
                    break;
                case /* repeated uint32 backup_avatar_team_order_list */ 10:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.backupAvatarTeamOrderList.push(reader.uint32());
                    else
                        message.backupAvatarTeamOrderList.push(reader.uint32());
                    break;
                case /* map<uint32, AvatarTeam> avatar_team_map */ 5:
                    this.binaryReadMap5(message.avatarTeamMap, reader, options);
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
    binaryReadMap5(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = AvatarTeam_1.AvatarTeam.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field AvatarTeamAllDataNotify.avatar_team_map");
            }
        }
        map[key ?? 0] = val ?? AvatarTeam_1.AvatarTeam.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint64 temp_avatar_guid_list = 2; */
        if (message.tempAvatarGuidList.length) {
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.tempAvatarGuidList.length; i++)
                writer.uint64(message.tempAvatarGuidList[i]);
            writer.join();
        }
        /* repeated uint32 backup_avatar_team_order_list = 10; */
        if (message.backupAvatarTeamOrderList.length) {
            writer.tag(10, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.backupAvatarTeamOrderList.length; i++)
                writer.uint32(message.backupAvatarTeamOrderList[i]);
            writer.join();
        }
        /* map<uint32, AvatarTeam> avatar_team_map = 5; */
        for (let k of Object.keys(message.avatarTeamMap)) {
            writer.tag(5, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            AvatarTeam_1.AvatarTeam.internalBinaryWrite(message.avatarTeamMap[k], writer, options);
            writer.join().join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AvatarTeamAllDataNotify
 */
exports.AvatarTeamAllDataNotify = new AvatarTeamAllDataNotify$Type();
