"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomDungeonBrief = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const CustomDungeonSetting_1 = require("./CustomDungeonSetting");
const CustomDungeonState_1 = require("./CustomDungeonState");
const CustomDungeonSocial_1 = require("./CustomDungeonSocial");
const CustomDungeonAbstract_1 = require("./CustomDungeonAbstract");
// @generated message type with reflection information, may provide speed optimized methods
class CustomDungeonBrief$Type extends runtime_5.MessageType {
    constructor() {
        super("CustomDungeonBrief", [
            { no: 14, name: "dungeon_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 8, name: "abstract", kind: "message", T: () => CustomDungeonAbstract_1.CustomDungeonAbstract },
            { no: 4, name: "tag_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "is_psn_platform", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "social", kind: "message", T: () => CustomDungeonSocial_1.CustomDungeonSocial },
            { no: 2, name: "state", kind: "enum", T: () => ["CustomDungeonState", CustomDungeonState_1.CustomDungeonState, "CUSTOM_DUNGEON_STATE_"] },
            { no: 15, name: "battle_min_cost_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "dungeon_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "setting", kind: "message", T: () => CustomDungeonSetting_1.CustomDungeonSetting },
            { no: 12, name: "last_save_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { dungeonGuid: 0n, tagList: [], isPsnPlatform: false, state: 0, battleMinCostTime: 0, dungeonId: 0, lastSaveTime: 0 };
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
                case /* uint64 dungeon_guid */ 14:
                    message.dungeonGuid = reader.uint64().toBigInt();
                    break;
                case /* CustomDungeonAbstract abstract */ 8:
                    message.abstract = CustomDungeonAbstract_1.CustomDungeonAbstract.internalBinaryRead(reader, reader.uint32(), options, message.abstract);
                    break;
                case /* repeated uint32 tag_list */ 4:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.tagList.push(reader.uint32());
                    else
                        message.tagList.push(reader.uint32());
                    break;
                case /* bool is_psn_platform */ 9:
                    message.isPsnPlatform = reader.bool();
                    break;
                case /* CustomDungeonSocial social */ 10:
                    message.social = CustomDungeonSocial_1.CustomDungeonSocial.internalBinaryRead(reader, reader.uint32(), options, message.social);
                    break;
                case /* CustomDungeonState state */ 2:
                    message.state = reader.int32();
                    break;
                case /* uint32 battle_min_cost_time */ 15:
                    message.battleMinCostTime = reader.uint32();
                    break;
                case /* uint32 dungeon_id */ 3:
                    message.dungeonId = reader.uint32();
                    break;
                case /* CustomDungeonSetting setting */ 7:
                    message.setting = CustomDungeonSetting_1.CustomDungeonSetting.internalBinaryRead(reader, reader.uint32(), options, message.setting);
                    break;
                case /* uint32 last_save_time */ 12:
                    message.lastSaveTime = reader.uint32();
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
        /* uint64 dungeon_guid = 14; */
        if (message.dungeonGuid !== 0n)
            writer.tag(14, runtime_2.WireType.Varint).uint64(message.dungeonGuid);
        /* CustomDungeonAbstract abstract = 8; */
        if (message.abstract)
            CustomDungeonAbstract_1.CustomDungeonAbstract.internalBinaryWrite(message.abstract, writer.tag(8, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 tag_list = 4; */
        if (message.tagList.length) {
            writer.tag(4, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.tagList.length; i++)
                writer.uint32(message.tagList[i]);
            writer.join();
        }
        /* bool is_psn_platform = 9; */
        if (message.isPsnPlatform !== false)
            writer.tag(9, runtime_2.WireType.Varint).bool(message.isPsnPlatform);
        /* CustomDungeonSocial social = 10; */
        if (message.social)
            CustomDungeonSocial_1.CustomDungeonSocial.internalBinaryWrite(message.social, writer.tag(10, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* CustomDungeonState state = 2; */
        if (message.state !== 0)
            writer.tag(2, runtime_2.WireType.Varint).int32(message.state);
        /* uint32 battle_min_cost_time = 15; */
        if (message.battleMinCostTime !== 0)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.battleMinCostTime);
        /* uint32 dungeon_id = 3; */
        if (message.dungeonId !== 0)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.dungeonId);
        /* CustomDungeonSetting setting = 7; */
        if (message.setting)
            CustomDungeonSetting_1.CustomDungeonSetting.internalBinaryWrite(message.setting, writer.tag(7, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 last_save_time = 12; */
        if (message.lastSaveTime !== 0)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.lastSaveTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CustomDungeonBrief
 */
exports.CustomDungeonBrief = new CustomDungeonBrief$Type();
