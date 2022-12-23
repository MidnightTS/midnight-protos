"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomDungeonBriefMuipData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const CustomDungeonSocialMuipData_1 = require("./CustomDungeonSocialMuipData");
const CustomDungeonAbstractMuipData_1 = require("./CustomDungeonAbstractMuipData");
const CustomDungeonSettingMuipData_1 = require("./CustomDungeonSettingMuipData");
// @generated message type with reflection information, may provide speed optimized methods
class CustomDungeonBriefMuipData$Type extends runtime_5.MessageType {
    constructor() {
        super("CustomDungeonBriefMuipData", [
            { no: 1, name: "dungeon_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "dungeon_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "creator_nickname", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "tag_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "setting", kind: "message", T: () => CustomDungeonSettingMuipData_1.CustomDungeonSettingMuipData },
            { no: 6, name: "abstract", kind: "message", T: () => CustomDungeonAbstractMuipData_1.CustomDungeonAbstractMuipData },
            { no: 7, name: "social", kind: "message", T: () => CustomDungeonSocialMuipData_1.CustomDungeonSocialMuipData }
        ]);
    }
    create(value) {
        const message = { dungeonGuid: 0n, dungeonId: 0, creatorNickname: "", tagList: [] };
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
                case /* uint64 dungeon_guid */ 1:
                    message.dungeonGuid = reader.uint64().toBigInt();
                    break;
                case /* uint32 dungeon_id */ 2:
                    message.dungeonId = reader.uint32();
                    break;
                case /* string creator_nickname */ 3:
                    message.creatorNickname = reader.string();
                    break;
                case /* repeated uint32 tag_list */ 4:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.tagList.push(reader.uint32());
                    else
                        message.tagList.push(reader.uint32());
                    break;
                case /* CustomDungeonSettingMuipData setting */ 5:
                    message.setting = CustomDungeonSettingMuipData_1.CustomDungeonSettingMuipData.internalBinaryRead(reader, reader.uint32(), options, message.setting);
                    break;
                case /* CustomDungeonAbstractMuipData abstract */ 6:
                    message.abstract = CustomDungeonAbstractMuipData_1.CustomDungeonAbstractMuipData.internalBinaryRead(reader, reader.uint32(), options, message.abstract);
                    break;
                case /* CustomDungeonSocialMuipData social */ 7:
                    message.social = CustomDungeonSocialMuipData_1.CustomDungeonSocialMuipData.internalBinaryRead(reader, reader.uint32(), options, message.social);
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
        /* uint64 dungeon_guid = 1; */
        if (message.dungeonGuid !== 0n)
            writer.tag(1, runtime_2.WireType.Varint).uint64(message.dungeonGuid);
        /* uint32 dungeon_id = 2; */
        if (message.dungeonId !== 0)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.dungeonId);
        /* string creator_nickname = 3; */
        if (message.creatorNickname !== "")
            writer.tag(3, runtime_2.WireType.LengthDelimited).string(message.creatorNickname);
        /* repeated uint32 tag_list = 4; */
        if (message.tagList.length) {
            writer.tag(4, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.tagList.length; i++)
                writer.uint32(message.tagList[i]);
            writer.join();
        }
        /* CustomDungeonSettingMuipData setting = 5; */
        if (message.setting)
            CustomDungeonSettingMuipData_1.CustomDungeonSettingMuipData.internalBinaryWrite(message.setting, writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* CustomDungeonAbstractMuipData abstract = 6; */
        if (message.abstract)
            CustomDungeonAbstractMuipData_1.CustomDungeonAbstractMuipData.internalBinaryWrite(message.abstract, writer.tag(6, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* CustomDungeonSocialMuipData social = 7; */
        if (message.social)
            CustomDungeonSocialMuipData_1.CustomDungeonSocialMuipData.internalBinaryWrite(message.social, writer.tag(7, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CustomDungeonBriefMuipData
 */
exports.CustomDungeonBriefMuipData = new CustomDungeonBriefMuipData$Type();
