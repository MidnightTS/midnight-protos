"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DailyDungeonEntryInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const DungeonEntryInfo_1 = require("./DungeonEntryInfo");
// @generated message type with reflection information, may provide speed optimized methods
class DailyDungeonEntryInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("DailyDungeonEntryInfo", [
            { no: 6, name: "recommend_dungeon_entry_info", kind: "message", T: () => DungeonEntryInfo_1.DungeonEntryInfo },
            { no: 10, name: "dungeon_entry_config_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "recommend_dungeon_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "dungeon_entry_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { dungeonEntryConfigId: 0, recommendDungeonId: 0, dungeonEntryId: 0 };
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
                case /* DungeonEntryInfo recommend_dungeon_entry_info */ 6:
                    message.recommendDungeonEntryInfo = DungeonEntryInfo_1.DungeonEntryInfo.internalBinaryRead(reader, reader.uint32(), options, message.recommendDungeonEntryInfo);
                    break;
                case /* uint32 dungeon_entry_config_id */ 10:
                    message.dungeonEntryConfigId = reader.uint32();
                    break;
                case /* uint32 recommend_dungeon_id */ 5:
                    message.recommendDungeonId = reader.uint32();
                    break;
                case /* uint32 dungeon_entry_id */ 12:
                    message.dungeonEntryId = reader.uint32();
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
        /* DungeonEntryInfo recommend_dungeon_entry_info = 6; */
        if (message.recommendDungeonEntryInfo)
            DungeonEntryInfo_1.DungeonEntryInfo.internalBinaryWrite(message.recommendDungeonEntryInfo, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 dungeon_entry_config_id = 10; */
        if (message.dungeonEntryConfigId !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.dungeonEntryConfigId);
        /* uint32 recommend_dungeon_id = 5; */
        if (message.recommendDungeonId !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.recommendDungeonId);
        /* uint32 dungeon_entry_id = 12; */
        if (message.dungeonEntryId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.dungeonEntryId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DailyDungeonEntryInfo
 */
exports.DailyDungeonEntryInfo = new DailyDungeonEntryInfo$Type();
