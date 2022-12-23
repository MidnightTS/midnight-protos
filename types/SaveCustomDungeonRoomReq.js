"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveCustomDungeonRoomReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const CustomDungeonRoom_1 = require("./CustomDungeonRoom");
const CustomDungeonSetting_1 = require("./CustomDungeonSetting");
// @generated message type with reflection information, may provide speed optimized methods
class SaveCustomDungeonRoomReq$Type extends runtime_5.MessageType {
    constructor() {
        super("SaveCustomDungeonRoomReq", [
            { no: 1, name: "setting", kind: "message", T: () => CustomDungeonSetting_1.CustomDungeonSetting },
            { no: 4, name: "custom_dungeon_room", kind: "message", T: () => CustomDungeonRoom_1.CustomDungeonRoom },
            { no: 12, name: "is_update_setting", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { isUpdateSetting: false };
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
                case /* CustomDungeonSetting setting */ 1:
                    message.setting = CustomDungeonSetting_1.CustomDungeonSetting.internalBinaryRead(reader, reader.uint32(), options, message.setting);
                    break;
                case /* CustomDungeonRoom custom_dungeon_room */ 4:
                    message.customDungeonRoom = CustomDungeonRoom_1.CustomDungeonRoom.internalBinaryRead(reader, reader.uint32(), options, message.customDungeonRoom);
                    break;
                case /* bool is_update_setting */ 12:
                    message.isUpdateSetting = reader.bool();
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
        /* CustomDungeonSetting setting = 1; */
        if (message.setting)
            CustomDungeonSetting_1.CustomDungeonSetting.internalBinaryWrite(message.setting, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* CustomDungeonRoom custom_dungeon_room = 4; */
        if (message.customDungeonRoom)
            CustomDungeonRoom_1.CustomDungeonRoom.internalBinaryWrite(message.customDungeonRoom, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_update_setting = 12; */
        if (message.isUpdateSetting !== false)
            writer.tag(12, runtime_1.WireType.Varint).bool(message.isUpdateSetting);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SaveCustomDungeonRoomReq
 */
exports.SaveCustomDungeonRoomReq = new SaveCustomDungeonRoomReq$Type();
