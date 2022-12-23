"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BartenderCompleteOrderReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ItemParam_1 = require("./ItemParam");
// @generated message type with reflection information, may provide speed optimized methods
class BartenderCompleteOrderReq$Type extends runtime_5.MessageType {
    constructor() {
        super("BartenderCompleteOrderReq", [
            { no: 14, name: "quest_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "optional_order_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "Unk3300_NKMHHHHGHIF", kind: "scalar", jsonName: "Unk3300NKMHHHHGHIF", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "Unk3300_LONHKJFDOND", kind: "scalar", jsonName: "Unk3300LONHKJFDOND", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "Unk3300_POEGPFJLNGB", kind: "scalar", jsonName: "Unk3300POEGPFJLNGB", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "is_view_formula", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam_1.ItemParam }
        ]);
    }
    create(value) {
        const message = { questId: 0, optionalOrderList: [], unk3300NKMHHHHGHIF: 0, unk3300LONHKJFDOND: 0, unk3300POEGPFJLNGB: 0, isViewFormula: false, itemList: [] };
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
                case /* uint32 quest_id */ 14:
                    message.questId = reader.uint32();
                    break;
                case /* repeated uint32 optional_order_list */ 15:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.optionalOrderList.push(reader.uint32());
                    else
                        message.optionalOrderList.push(reader.uint32());
                    break;
                case /* uint32 Unk3300_NKMHHHHGHIF = 6 [json_name = "Unk3300NKMHHHHGHIF"];*/ 6:
                    message.unk3300NKMHHHHGHIF = reader.uint32();
                    break;
                case /* uint32 Unk3300_LONHKJFDOND = 5 [json_name = "Unk3300LONHKJFDOND"];*/ 5:
                    message.unk3300LONHKJFDOND = reader.uint32();
                    break;
                case /* uint32 Unk3300_POEGPFJLNGB = 11 [json_name = "Unk3300POEGPFJLNGB"];*/ 11:
                    message.unk3300POEGPFJLNGB = reader.uint32();
                    break;
                case /* bool is_view_formula */ 8:
                    message.isViewFormula = reader.bool();
                    break;
                case /* repeated ItemParam item_list */ 12:
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
        /* uint32 quest_id = 14; */
        if (message.questId !== 0)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.questId);
        /* repeated uint32 optional_order_list = 15; */
        if (message.optionalOrderList.length) {
            writer.tag(15, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.optionalOrderList.length; i++)
                writer.uint32(message.optionalOrderList[i]);
            writer.join();
        }
        /* uint32 Unk3300_NKMHHHHGHIF = 6 [json_name = "Unk3300NKMHHHHGHIF"]; */
        if (message.unk3300NKMHHHHGHIF !== 0)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.unk3300NKMHHHHGHIF);
        /* uint32 Unk3300_LONHKJFDOND = 5 [json_name = "Unk3300LONHKJFDOND"]; */
        if (message.unk3300LONHKJFDOND !== 0)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.unk3300LONHKJFDOND);
        /* uint32 Unk3300_POEGPFJLNGB = 11 [json_name = "Unk3300POEGPFJLNGB"]; */
        if (message.unk3300POEGPFJLNGB !== 0)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.unk3300POEGPFJLNGB);
        /* bool is_view_formula = 8; */
        if (message.isViewFormula !== false)
            writer.tag(8, runtime_2.WireType.Varint).bool(message.isViewFormula);
        /* repeated ItemParam item_list = 12; */
        for (let i = 0; i < message.itemList.length; i++)
            ItemParam_1.ItemParam.internalBinaryWrite(message.itemList[i], writer.tag(12, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BartenderCompleteOrderReq
 */
exports.BartenderCompleteOrderReq = new BartenderCompleteOrderReq$Type();
