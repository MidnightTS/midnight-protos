"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoinCollectPlayerInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const CoinCollectTeamAvatarInfo_1 = require("./CoinCollectTeamAvatarInfo");
// @generated message type with reflection information, may provide speed optimized methods
class CoinCollectPlayerInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("CoinCollectPlayerInfo", [
            { no: 15, name: "player_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "is_prepare", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "choose_skill_no", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "avatar_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CoinCollectTeamAvatarInfo_1.CoinCollectTeamAvatarInfo },
            { no: 6, name: "player_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { playerUid: 0, isPrepare: false, chooseSkillNo: 0, avatarInfoList: [], playerName: "" };
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
                case /* uint32 player_uid */ 15:
                    message.playerUid = reader.uint32();
                    break;
                case /* bool is_prepare */ 7:
                    message.isPrepare = reader.bool();
                    break;
                case /* uint32 choose_skill_no */ 10:
                    message.chooseSkillNo = reader.uint32();
                    break;
                case /* repeated CoinCollectTeamAvatarInfo avatar_info_list */ 2:
                    message.avatarInfoList.push(CoinCollectTeamAvatarInfo_1.CoinCollectTeamAvatarInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* string player_name */ 6:
                    message.playerName = reader.string();
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
        /* uint32 player_uid = 15; */
        if (message.playerUid !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.playerUid);
        /* bool is_prepare = 7; */
        if (message.isPrepare !== false)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.isPrepare);
        /* uint32 choose_skill_no = 10; */
        if (message.chooseSkillNo !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.chooseSkillNo);
        /* repeated CoinCollectTeamAvatarInfo avatar_info_list = 2; */
        for (let i = 0; i < message.avatarInfoList.length; i++)
            CoinCollectTeamAvatarInfo_1.CoinCollectTeamAvatarInfo.internalBinaryWrite(message.avatarInfoList[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* string player_name = 6; */
        if (message.playerName !== "")
            writer.tag(6, runtime_1.WireType.LengthDelimited).string(message.playerName);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CoinCollectPlayerInfo
 */
exports.CoinCollectPlayerInfo = new CoinCollectPlayerInfo$Type();
