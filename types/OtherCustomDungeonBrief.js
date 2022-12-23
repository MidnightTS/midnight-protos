"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtherCustomDungeonBrief = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const SocialDetail_1 = require("./SocialDetail");
const CustomDungeonAbstract_1 = require("./CustomDungeonAbstract");
const CustomDungeonSocial_1 = require("./CustomDungeonSocial");
const CustomDungeonSetting_1 = require("./CustomDungeonSetting");
// @generated message type with reflection information, may provide speed optimized methods
class OtherCustomDungeonBrief$Type extends runtime_5.MessageType {
    constructor() {
        super("OtherCustomDungeonBrief", [
            { no: 12, name: "is_adventure_dungeon", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "battle_min_cost_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "tag_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "is_stored", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "dungeon_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "is_psn_platform", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "dungeon_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "setting", kind: "message", T: () => CustomDungeonSetting_1.CustomDungeonSetting },
            { no: 14, name: "social", kind: "message", T: () => CustomDungeonSocial_1.CustomDungeonSocial },
            { no: 4, name: "abstract", kind: "message", T: () => CustomDungeonAbstract_1.CustomDungeonAbstract },
            { no: 11, name: "creator_detail", kind: "message", T: () => SocialDetail_1.SocialDetail }
        ]);
    }
    create(value) {
        const message = { isAdventureDungeon: false, battleMinCostTime: 0, tagList: [], isStored: false, dungeonId: 0, isPsnPlatform: false, dungeonGuid: 0n };
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
                case /* bool is_adventure_dungeon */ 12:
                    message.isAdventureDungeon = reader.bool();
                    break;
                case /* uint32 battle_min_cost_time */ 10:
                    message.battleMinCostTime = reader.uint32();
                    break;
                case /* repeated uint32 tag_list */ 13:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.tagList.push(reader.uint32());
                    else
                        message.tagList.push(reader.uint32());
                    break;
                case /* bool is_stored */ 8:
                    message.isStored = reader.bool();
                    break;
                case /* uint32 dungeon_id */ 15:
                    message.dungeonId = reader.uint32();
                    break;
                case /* bool is_psn_platform */ 1:
                    message.isPsnPlatform = reader.bool();
                    break;
                case /* uint64 dungeon_guid */ 7:
                    message.dungeonGuid = reader.uint64().toBigInt();
                    break;
                case /* CustomDungeonSetting setting */ 2:
                    message.setting = CustomDungeonSetting_1.CustomDungeonSetting.internalBinaryRead(reader, reader.uint32(), options, message.setting);
                    break;
                case /* CustomDungeonSocial social */ 14:
                    message.social = CustomDungeonSocial_1.CustomDungeonSocial.internalBinaryRead(reader, reader.uint32(), options, message.social);
                    break;
                case /* CustomDungeonAbstract abstract */ 4:
                    message.abstract = CustomDungeonAbstract_1.CustomDungeonAbstract.internalBinaryRead(reader, reader.uint32(), options, message.abstract);
                    break;
                case /* SocialDetail creator_detail */ 11:
                    message.creatorDetail = SocialDetail_1.SocialDetail.internalBinaryRead(reader, reader.uint32(), options, message.creatorDetail);
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
    internalBinaryWrite(message, writer, options) {
        /* bool is_adventure_dungeon = 12; */
        if (message.isAdventureDungeon !== false)
            writer.tag(12, runtime_2.WireType.Varint).bool(message.isAdventureDungeon);
        /* uint32 battle_min_cost_time = 10; */
        if (message.battleMinCostTime !== 0)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.battleMinCostTime);
        /* repeated uint32 tag_list = 13; */
        if (message.tagList.length) {
            writer.tag(13, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.tagList.length; i++)
                writer.uint32(message.tagList[i]);
            writer.join();
        }
        /* bool is_stored = 8; */
        if (message.isStored !== false)
            writer.tag(8, runtime_2.WireType.Varint).bool(message.isStored);
        /* uint32 dungeon_id = 15; */
        if (message.dungeonId !== 0)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.dungeonId);
        /* bool is_psn_platform = 1; */
        if (message.isPsnPlatform !== false)
            writer.tag(1, runtime_2.WireType.Varint).bool(message.isPsnPlatform);
        /* uint64 dungeon_guid = 7; */
        if (message.dungeonGuid !== 0n)
            writer.tag(7, runtime_2.WireType.Varint).uint64(message.dungeonGuid);
        /* CustomDungeonSetting setting = 2; */
        if (message.setting)
            CustomDungeonSetting_1.CustomDungeonSetting.internalBinaryWrite(message.setting, writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* CustomDungeonSocial social = 14; */
        if (message.social)
            CustomDungeonSocial_1.CustomDungeonSocial.internalBinaryWrite(message.social, writer.tag(14, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* CustomDungeonAbstract abstract = 4; */
        if (message.abstract)
            CustomDungeonAbstract_1.CustomDungeonAbstract.internalBinaryWrite(message.abstract, writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* SocialDetail creator_detail = 11; */
        if (message.creatorDetail)
            SocialDetail_1.SocialDetail.internalBinaryWrite(message.creatorDetail, writer.tag(11, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message OtherCustomDungeonBrief
 */
exports.OtherCustomDungeonBrief = new OtherCustomDungeonBrief$Type();
