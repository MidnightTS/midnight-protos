"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TakeCityReputationParentQuestRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ItemParam_1 = require("./ItemParam");
// @generated message type with reflection information, may provide speed optimized methods
class TakeCityReputationParentQuestRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("TakeCityReputationParentQuestRsp", [
            { no: 3, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "parent_quest_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "city_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam_1.ItemParam }
        ]);
    }
    create(value) {
        const message = { retcode: 0, parentQuestList: [], cityId: 0, itemList: [] };
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
                case /* int32 retcode */ 3:
                    message.retcode = reader.int32();
                    break;
                case /* repeated uint32 parent_quest_list */ 2:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.parentQuestList.push(reader.uint32());
                    else
                        message.parentQuestList.push(reader.uint32());
                    break;
                case /* uint32 city_id */ 14:
                    message.cityId = reader.uint32();
                    break;
                case /* repeated ItemParam item_list */ 7:
                    message.itemList.push(ItemParam_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
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
        /* int32 retcode = 3; */
        if (message.retcode !== 0)
            writer.tag(3, runtime_2.WireType.Varint).int32(message.retcode);
        /* repeated uint32 parent_quest_list = 2; */
        if (message.parentQuestList.length) {
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.parentQuestList.length; i++)
                writer.uint32(message.parentQuestList[i]);
            writer.join();
        }
        /* uint32 city_id = 14; */
        if (message.cityId !== 0)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.cityId);
        /* repeated ItemParam item_list = 7; */
        for (let i = 0; i < message.itemList.length; i++)
            ItemParam_1.ItemParam.internalBinaryWrite(message.itemList[i], writer.tag(7, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TakeCityReputationParentQuestRsp
 */
exports.TakeCityReputationParentQuestRsp = new TakeCityReputationParentQuestRsp$Type();
