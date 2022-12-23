"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnterCustomDungeonRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const CustomDungeon_1 = require("./CustomDungeon");
const EnterCustomDungeonType_1 = require("./EnterCustomDungeonType");
// @generated message type with reflection information, may provide speed optimized methods
class EnterCustomDungeonRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("EnterCustomDungeonRsp", [
            { no: 3, name: "room_cost_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 15, name: "enter_type", kind: "enum", T: () => ["EnterCustomDungeonType", EnterCustomDungeonType_1.EnterCustomDungeonType, "ENTER_CUSTOM_DUNGEON_TYPE_"] },
            { no: 12, name: "custom_dungeon", kind: "message", T: () => CustomDungeon_1.CustomDungeon },
            { no: 8, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { roomCostMap: {}, enterType: 0, retcode: 0 };
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
                case /* map<uint32, uint32> room_cost_map */ 3:
                    this.binaryReadMap3(message.roomCostMap, reader, options);
                    break;
                case /* EnterCustomDungeonType enter_type */ 15:
                    message.enterType = reader.int32();
                    break;
                case /* CustomDungeon custom_dungeon */ 12:
                    message.customDungeon = CustomDungeon_1.CustomDungeon.internalBinaryRead(reader, reader.uint32(), options, message.customDungeon);
                    break;
                case /* int32 retcode */ 8:
                    message.retcode = reader.int32();
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
    binaryReadMap3(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field EnterCustomDungeonRsp.room_cost_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, uint32> room_cost_map = 3; */
        for (let k of Object.keys(message.roomCostMap))
            writer.tag(3, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.roomCostMap[k]).join();
        /* EnterCustomDungeonType enter_type = 15; */
        if (message.enterType !== 0)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.enterType);
        /* CustomDungeon custom_dungeon = 12; */
        if (message.customDungeon)
            CustomDungeon_1.CustomDungeon.internalBinaryWrite(message.customDungeon, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* int32 retcode = 8; */
        if (message.retcode !== 0)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EnterCustomDungeonRsp
 */
exports.EnterCustomDungeonRsp = new EnterCustomDungeonRsp$Type();
