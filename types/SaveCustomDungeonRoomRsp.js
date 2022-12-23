"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveCustomDungeonRoomRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const CustomDungeonBlock_1 = require("./CustomDungeonBlock");
// @generated message type with reflection information, may provide speed optimized methods
class SaveCustomDungeonRoomRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("SaveCustomDungeonRoomRsp", [
            { no: 9, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "room_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "error_block_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CustomDungeonBlock_1.CustomDungeonBlock }
        ]);
    }
    create(value) {
        const message = { retcode: 0, roomId: 0, errorBlockList: [] };
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
                case /* int32 retcode */ 9:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 room_id */ 3:
                    message.roomId = reader.uint32();
                    break;
                case /* repeated CustomDungeonBlock error_block_list */ 8:
                    message.errorBlockList.push(CustomDungeonBlock_1.CustomDungeonBlock.internalBinaryRead(reader, reader.uint32(), options));
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
        /* int32 retcode = 9; */
        if (message.retcode !== 0)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 room_id = 3; */
        if (message.roomId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.roomId);
        /* repeated CustomDungeonBlock error_block_list = 8; */
        for (let i = 0; i < message.errorBlockList.length; i++)
            CustomDungeonBlock_1.CustomDungeonBlock.internalBinaryWrite(message.errorBlockList[i], writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SaveCustomDungeonRoomRsp
 */
exports.SaveCustomDungeonRoomRsp = new SaveCustomDungeonRoomRsp$Type();
