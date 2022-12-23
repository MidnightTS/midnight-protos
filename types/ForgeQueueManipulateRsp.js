"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgeQueueManipulateRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ForgeQueueManipulateType_1 = require("./ForgeQueueManipulateType");
const ItemParam_1 = require("./ItemParam");
// @generated message type with reflection information, may provide speed optimized methods
class ForgeQueueManipulateRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("ForgeQueueManipulateRsp", [
            { no: 3, name: "extra_output_item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam_1.ItemParam },
            { no: 12, name: "manipulate_type", kind: "enum", T: () => ["ForgeQueueManipulateType", ForgeQueueManipulateType_1.ForgeQueueManipulateType, "FORGE_QUEUE_MANIPULATE_TYPE_"] },
            { no: 4, name: "return_item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam_1.ItemParam },
            { no: 14, name: "output_item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam_1.ItemParam },
            { no: 11, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { extraOutputItemList: [], manipulateType: 0, returnItemList: [], outputItemList: [], retcode: 0 };
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
                case /* repeated ItemParam extra_output_item_list */ 3:
                    message.extraOutputItemList.push(ItemParam_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* ForgeQueueManipulateType manipulate_type */ 12:
                    message.manipulateType = reader.int32();
                    break;
                case /* repeated ItemParam return_item_list */ 4:
                    message.returnItemList.push(ItemParam_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated ItemParam output_item_list */ 14:
                    message.outputItemList.push(ItemParam_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* int32 retcode */ 11:
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
    internalBinaryWrite(message, writer, options) {
        /* repeated ItemParam extra_output_item_list = 3; */
        for (let i = 0; i < message.extraOutputItemList.length; i++)
            ItemParam_1.ItemParam.internalBinaryWrite(message.extraOutputItemList[i], writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* ForgeQueueManipulateType manipulate_type = 12; */
        if (message.manipulateType !== 0)
            writer.tag(12, runtime_1.WireType.Varint).int32(message.manipulateType);
        /* repeated ItemParam return_item_list = 4; */
        for (let i = 0; i < message.returnItemList.length; i++)
            ItemParam_1.ItemParam.internalBinaryWrite(message.returnItemList[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated ItemParam output_item_list = 14; */
        for (let i = 0; i < message.outputItemList.length; i++)
            ItemParam_1.ItemParam.internalBinaryWrite(message.outputItemList[i], writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* int32 retcode = 11; */
        if (message.retcode !== 0)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ForgeQueueManipulateRsp
 */
exports.ForgeQueueManipulateRsp = new ForgeQueueManipulateRsp$Type();
