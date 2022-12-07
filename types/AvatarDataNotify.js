"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarDataNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const AvatarTeam_1 = require("./AvatarTeam");
const AvatarRenameInfo_1 = require("./AvatarRenameInfo");
const AvatarInfo_1 = require("./AvatarInfo");
// @generated message type with reflection information, may provide speed optimized methods
class AvatarDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("AvatarDataNotify", [
            { no: 14, name: "avatar_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => AvatarInfo_1.AvatarInfo },
            { no: 8, name: "avatar_rename_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => AvatarRenameInfo_1.AvatarRenameInfo },
            { no: 7, name: "cur_avatar_team_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "Unk3300_HHKJBGKHIEJ", kind: "scalar", jsonName: "Unk3300HHKJBGKHIEJ", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "temp_avatar_guid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 1, name: "choose_avatar_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 11, name: "avatar_team_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => AvatarTeam_1.AvatarTeam } },
            { no: 5, name: "Unk3300_MDNLGGMGHAF", kind: "scalar", jsonName: "Unk3300MDNLGGMGHAF", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "backup_avatar_team_order_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { avatarList: [], avatarRenameList: [], curAvatarTeamId: 0, unk3300HHKJBGKHIEJ: [], tempAvatarGuidList: [], chooseAvatarGuid: 0n, avatarTeamMap: {}, unk3300MDNLGGMGHAF: [], backupAvatarTeamOrderList: [] };
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
                case /* repeated AvatarInfo avatar_list */ 14:
                    message.avatarList.push(AvatarInfo_1.AvatarInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated AvatarRenameInfo avatar_rename_list */ 8:
                    message.avatarRenameList.push(AvatarRenameInfo_1.AvatarRenameInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 cur_avatar_team_id */ 7:
                    message.curAvatarTeamId = reader.uint32();
                    break;
                case /* repeated uint32 Unk3300_HHKJBGKHIEJ = 6 [json_name = "Unk3300HHKJBGKHIEJ"];*/ 6:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300HHKJBGKHIEJ.push(reader.uint32());
                    else
                        message.unk3300HHKJBGKHIEJ.push(reader.uint32());
                    break;
                case /* repeated uint64 temp_avatar_guid_list */ 15:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.tempAvatarGuidList.push(reader.uint64().toBigInt());
                    else
                        message.tempAvatarGuidList.push(reader.uint64().toBigInt());
                    break;
                case /* uint64 choose_avatar_guid */ 1:
                    message.chooseAvatarGuid = reader.uint64().toBigInt();
                    break;
                case /* map<uint32, AvatarTeam> avatar_team_map */ 11:
                    this.binaryReadMap11(message.avatarTeamMap, reader, options);
                    break;
                case /* repeated uint32 Unk3300_MDNLGGMGHAF = 5 [json_name = "Unk3300MDNLGGMGHAF"];*/ 5:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300MDNLGGMGHAF.push(reader.uint32());
                    else
                        message.unk3300MDNLGGMGHAF.push(reader.uint32());
                    break;
                case /* repeated uint32 backup_avatar_team_order_list */ 3:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.backupAvatarTeamOrderList.push(reader.uint32());
                    else
                        message.backupAvatarTeamOrderList.push(reader.uint32());
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
    binaryReadMap11(map, reader, options) {
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
                default: throw new globalThis.Error("unknown map entry field for field AvatarDataNotify.avatar_team_map");
            }
        }
        map[key ?? 0] = val ?? AvatarTeam_1.AvatarTeam.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated AvatarInfo avatar_list = 14; */
        for (let i = 0; i < message.avatarList.length; i++)
            AvatarInfo_1.AvatarInfo.internalBinaryWrite(message.avatarList[i], writer.tag(14, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated AvatarRenameInfo avatar_rename_list = 8; */
        for (let i = 0; i < message.avatarRenameList.length; i++)
            AvatarRenameInfo_1.AvatarRenameInfo.internalBinaryWrite(message.avatarRenameList[i], writer.tag(8, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 cur_avatar_team_id = 7; */
        if (message.curAvatarTeamId !== 0)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.curAvatarTeamId);
        /* repeated uint32 Unk3300_HHKJBGKHIEJ = 6 [json_name = "Unk3300HHKJBGKHIEJ"]; */
        if (message.unk3300HHKJBGKHIEJ.length) {
            writer.tag(6, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300HHKJBGKHIEJ.length; i++)
                writer.uint32(message.unk3300HHKJBGKHIEJ[i]);
            writer.join();
        }
        /* repeated uint64 temp_avatar_guid_list = 15; */
        if (message.tempAvatarGuidList.length) {
            writer.tag(15, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.tempAvatarGuidList.length; i++)
                writer.uint64(message.tempAvatarGuidList[i]);
            writer.join();
        }
        /* uint64 choose_avatar_guid = 1; */
        if (message.chooseAvatarGuid !== 0n)
            writer.tag(1, runtime_2.WireType.Varint).uint64(message.chooseAvatarGuid);
        /* map<uint32, AvatarTeam> avatar_team_map = 11; */
        for (let k of Object.keys(message.avatarTeamMap)) {
            writer.tag(11, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            AvatarTeam_1.AvatarTeam.internalBinaryWrite(message.avatarTeamMap[k], writer, options);
            writer.join().join();
        }
        /* repeated uint32 Unk3300_MDNLGGMGHAF = 5 [json_name = "Unk3300MDNLGGMGHAF"]; */
        if (message.unk3300MDNLGGMGHAF.length) {
            writer.tag(5, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300MDNLGGMGHAF.length; i++)
                writer.uint32(message.unk3300MDNLGGMGHAF[i]);
            writer.join();
        }
        /* repeated uint32 backup_avatar_team_order_list = 3; */
        if (message.backupAvatarTeamOrderList.length) {
            writer.tag(3, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.backupAvatarTeamOrderList.length; i++)
                writer.uint32(message.backupAvatarTeamOrderList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AvatarDataNotify
 */
exports.AvatarDataNotify = new AvatarDataNotify$Type();
