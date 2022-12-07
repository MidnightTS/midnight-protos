"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DungeonEntryInfoRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const DungeonEntryPointInfo_1 = require("./DungeonEntryPointInfo");
const DungeonEntryInfo_1 = require("./DungeonEntryInfo");
// @generated message type with reflection information, may provide speed optimized methods
class DungeonEntryInfoRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("DungeonEntryInfoRsp", [
            { no: 8, name: "dungeon_entry_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => DungeonEntryInfo_1.DungeonEntryInfo },
            { no: 15, name: "recommend_dungeon_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "dungeon_entry_point_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => DungeonEntryPointInfo_1.DungeonEntryPointInfo },
            { no: 14, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 12, name: "point_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { dungeonEntryList: [], recommendDungeonId: 0, dungeonEntryPointList: [], retcode: 0, pointId: 0 };
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
                case /* repeated DungeonEntryInfo dungeon_entry_list */ 8:
                    message.dungeonEntryList.push(DungeonEntryInfo_1.DungeonEntryInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 recommend_dungeon_id */ 15:
                    message.recommendDungeonId = reader.uint32();
                    break;
                case /* repeated DungeonEntryPointInfo dungeon_entry_point_list */ 10:
                    message.dungeonEntryPointList.push(DungeonEntryPointInfo_1.DungeonEntryPointInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* int32 retcode */ 14:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 point_id */ 12:
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
        /* repeated DungeonEntryInfo dungeon_entry_list = 8; */
        for (let i = 0; i < message.dungeonEntryList.length; i++)
            DungeonEntryInfo_1.DungeonEntryInfo.internalBinaryWrite(message.dungeonEntryList[i], writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 recommend_dungeon_id = 15; */
        if (message.recommendDungeonId !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.recommendDungeonId);
        /* repeated DungeonEntryPointInfo dungeon_entry_point_list = 10; */
        for (let i = 0; i < message.dungeonEntryPointList.length; i++)
            DungeonEntryPointInfo_1.DungeonEntryPointInfo.internalBinaryWrite(message.dungeonEntryPointList[i], writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* int32 retcode = 14; */
        if (message.retcode !== 0)
            writer.tag(14, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 point_id = 12; */
        if (message.pointId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.pointId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DungeonEntryInfoRsp
 */
exports.DungeonEntryInfoRsp = new DungeonEntryInfoRsp$Type();
