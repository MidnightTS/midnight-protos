"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomDungeon = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const CustomDungeonSetting_1 = require("./CustomDungeonSetting");
const CustomDungeonRoom_1 = require("./CustomDungeonRoom");
// @generated message type with reflection information, may provide speed optimized methods
class CustomDungeon$Type extends runtime_5.MessageType {
    constructor() {
        super("CustomDungeon", [
            { no: 2, name: "dungeon_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "room_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CustomDungeonRoom_1.CustomDungeonRoom },
            { no: 8, name: "setting", kind: "message", T: () => CustomDungeonSetting_1.CustomDungeonSetting },
            { no: 3, name: "dungeon_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { dungeonId: 0, roomList: [], dungeonGuid: 0n };
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
                case /* uint32 dungeon_id */ 2:
                    message.dungeonId = reader.uint32();
                    break;
                case /* repeated CustomDungeonRoom room_list */ 7:
                    message.roomList.push(CustomDungeonRoom_1.CustomDungeonRoom.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* CustomDungeonSetting setting */ 8:
                    message.setting = CustomDungeonSetting_1.CustomDungeonSetting.internalBinaryRead(reader, reader.uint32(), options, message.setting);
                    break;
                case /* uint64 dungeon_guid */ 3:
                    message.dungeonGuid = reader.uint64().toBigInt();
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
        /* uint32 dungeon_id = 2; */
        if (message.dungeonId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.dungeonId);
        /* repeated CustomDungeonRoom room_list = 7; */
        for (let i = 0; i < message.roomList.length; i++)
            CustomDungeonRoom_1.CustomDungeonRoom.internalBinaryWrite(message.roomList[i], writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* CustomDungeonSetting setting = 8; */
        if (message.setting)
            CustomDungeonSetting_1.CustomDungeonSetting.internalBinaryWrite(message.setting, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint64 dungeon_guid = 3; */
        if (message.dungeonGuid !== 0n)
            writer.tag(3, runtime_1.WireType.Varint).uint64(message.dungeonGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CustomDungeon
 */
exports.CustomDungeon = new CustomDungeon$Type();
