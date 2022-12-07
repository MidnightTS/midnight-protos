"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TakeOfferingLevelRewardRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ItemParam_1 = require("./ItemParam");
// @generated message type with reflection information, may provide speed optimized methods
class TakeOfferingLevelRewardRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("TakeOfferingLevelRewardRsp", [
            { no: 4, name: "item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam_1.ItemParam },
            { no: 12, name: "offering_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "take_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { itemList: [], offeringId: 0, takeLevel: 0, retcode: 0 };
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
                case /* repeated ItemParam item_list */ 4:
                    message.itemList.push(ItemParam_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 offering_id */ 12:
                    message.offeringId = reader.uint32();
                    break;
                case /* uint32 take_level */ 10:
                    message.takeLevel = reader.uint32();
                    break;
                case /* int32 retcode */ 3:
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
        /* repeated ItemParam item_list = 4; */
        for (let i = 0; i < message.itemList.length; i++)
            ItemParam_1.ItemParam.internalBinaryWrite(message.itemList[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 offering_id = 12; */
        if (message.offeringId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.offeringId);
        /* uint32 take_level = 10; */
        if (message.takeLevel !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.takeLevel);
        /* int32 retcode = 3; */
        if (message.retcode !== 0)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TakeOfferingLevelRewardRsp
 */
exports.TakeOfferingLevelRewardRsp = new TakeOfferingLevelRewardRsp$Type();
