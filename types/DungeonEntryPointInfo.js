"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DungeonEntryPointInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const DungeonEntryInfo_1 = require("./DungeonEntryInfo");
// @generated message type with reflection information, may provide speed optimized methods
class DungeonEntryPointInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("DungeonEntryPointInfo", [
            { no: 12, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "dungeon_entry_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => DungeonEntryInfo_1.DungeonEntryInfo },
            { no: 4, name: "recommend_dungeon_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "point_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { sceneId: 0, dungeonEntryList: [], recommendDungeonId: 0, pointId: 0 };
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
                case /* uint32 scene_id */ 12:
                    message.sceneId = reader.uint32();
                    break;
                case /* repeated DungeonEntryInfo dungeon_entry_list */ 14:
                    message.dungeonEntryList.push(DungeonEntryInfo_1.DungeonEntryInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 recommend_dungeon_id */ 4:
                    message.recommendDungeonId = reader.uint32();
                    break;
                case /* uint32 point_id */ 1:
                    message.pointId = reader.uint32();
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
        /* uint32 scene_id = 12; */
        if (message.sceneId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.sceneId);
        /* repeated DungeonEntryInfo dungeon_entry_list = 14; */
        for (let i = 0; i < message.dungeonEntryList.length; i++)
            DungeonEntryInfo_1.DungeonEntryInfo.internalBinaryWrite(message.dungeonEntryList[i], writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 recommend_dungeon_id = 4; */
        if (message.recommendDungeonId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.recommendDungeonId);
        /* uint32 point_id = 1; */
        if (message.pointId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.pointId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DungeonEntryPointInfo
 */
exports.DungeonEntryPointInfo = new DungeonEntryPointInfo$Type();
